const Child=(props)=>{
    return(
        <>
            <button onClick={()=>props.func_one("hello",200)}>Click Me</button>
        </>
    )
};
export default Child;