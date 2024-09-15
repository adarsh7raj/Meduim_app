import { Post_type } from "@adarsh7/medium_app";
import { AppBar } from "../components/app_bar";
import {useBlogs} from "../hooks/index.tsx";
import axios from "axios";
import { useState } from "react";
import { BACKEND_URL } from "../config.ts";
export const Publish=function(){
    const {user} =useBlogs();
    const [post,setPost]=useState<Post_type>({title:"",content:""});
   async function Publish(){
        const response= await axios.post(`${BACKEND_URL}/api/v1/blog`,post,{headers:{Authorization:localStorage.getItem("JWT")}})
        console.log(response.data);
        if(response.data!=null){
alert("Blog posted ")
        }
    }

return (<>

<AppBar name={user||"?"}></AppBar>
<div className="flex flex-col">
    <div className="max-w-5xl  ml-[150px] text-[60px] font-serif border-s-[3px] "><input  onChange={function(event){setPost({...post,title:event.target.value})}} className="w-full break-words" type="text" placeholder="Title" ></input></div>
    <div className="max-w-4xl  ml-[150px] mt-[10px] text-[20px] font-serif"><textarea onChange={function(event){setPost({...post,content:event.target.value})}} className="w-full break-words " rows={10} cols={5}  placeholder="Tell your story..."></textarea></div>
    <button className="bg-green-500 ml-[150px] pb-[2px] rounded-xl text-white hover:bg-green-600  w-[100px] h-[30px]" onClick={ Publish}>Publish Blog</button>
</div> 

</>)
}