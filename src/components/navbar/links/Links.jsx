
"use client"
import styles from "./links.module.css"
import Navlink from "./navlinks/Navlink";
import { useState } from "react";

export default function Links() {
    const [open, setOpen] = useState(false)
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog",
        }
    ];
    const session = true
    const isAdmin = true
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {
                    links.map((link) => {
                        return <Navlink item={link}></Navlink>
                    })
                }
                {
                    session ? (
                        <>
                            {isAdmin && <Navlink item={{ title: "Admin", path: "/admin" }}></Navlink>}
                            <button className={styles.logout}>Logout</button>

                        </>


                    ) : (
                        <Navlink item={{ title: "Login", path: "/login" }}></Navlink>

                    )
                }

            </div>

            <button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {links.map((link) => {
                            return <Navlink item={link} key={link.title}></Navlink>
                        })}
                    </div>
                )
            }





        </div >

    )
}
