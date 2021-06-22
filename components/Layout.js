import Link from 'next/link';
import Nav from './Nav'
import Image from './Image'


export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link href="/">
                    <a>
                        <h1>
                            <div className="intro">HendiMejdi <Image /></div>
                        </h1>
                    </a>
                </Link>
            </header>
            <Nav />

            <div className="page-content">{ children }</div>

            <footer>Copyright 2021 HendiMejdi</footer>
        </div>
    )
}