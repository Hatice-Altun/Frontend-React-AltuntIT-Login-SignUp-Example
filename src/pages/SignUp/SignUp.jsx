import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/Logo-AltunIT-Black.png";
import {AiOutlineMail} from "react-icons/ai";
import {VscLock} from "react-icons/vsc";
import "./SignUp.css";

function SignUp() {
    return (
        <div>
            <form className="signup">
                <img src={logo} alt=" "/>
                {/*<div>*/}
                {/*    <h3>Account aanmaken</h3>*/}
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
                    <div>
                        <div className="password">
                            <label>
                                <VscLock className="icons"/>
                                <input
                                    type="password"
                                    placeholder="Wachtwoord"
                                />
                            </label>
                        </div>
                    </div>
                    <button>Account aanmaken</button>
                </div>
                <p>Heb je al een account? Je kunt
                    <Link to="/"> hier </Link> inloggen!
                </p>
            </form>
        </div>
    );
}

export default SignUp;
