import React, { useContext } from 'react';
import NavbarContext from '../context/NavbarContext.js';

const Navbar = () => {
    const context = useContext(NavbarContext);
    
    return(
        <div className="wrapper">
            <div className="row">
                <div className="col mb-2" style={{height: "125px", backgroundColor: "goldenrod"}}>
                    <h1 class="display-3 text-right mt-2">Hi, {context.name}!</h1>
                </div>
            </div>
        </div>
    );
}

export default Navbar;