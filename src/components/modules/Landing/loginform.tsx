import { DialogBox } from "../../common/DialogBox"

export const LoginForm=(props:any)=>{
    const Signup=()=>{
        props.close();
        props.signup();
        props.switch();
    }
return(
    props.open &&(<DialogBox open={props.open} close={props.close} isSwitched={props.isSwitched}>
        <div>Welcome Back.</div>
        <div>Sign in with Google</div>
        <div>Sign in with Facebook</div>
        <div>Sign in with email</div>
        <div>No account? <span onClick={Signup} className="text-green-700 font-extrabold cursor-pointer hover:text-green-900">Create one</span></div>
    </DialogBox>)
)
}