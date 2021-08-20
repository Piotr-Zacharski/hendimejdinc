import Link from "next/link";
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
    color: #b76e79;
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
      font-size: 10px;
      padding: 0 10px;
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
`;

export default function Nav() {
    return(
        <NavStyles >
            <Link  exact href="/">Home</Link>
            <Link  href="/mybag">Moja torebka/plecak</Link>
            <Link  href="/contact">Kontakt</Link>
        </NavStyles>
    );
}