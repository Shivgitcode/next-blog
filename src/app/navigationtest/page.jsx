"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function NavigationTestPage() {
    const router = useRouter()
    const pathname = usePathname()
    const query = useSearchParams()
    function handleClick() {
        console.log("clicked")
        router.push("/")
        // router.refresh()
        // router.forward()
        // router.back()

    }
    return (
        <div>
            <Link href={"/"} prefetch={false}>click here</Link>
            <button onClick={handleClick}>write and redirect</button>

        </div>
    )
}
