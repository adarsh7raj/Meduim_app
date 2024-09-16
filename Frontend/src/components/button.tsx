import {  MouseEvent } from "react";


interface Button_type{
    name:string
    OnClick:(e: MouseEvent<HTMLButtonElement>) => void
}
export const Button=function({name,OnClick}:Button_type){
    return(<>
    <div className="w-full bg-black mt-[20px] max-w-[380px] h-10 rounded"><button className="w-full h-full  text-white " onClick={OnClick}>{name}</button></div>
    </>)

}