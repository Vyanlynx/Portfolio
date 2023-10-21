import { useRouter } from 'next/navigation'
import React from 'react'

export default function DynamicComponent() {
    const router = useRouter();
    console.log(router)
    return <p>Post</p>
}
