import styles from "./post.module.css"
import Image from "next/image"
import Link from "next/link"
export default function PostCard({ post }) {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/post.jpg" alt="" fill className={styles.img}></Image>
                </div>
                <span className={styles.date}>01.01.2024</span>

            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.desc}>{post.desc}</p>
                <Link href={`/blog/${post.id}`}>READ MORE</Link>
            </div>

        </div >
    )
}
