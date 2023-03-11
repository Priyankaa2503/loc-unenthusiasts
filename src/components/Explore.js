import { Post } from "./cards/Post"
export const Explore=()=>{
    return(
        <div className="md:grid md:grid-cols-2 p-12 h-screen w-full justify-center">
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}