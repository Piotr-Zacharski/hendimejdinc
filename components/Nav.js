import Link from "next/link";
import NavStyles from '../styles/NavStyles'



export default function Nav() {
    return(
        <NavStyles>
            <Link href="/">Strona Główna</Link>
            <Link href="/bags">Torebki</Link>
            <Link href="/patterns">Plecaki</Link>
            <Link href="/accessories">Podkładki</Link>
            <Link href="/contact">Kontakt</Link>
        </NavStyles>
    );
}