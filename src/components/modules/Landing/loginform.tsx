import { DialogBox } from "../../common/DialogBox"
import email from "../../../assets/emailicon.png"
import google from "../../../assets/googleicon.png"
import facebook from "../../../assets/facebookicon.webp"
import apple from "../../../assets/appleicon.png"
import twitter from "../../../assets/twittericon.png"

export const LoginForm=(props:any)=>{
    const Signup=()=>{
        props.close();
        props.signup();
        props.switch();
    }
return(
    props.open &&(<DialogBox open={props.open} close={props.close} isSwitched={props.isSwitched}>
        <div className="font-serif text-3xl mt-16 mb-16">Welcome back.</div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={google}/><span className="flex-1 text-center">Sign in with Google</span></div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={facebook}/><span className="flex-1 text-center">Sign in with Facebook</span></div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={apple}/><span className="flex-1 text-center">Sign in with Apple</span></div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={twitter}/><span className="flex-1 text-center">Sign in with Twitter</span></div>
        <div className="border border-black w-1/2 rounded-full my-1 py-1 flex items-center justify-center cursor-pointer"><img className="w-4 h-4 inline ml-2" src={email}/><span className="flex-1 text-center">Sign in with email</span></div>
        <div className="mt-8">No account? <span onClick={Signup} className="text-green-600 font-extrabold cursor-pointer hover:text-green-700">Create one</span></div>
    </DialogBox>)
)
}