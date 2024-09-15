import { Hono } from 'hono'
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign,verify } from "hono/jwt";

const app = new Hono<{ Bindings: { DATABASE_URL: string, JWT_SECRET: string } }>();


// app.use("/api/v1/blog/*", async function(c,next){
  
//     var  authorization=c.req.header("authorization")||"";
    
//     const token= await verify(authorization,c.env.JWT_SECRET);
//     if(token.id){
//      await next();
   
//     }
//     else{
//      return c.json({message:"you are not signed in"})
//     }
//    });
   