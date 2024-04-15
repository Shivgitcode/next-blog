'use client'

import Link from 'next/link'
import styles from './navlinks.module.css'
import { usePathname } from 'next/navigation'
export default function Navlink({ item }) {
    const pathName = usePathname()
    console.log(pathName)
    return (
        <Link href={item.path} key={item.title} className={`${styles.container} ${pathName === item.path && styles.active}`}> {item.title}</ Link>
    )
}
