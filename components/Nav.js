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
    color: black;
    text-align: center;
    justify-content: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: lightpink;
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: lightpink;
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
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    // border-top: 1px solid lightgray;
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default function Nav() {
    return(
        <NavStyles>
            <Link exact href="/">Strona Główna</Link>
            <Link href="/bags">Torebki</Link>
            <Link href="/backpacks">Plecaki</Link>
            <Link href="/accessories">Podkładki</Link>
            <Link href="/contact">Kontakt</Link>
        </NavStyles>
    );
}