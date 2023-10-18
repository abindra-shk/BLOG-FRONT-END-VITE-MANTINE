export const DialogBox=(props:any)=>{

    return <>
        <div className="flex items-center justify-center fixed container m-0 h-full top-0 left-0 z-10" >
            <div className="top-0 left-0 bg-white bg-opacity-90 w-full h-full fade-in" onClick={props.close}></div>
            <div className="flex-col absolute items-center justify-center w-5/12 h-5/6 shadow-lg rounded bg-white zoom-in" >
                {props.children}
            </div>

        </div>
    </>
}