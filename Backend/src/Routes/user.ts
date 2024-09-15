import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign,verify } from "hono/jwt";
import { SignupSchema } from "@adarsh7/medium_app";
import { SigninSchema } from "@adarsh7/medium_app";
export const userRouter = new Hono<{ Bindings: { DATABASE_URL: string, JWT_SECRET: string } }>();


userRouter.post("/signup", async function(c) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const data=SignupSchema.safeParse(body);
    if(data.success){
      const user_find=await prisma.user.findFirst({where:{email:body.email}})
      if(user_find){
       c.json({message:"user email already exist"});
      }
      else{
       const value = await prisma.user.create({ data: { email: body.email, password: body.password ,name:body.name} });
     //  console.log(value.id);
     
       const token = await sign({ id: value.id,user:value.name }, c.env.JWT_SECRET);
       
       return c.json({ message: token });
      }
    }
    else{
      return c.json({message:"Invalid Input"});
    }
  
   
  });
  
  userRouter.post("/signin", async function(c) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
const data=SigninSchema.safeParse(body);
if(data.success){
  
  const value = await prisma.user.findFirst({ where: { email: body.email, password: body.password } });
    
  if (value) {
    const token =await sign({id:value.id,user:value.name},c.env.JWT_SECRET);
    console.log(token);
    return c.json({message:token});   // if write like this c.json({}) it throw a error
   // return c.json({ message:token });
  } else {
    return c.json({ message: "Invalid credentials" }); 

  }
}
else{
  return c.json({message:"Invalid input"});
}

  });  
