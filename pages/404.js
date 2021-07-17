import { useEffect } from 'react'
import { useRouter } from 'next/router'


const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 5000)
  }, [])

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oops! Podana strona nie istnieje 🤷</h2>
      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          text-align: center;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  );
}
 
export default NotFound;