import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import error from '../public/error.jpg'


const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div>
            <Image src={error} width={900} height={600}/>
            <h2>Oops! Podana strona nie istnieje 🤷</h2>
        </div>
    )
}
export default NotFound
