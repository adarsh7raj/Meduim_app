import { string } from "zod";
import { AppBar } from "../components/app_bar";
import { Avatar } from "../components/avatar";
import {useBlog} from "../hooks/index";
import { useParams } from "react-router-dom";
import { BlogSkeleton } from "../components/blog_skeleton";
export const Blog=function(){
    const {id}=useParams();
    const {blog,loading,user}= useBlog({id});
    return (<>
    <div><AppBar name={user||"@"} ></AppBar></div>
    {loading?<div><BlogSkeleton></BlogSkeleton></div>:
    
    
    <div className="flex flex-row justify-around">   
    <div className="flex flex-col ml-[50px] ">
<div className="text-5xl font-bold w-[690px]   mt-[15px]"><div className="w-full">{blog.title} </div></div>
<div className=" mt-[15px]"> Posted on Sept 12, 2024</div>

<div className="text-slate-500 text-[18px] font-normal  max-w-[840px]  mt-[15px]"><div className="w-full">{blog.content} </div></div>
    </div>
    <div className="flex flex-col hidden-block">
<div className=" mt-[15px]"> Author</div>
<div className="flex flex-row">
<div className="mt-[40px] ml-[-20px]"><Avatar name={blog.author.name||"Anonymous"}></Avatar></div>
<div className=" max-w-[250px] w-full text-2xl font-semibold mt-[20px] ml-[10px]">{blog.author.name}</div>
</div>

<div className="max-w-[250px] w-full break-words ml-[30px] mr-[50px] mt-[-20px]">wdwodowowocjwojwojowjdowjdojsdjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhssdsdsdsdsdsdsdsdsdsd</div>
    </div>
    </div>



}
     </>)
}

