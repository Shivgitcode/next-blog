import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css"

const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")

    if (res.ok) {
        return res.json()

    }
    else {
        throw new Error("oops something went wrong")
    }

}

export default async function Blog() {
    const posts = await getData()
    return (
        <div className={styles.container}>
            {posts.map((post) => {
                return <div className={styles.post} key={post.id}>
                    <PostCard post={post}></PostCard>


                </div>

            })}



        </div>
    )
}
