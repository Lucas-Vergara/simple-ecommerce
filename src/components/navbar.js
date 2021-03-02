import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'



const Navbar = () => {

    return(
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="navbar-brand">La Feria Online</div>
            <div>
                <Link to='/' className='btn btn-outline-light link'> Home </Link>
                <Link to='/shop' className='btn btn-outline-light link'> Shop </Link>
                <Link to='/cart' className='btn btn-outline-light link'> <FontAwesomeIcon icon='shopping-cart'/> </Link>
            </div>
        </nav>
    )
}

export default Navbar