import { NavStyle } from "../Style/NavStyle"


const Nav = () => {
    return (
        <NavStyle>
            <section>
            <h1 className="logo ">HEROIS</h1>
                <nav>
                    <a href="/" className="link"><h2>HOME</h2></a>
                    <a href="" className="link"><h2>PRODUTOS</h2></a>
                    <a href="" className="login"><h2>LOGIN</h2></a>
                </nav>
            </section>
        </NavStyle>
    )
}

export default Nav 