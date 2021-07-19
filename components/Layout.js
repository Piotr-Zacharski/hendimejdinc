import Link from 'next/link';
import Nav from './Nav'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Col, Container, Row } from 'react-bootstrap';


export default function Layout({ children }) {
    return (
        <div className="layout">
                        <header>
                            <Link href="/">
                                <a>
                                    <h1>
                                        <div className="intro">HendiMejdi</div>
                                    </h1>
                                </a>
                            </Link>
                        </header>
                        <Nav />
                        <Container>
                                <Row>
                                    <Col xs={6} md={12}></Col>
                                        <div className="page-content">{ children }</div>
                                </Row>
                        </Container>

            <footer>Copyright 2021 HendiMejdi <br></br>
            <span className="social-fb"><Link href="/"><FacebookIcon /></Link> </span><span className="social-inst"><Link href="/"><InstagramIcon /></Link></span> <span className="social-tweet"><Link href="/"><TwitterIcon /></Link></span></footer>

            <style jsx>{`
            font-family: 'Lato';
            .social-fb:hover, .social-inst:hover, .social-tweet:hover {
                color: lightpink;
                cursor: pointer;
            }
            `}</style>
        </div>
    )
}