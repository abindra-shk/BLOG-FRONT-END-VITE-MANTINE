import { DialogBox } from "../../common/DialogBox"

export const SignupForm=(props:any)=>{
return(
    props.open &&(<DialogBox open={props.open} close={props.close}>
        <div>Join Medium.</div>
        <div>Sign up with Google</div>
        <div>Sign up with Facebook</div>
        <div>Sign up with email</div>
    </DialogBox>)
)
}