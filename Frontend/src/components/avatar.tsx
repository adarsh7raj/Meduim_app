interface Name_type{
    name:string
}
export const Avatar =function({name}:Name_type){
    return(<>
     <div className="rounded-full w-[40px]  h-[40px] bg-slate-200 p-1"><p className="text-center">{name[0].toUpperCase()}</p></div>
    </>)
}