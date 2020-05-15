import React, { useContext } from 'react';
import NavbarContext from '../context/NavbarContext.js';

const Form = () => {
    const context = useContext(NavbarContext);
    
    const onChangeHandler = e => {
        e.preventDefault();
        context.setName(e.target.value);
    }

    return(
        <div>
            <form className="col-6 mx-auto">
                <label>Your Name: </label>
                <input type="text" name="name" value={context.name} onChange={onChangeHandler}/>
            </form>
        </div>
    );
}

export default Form;