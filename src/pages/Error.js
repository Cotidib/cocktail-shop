import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <section className="error-section">
            <h1>oops! it's a dead end</h1>
            <Link to="/" className="backhome-btn">back home</Link>
        </section>
    )
}

export default Error
