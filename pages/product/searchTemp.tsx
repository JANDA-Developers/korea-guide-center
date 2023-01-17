import { useRouter } from "next/router";
import { useEffect } from "react";

export default function redirect() {
    const router = useRouter();
    const title = router.query.title

    useEffect(() => {
        if (title) {
            router.push(`/product/search?title=${title}`)
        } else if (title == "") {
            router.push(`/product/search`)
        }
    }, [title])


    return <div>${title}</div>
}