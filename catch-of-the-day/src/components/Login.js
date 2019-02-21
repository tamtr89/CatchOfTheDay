import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
    <nav className="login">
        <h2>Inventory LogIn</h2>
        <p>Sign in to manage your store's inventory</p>

        {/* Login with Github */}
        <button className="github" onClick={() => props.authenticate("Github")}>
            Log in with Github
        </button>

        {/* Login with FB */}
        <button className="facebook" onClick={() => props.authenticate("Facebook")}>
            Log in with Facebook
        </button>

    </nav>
);

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default Login;