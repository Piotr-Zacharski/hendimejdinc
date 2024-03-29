import Link from 'next/link'
import styled from 'styled-components'

const NavStyles = styled.ul`
    margin: 0 auto;
    padding: 0;
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    a,
    button {
        padding: 1rem 3rem;
        text-decoration: none;
        color: #222f3e;
        text-align: center;
        justify-content: center;
        position: relative;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 1em;
        background: none;
        border: 0;
        cursor: pointer;
        @media (max-width: 700px) {
            font-size: 12px;
            padding: 0 10px;
        }
        &:after {
      height: 2px;
      background: #b76e79;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
        &:hover,
        &:focus {
            outline: none;
            text-decoration: none;
            color: #b76e79;
            &:after {
                width: calc(100% - 60px);
            }
        }
    }
`
export default function Nav() {
    return (
        <NavStyles>
            <Link exact href="/">
                Home
            </Link>
            <Link href="/gallery">Kolory</Link>
            <Link href="/mybag">Twoja torebka/plecak</Link>
            <Link href="/contact">Kontakt</Link>
        </NavStyles>
    )
}
