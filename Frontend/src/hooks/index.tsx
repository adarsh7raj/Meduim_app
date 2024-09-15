import axios from "axios";
import { useState,useEffect } from "react";
import { BACKEND_URL } from "../config";
interface Blogs{
  
    content: string;
    title: string;
    id:number;
   
    author: {name:string};
    
  }
  interface Blog{
    content:string,
    title:string,
    author:{name:string}
  }
 export const useBlogs=function(){
   
const [loading,setLoading]=useState(true);
const [blogs,setBlogs]=useState<Blogs[]>([]);
const [user,setUser]=useState("");
useEffect(  function(){
    const response=axios.get(`${BACKEND_URL}/api/v1/blog/bulk/posts`,{headers:{Authorization:localStorage.getItem("JWT")}});
    response.then(function(value){
        
        console.log("hello");
        setUser(value.data.user);
        setBlogs(value.data.post);
        setLoading(false);
        
    })
},[]);
 
return {loading,blogs,user};
}
interface ID{
    id:string|undefined
}
export const useBlog=function({id}:ID){
   
    const [loading,setLoading]=useState(true);
    const [blog,setBlog]=useState<Blog>({title:"",content:"",author:{name:""}});
    const [user,setUser]=useState<string>("");
    useEffect(  function(){
        const response=axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{headers:{Authorization:localStorage.getItem("JWT")}});
        response.then(function(value){
        
            console.log("hello");
            setUser(value.data.user);
            setBlog(value.data.blog);
            setLoading(false);
            
        })
    },[id]);
     return {blog,loading,user}
}

