import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo-AltunIT-Black.png";
import {AiOutlineMail} from "react-icons/ai";
import {VscLock} from "react-icons/vsc";
import "./Login.css";

function Login() {
    return (
        <div>
            <form className="login">
                <img src={logo} alt=" "/>
                {/*<div>*/}
                {/*    <h3>Inloggen</h3>*/}
                {/*</div>*/}
                <div className="fields">
                    <div className="e-mailadres">
                        <label>
                            <AiOutlineMail className="icons"/>
                        <input
                            type="email"
                            placeholder="E-mailadres"
                        />

                        </label>
                    </div>
                    <div className="password">
                        <label>
                            <VscLock className="icons"/>
                        <input
                            type="password"
                            placeholder="Wachtwoord"
                        />
                        </label>
                    </div>
                    <button>Login</button>
                </div>

                <p>Heb je nog geen account? Je kunt
                    <Link to="/signup"> hier </Link> een account aanmaken!
                </p>
            </form>
        </div>
    );
}

export default Login;
