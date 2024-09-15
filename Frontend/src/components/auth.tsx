import { Link } from "react-router-dom"
import{Input} from "./input";
import { Button } from "./button";
import { Signup_type } from "@adarsh7/medium_app";
import { useState } from "react";

export const Auth =function(){
    
 const [post_inputs,setpost]=useState<Signup_type>({password:"",email:"",name:""});
 console.log(post_inputs);
    return(
        <div className="h-screen flex  items-center flex-col">
            <div className="text-4xl mt-[100px] font-bold">Create an account</div>
            <div className="text-slate-400 mt-4">Already have a account?<Link  className="underline hover:underline-offset-2" to="/signin">Login</Link></div>
    
      <Input  label="Username"  placeholder="Enter your username" OnChange={function(event){setpost(function(prev){return{...prev,name:event.target.value}})}}></Input>
      <Input label="Email" placeholder="abc@gmail.com" type={"email"}  OnChange={function(event){setpost(function(prev){return{...prev,email:event.target.value}})}}></Input>
      <Input label="Password" placeholder="password" type={"password"} OnChange={function(event){setpost(function(prev){return({...prev,password:event.target.value})})}}></Input>
      <Button name="Signup" OnClick={ async function(e){const data=await fetch({})}} ></Button>
     
        </div>
    );
}