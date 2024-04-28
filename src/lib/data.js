import { Post } from "./models"
import { connectToDb } from "./utils"

export const getPosts = async () => {
    try {
        connectToDb()
        const allPost = await Post.find({})
        return Post

    }
    catch (err) {

    }
}