
import { Input } from "../components/input";
import { useState } from "react";
import { Signin_type } from "@adarsh7/medium_app";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Signin=function(){
    const navigate=useNavigate();
    const [post_inputs,setpost]=useState<Signin_type>({password:"",email:""});
    async function send_request(){
        try{
            const response=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,post_inputs);
            const token=response.data.message;
            console.log(token);
            localStorage.setItem("JWT",token);
            alert("Signed in Successfully");
            navigate("/blogs");
        }
    catch(e){
        console.log(e);
    }
     }
    return (<>
    
<div className="h-screen flex  items-center flex-col">
    <div className="text-4xl mt-[100px] font-bold">Sign in to your account</div>
            <div className="text-slate-400 mt-4">Do not  have a account?<Link  className="underline hover:underline-offset-2" to="/signup">Signup</Link></div>
    
    <Input label="Email" placeholder="abc@gmail.com" type={"email"}  OnChange={function(event){setpost(function(prev){return{...prev,email:event.target.value}})}}></Input>
    <Input label="Password" placeholder="password" type={"password"} OnChange={function(event){setpost(function(prev){return({...prev,password:event.target.value})})}}></Input>
    <Button name="Signin" OnClick={ send_request } ></Button>
     
  </div>
    </>)
}