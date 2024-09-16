import { Quote } from "../components/quote";
import {Input} from "../components/input";
import { Signup_type } from "@adarsh7/medium_app";
import { useState } from "react";
import { Button } from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import  axios  from "axios";
import { BACKEND_URL } from "../config";
export const Signup=function(){
    const navigate=useNavigate();
 const [user_inputs,setUser]=useState<Signup_type>({password:"",email:"",name:""});
 const f1=async function (){
    try{
        const response=await axios.post(`${BACKEND_URL}/api/v1/user/signup`,user_inputs);
        const token=response.data.message;
        console.log(token);
        localStorage.setItem("JWT",token);
        alert("Signup Successfull");
        navigate("/blogs");
    }
catch(e){
    alert("Error while signingup")
    console.log(e);
}
 }
    return(<>
    <div className="grid grid-cols-1 lg:grid-cols-2">
<div>
<div className="h-screen flex  items-center flex-col">
            <div className="text-4xl mt-[100px] font-bold">Create an account</div>
            <div className="text-slate-400 mt-4">Already have a account?<Link  className="underline hover:underline-offset-2" to="/signin">Login</Link></div>
    
      <Input  label="Username"  placeholder="Enter your username" OnChange={function(event){setUser(function(prev){return{...prev,name:event.target.value}})}}></Input>
      <Input label="Email" placeholder="abc@gmail.com" type={"email"}  OnChange={function(event){setUser(function(prev){return{...prev,email:event.target.value}})}}></Input>
      <Input label="Password" placeholder="password" type={"password"} OnChange={function(event){setUser(function(prev){return({...prev,password:event.target.value})})}}></Input>
      <Button name="Signup" OnClick={f1} ></Button>
     
        </div>
</div>
<div className="hidden lg:block">
<Quote></Quote>
</div>

    </div>

    </>)
}