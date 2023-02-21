const Child =(props)=>{
    return(
        <>
        <button onClick={()=>props.func_one("ReactJs")}>Click</button>
        </>
    )
}
export default Child;