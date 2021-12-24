import React, { useState } from "react";
import './OrderLogin.css';

import shoppingicon from '../../Assests/loginpage/shoppingicon.png'
import LoginIn from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";

function MainDesign() {

    const [OpenLogininSignup, setOpenLoginSignup] = useState(false)
    const displayLogin = () => {
        setOpenLoginSignup(false)
    }
    const displaySignin = () => {
        setOpenLoginSignup(true)
    }
    return (
        <div className="MainContainer">

            <div className="imgContainer">
                <div className="ImgContainer">
                    <img id="imgIcon" src={shoppingicon} alt="" />
                    <div className="Name">
                        <h>Online Book Shopping</h>
                    </div>
                </div>
            </div >

            <div className="loginSignupContainer">
                <div className="loginSignupContainer2">
                    <div className="HeadNames">
                        <div onClick={displayLogin}>  Login    </div>
                        <div onClick={displaySignin}>  Signup   </div>
                    </div>
                    <div className="Components">
                        {
                            OpenLogininSignup ? (<SignUp />) : (<LoginIn />)
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
export default MainDesign