import { DialogBox } from "../../common/DialogBox"

export const SignupForm=(props:any)=>{
    const SignIn=()=>{
        props.close();
        props.login();
    }
return(
    props.open &&(<DialogBox open={props.open} close={props.close}>
        <div>Join Medium.</div>
        <div>Sign up with Google</div>
        <div>Sign up with Facebook</div>
        <div>Sign up with email</div>
        <div>Already have an account? <span onClick={SignIn} className="text-green-700 font-extrabold cursor-pointer hover:text-green-900">Sign in</span></div>
    </DialogBox>)
)
}