
import { Link } from "react-router-dom"
import {Avatar} from "./avatar.tsx"
interface Blog_card{
    id:number,
    author_name: string,
    title:string,
    content:string,
    date:string
}

export const BlogsCard=function({author_name,title,content,date,id}:Blog_card){
    return(<>
<Link to={`/blog/${id}`}>
    <div className="flex ml-[70px] S flex-col cursor-pointer">
     
        <div className="flex  h-[50px] flex-row text-[17px] justify-items-stretch">
        
            <Avatar name={author_name}></Avatar>
           
           
            <div className="mt-[5px] ml-[20px] ">{author_name}.</div>
            <div className="rounded-full w-[3px] h-[3px] bg-slate-500 mt-[17px] ml-[10px]"></div>
            <div className="mt-[5px] ml-[10px] font-light text-slate-500">{date}</div>
        </div>
        
        <div className="max-w-[850px] text-2xl w-full break-words font-bold">{title}</div>
        <div className="max-w-[910px]  w-full break-words text-lg text-slate-500 ">{content.slice(0,200)+"..."}</div>
        <div className="text-slate-500">{Math.ceil(content.length/100)} minutes read</div>
         <div className="bg-slate-100 max-w-[1000px] w-full h-0.5 mt-[20px]"></div>
         
    </div>
   </Link>
    
    </>)
}