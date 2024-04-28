import Image from "next/image"
import styles from "./singlepost.module.css"

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json()
}


export default async function singlePost({ params }) {
    const { slug } = params
    // console.log(slug)
    const post = await getData(slug)
    // console.log(params)
    console.log(post)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" alt="post" fill></Image>
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="/post.jpg" alt="" width={50} height={50}></Image>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Date</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>

            </div>

        </div>
    )
}
