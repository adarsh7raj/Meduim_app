import { Hono } from 'hono'
import { Prisma, PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign,verify } from "hono/jwt";
import { BlogSchema,Updated_blog } from '@adarsh7/medium_app';
export const blogRouter=new Hono<{Bindings:{DATABASE_URL:string,JWT_SECRET:string},Variables:{
user_id:string,
user_name:string

}}>();
blogRouter.use("/*", async function(c,next){
  
  const  authorization=c.req.header("authorization")||""; // you have to specify if no header is given then the authorization is null .
  
  const token= await verify(authorization,c.env.JWT_SECRET);
  console.log(token);
  
  
  if(token){
    const token_id=String(token.id);
    const user=String(token.user);
    console.log(user);
    c.set("user_id",token_id);
     c.set("user_name",user);
 await next();
   }
  else{
  return c.json({message:c.status(403)});
  }
 });
blogRouter.post("/", async function(c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try{
    const body= await c.req.json();
    const valid=BlogSchema.safeParse(body);
    if(valid.success){
      const authorId=c.get("user_id");
      const data= await prisma.post.create({data:{title:body.title,content:body.content,published:body.published,author_id:Number(authorId)}});
      
      
          return c.json({ message: "Blog created" });
    }
    else{
      return c.json({message:"Invalid input"});
    }
   
  }
  catch(e){
    c.status(403);
    console.log(e);
    return c.json({message:"You are not authorized"});
  }

  });
  
  blogRouter.put("/", async function(c) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    try {
      const body = await c.req.json();
      const valid=Updated_blog.safeParse(body);
      if(valid.success){
        const userId = c.get("user_id"); // Get the user ID from the JWT token
        const userName=c.get("user_name");
        // First, find the post and check if the current user is the author
        const existingPost = await prisma.post.findFirst({ where: { id: body.id } });
    
        if (!existingPost) {
          return c.json({ message: "Post not found" }, 404);
        }
    
        if (existingPost.author_id !== Number(userId)) {
          // If the user is not the author, return an error
          return c.json({ message: "You are not authorized to update this post" }, 403);
        }
    
        // If the user is the author, proceed with the update
        const updatedPost = await prisma.post.update({
          where: { id: body.id },
          data: {
            title: body.title,
            content: body.content
          }
        });
        return c.json({ message: "Blog updated", data: updatedPost,user:userName });
      }
      else{
        return c.json({message:"Invalid input"});
      }
      
    
    } 
    catch (e) {
      return c.json({ message: "Not authenticated", error: e }, 500);
    }
  });
  
   
  blogRouter.get("/:id", async function(c) {
    // Parse the ID from the URL params
    const id = parseInt(c.req.param("id"));
  
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    try {
      // Fetch post with the specified ID
      const data = await prisma.post.findFirst({ where: { id: id },select:{title:true,content:true,author:{select:{name:true}}} });
  const userName=c.get("user_name");
      if (data) {
        return c.json({  blog: data,user:userName });
      } 
    } 
    catch (e) {
      c.status(411);
      return c.json({ message:e }); // Return 500 for server error
    }
  });
  
  
blogRouter.get("/bulk/posts", async function(c) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());
  try{
    const data=await  prisma.post.findMany({select:{content:true,title:true,id:true,author:{select:{name:true}}}});
    const userName=c.get("user_name");
 return c.json({post:data,user:userName});
  }

catch(e){
  c.status(411);
  return c.json({message:e});
}
  });

