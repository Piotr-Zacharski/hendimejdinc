import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import error from '../static/error.jpg'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000)
    }, [])

    return (
        <div className="not-found">
            <Image src={error} />
            <h2>Oops! Podana strona nie istnieje 🤷</h2>
            <style jsx>{`
                .not-found {
                    background: #fff;
                    padding: 30px;
                    text-align: center;
                    margin: 0 auto;
                    width: 800px;
                    height: 600px;
                    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
                    transform: rotateZ(-1deg);
                }
                h1 {
                    font-size: 3em;
                }
            `}</style>
        </div>
    )
}
export default NotFound
