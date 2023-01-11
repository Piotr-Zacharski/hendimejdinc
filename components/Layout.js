import Link from 'next/link'
import Nav from './Nav'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link href="/">
                    <a>
                        <h1>
                            <div className="intro">
                                HendiMejdi
                            </div>
                        </h1>
                    </a>
                </Link>
            </header>
            <Nav />
            <div className="page-content">{children}</div>
            <footer className="footer">
                Copyright {new Date().getFullYear()} HendiMejdi <br></br>
                <span className="social-fb">
                    <Link href="/">
                        <FacebookIcon />
                    </Link>{' '}
                </span>
                <span className="social-inst">
                    <Link href="/">
                        <InstagramIcon />
                    </Link>
                </span>
                <span className="social-tweet">
                    <Link href="/">
                        <TwitterIcon />
                    </Link>
                </span>
            </footer>
            <style jsx>{`
                font-family: 'Poppins';
                .social-tweet {
                    margin-left: 4px;
                }
                .social-fb:hover,
                .social-inst:hover,
                .social-tweet:hover {
                    color: gold;
                    cursor: pointer;
                }
                .intro {
                    font-family: 'Montserrat Alternates';
                    font-weight: 500;
                }
            `}</style>
        </div>
    )
}
