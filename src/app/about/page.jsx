import Image from "next/image";
import styles from "./about.module.css";

export default function About() {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image src="/about.png" fill></Image>



            </div>
        </div>
    )
}
