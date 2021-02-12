import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

const Header = () => {
    return (
        <Navbar color="dark">
            <Container>
                <NavbarBrand href="/">NewsToday</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add">Добавить новость</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header