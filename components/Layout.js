import Link from 'next/link';
import Nav from './Nav'
import styled from 'styled-components';

const Logo = styled.span`
font-size: 2rem;
align-items: center;
justify-content: center;
display: flex;
`;

export default function Layout({ children }) {
    return (
        <div className="layout">
            <header>
                <Link href="/">
                    <a>
                        <h1>
                            <span>HendiMejdi</span>
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