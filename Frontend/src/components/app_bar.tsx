import { Link } from "react-router-dom"
import { Avatar } from "./avatar"
interface Name{
    name:string,
    
}
export const  AppBar=function({name}:Name){
    return(<>
    <div className="flex flex-row justify-between mt-[10px] mr-[20px] ml-[20px]">
<div className="text-[20px]"><Link to={"/blogs"}>Medium</Link></div>
<div className="flex flex-row ">
    <Link to="/publish"><div className=" mr-[60px]"><button className="bg-green-500 pb-[2px] rounded-xl text-white hover:bg-green-600  w-[70px] h-[30px]">
  New
</button></div></Link>

<div className=""><Avatar name={name} ></Avatar></div>

</div>
    </div>
    <div className="bg-slate-100  w-full h-0.5 mt-[15px]"></div>
    </>)
}