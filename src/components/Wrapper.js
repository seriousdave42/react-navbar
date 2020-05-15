import React, { useState } from 'react';
import NavbarContext from '../context/NavbarContext.js';
import FormWrapper from './FormWrapper.js';
import Navbar from './Navbar.js';

const Wrapper = () => {
    const [name, setName] = useState("");
    
    return(
        <div>
            <NavbarContext.Provider value={{name, setName}}>
                <Navbar />
                <FormWrapper />
            </NavbarContext.Provider>
        </div>
    );
}

export default Wrapper;