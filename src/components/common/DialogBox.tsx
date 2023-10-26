import close from "../../assets/close.png"

export const DialogBox=(props:any)=>{

    return <>
        <div className="flex items-center justify-center fixed container m-0 h-full top-0 left-0 right-0 z-10" >
            <div className={`top-0 left-0 bg-white bg-opacity-90 w-full h-full ${props.isSwitched ? '' : 'fade-in'}`} onClick={props.close}></div>
            <div className={`flex flex-col absolute items-center w-5/12 h-5/6 shadow-lg rounded bg-white  ${props.isSwitched ? '' : 'zoom-in'}`} >
                <img src={close} onClick={props.close} className="absolute top-4 right-4 w-4 h-4 cursor-pointer hover:contrast-200"/>
                {props.children}
            </div>

        </div>
    </>
}