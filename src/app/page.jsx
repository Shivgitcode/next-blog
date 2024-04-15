import Image from "next/image";
import styles from "./home.module.css"

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Creative Thoughts Agency.</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat eligendi provident optio iure ea libero vero adipisci nisi dolorum tempore?
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.button}>Contact</button>
                </div>
                <div className={styles.brands}>
                    <Image src="/brands.png" alt="" fill className={styles.brandImg}></Image>

                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/hero.gif" alt="" fill className={styles.heroImg}></Image>
            </div>
        </div>
    )

}
