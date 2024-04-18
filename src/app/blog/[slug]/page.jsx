import Image from "next/image"
import styles from "./singlepost.module.css"


export default function singlePost() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" alt="post" fill></Image>
            </div>

            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam!


                </div>

            </div>

        </div>
    )
}
