import { PostRequest } from "../plugins/https";

export const APICreateBlog =(data:any)=>{
    return PostRequest("blog", data);
}