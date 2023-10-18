import { DialogBox } from "../../common/DialogBox"

export const LoginForm=(props:any)=>{
return(
    props.open &&(<DialogBox open={props.open} close={props.close}>
        <div>Welcome Back.</div>
        <div>Sign in with Google</div>
        <div>Sign in with Facebook</div>
        <div>Sign in with email</div>
    </DialogBox>)
)
}