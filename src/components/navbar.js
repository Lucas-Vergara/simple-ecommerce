import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const Navbar = () => {

    // const NavLink = Link

    return(
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="navbar-brand">La Feria Online</div>
            <div>
                <Link to='/simple-ecommerce' className='btn btn-outline-light link'> Home </Link>
                <Link to='/simple-ecommerce/shop' className='btn btn-outline-light link'> Shop </Link>
                <Link to='/simple-ecommerce/cart' className='btn btn-outline-light link'> <FontAwesomeIcon icon='shopping-cart'/> </Link>
            </div>
        </nav>
    )
}

export default Navbar