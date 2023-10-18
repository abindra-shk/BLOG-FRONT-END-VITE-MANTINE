import { DialogBox } from "../../common/DialogBox"
import email from "../../../assets/emailicon.png"
import google from "../../../assets/googleicon.png"
import facebook from "../../../assets/facebookicon.webp"

export const SignupForm=(props:any)=>{
    const SignIn=()=>{
        props.close();
        props.login();
        props.switch();
    }
return(
    props.open &&(<DialogBox open={props.open} close={props.close} isSwitched={props.isSwitched}>
        <div className="font-serif text-3xl mt-28 mb-16">Join Medium.</div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={google}/><span className="flex-1 text-center">Sign up with Google</span></div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={facebook}/><span className="flex-1 text-center">Sign up with Facebook</span></div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={email}/><span className="flex-1 text-center">Sign up with email</span></div>
        <div className="mt-8">Already have an account? <span onClick={SignIn} className="text-green-600 font-extrabold cursor-pointer hover:text-green-700">Sign in</span></div>
    </DialogBox>)
)
}