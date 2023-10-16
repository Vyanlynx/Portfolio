'use client'
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [loader, setLoader] = useState<boolean>(true)
    useEffect(() => {
        if (window) {
            let date = new Date();
            let pass = `v${date.getHours()}${date.getMinutes()}${date.getDay()}!@#$%`
            let test = window.sessionStorage.getItem('tokenz')
            if (test === pass) {
                setLoader(false)
            } else {
                setTimeout(() => router.push('/'), 3000)
            }
        }
    }, [])
    return (
        <div style={{ height: "100vh" }}>
            {loader && <div>Session expired! Login Again to continue...</div>}
            {!loader && <object data="Raghul_CV.pdf" type="application/pdf" width="100%" height="100%"></object>}
        </div>
    )
}
