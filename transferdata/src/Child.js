const Child=(props)=>{
    return(
        <>
        <button onClick={()=>props.func_one("hello",100)}>Clickme</button>
        </>
    )
};
export default Child;