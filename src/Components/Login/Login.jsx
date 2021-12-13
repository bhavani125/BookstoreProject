import React from "react";
import './Login.css';

import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import { UserLoginIn } from "../../Service/UserService";

const emailregex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

function LoginIn() {
    const [userObj, setuserObj] = React.useState({ email: "", password: "" })

    const [emailerror, setemailerror] = React.useState(false)
    const [passworderror, setpassworderror] = React.useState(false)


    const takeemail = (event) => {
        setuserObj({ ...userObj, email: event.target.value })
    }
    const takepassword = (event) => {
        setuserObj({ ...userObj, password: event.target.value })
    }

    const onsubmit = () => {
        console.log(userObj);

        if (emailregex.test(userObj.email)) {
            setemailerror(false)
        } else {
            setemailerror(true)
        }

        if (passwordRegex.test(userObj.password)) {
            setpassworderror(false)
        } else {
            setpassworderror(true)
        }
        if (emailregex.test(userObj.email) && passwordRegex.test(userObj.password)) {

            UserLoginIn(userObj)
                .then((response) => {
                    console.log(response)
                    console.log(response.data.result.accessToken)

                    localStorage.setItem("token", response.data.result.accessToken)

                })
                .catch((error) => {
                    console.log(error)
                })

        }
    }
    return (
        <div className="LoginContainer">

            <div className="fieldContainer">
                <div className="inputFields">
                    <div className="text"> Email Id </div>
                    <TextField id="outlined-basic" onChange={takeemail} error={emailerror} label="" variant="outlined" />
                </div>

                <div className="inputFields">
                    <div className="text"> Password </div>

                    <TextField id="outlined-basic" onChange={takepassword} error={passworderror} label="" type="password" />
                    <Link href="#" underline="none" id="forgot">
                        {'Forgot password?'}
                    </Link>
                </div>

                <button id="button1" onClick={onsubmit}>Login</button>

                <div>-----------OR-----------</div>

                <div className="FGbuttons">
                    <button id="button2">Facbook</button>
                    <button id="button3">Google</button>
                </div>
            </div>

        </div>

    )
}
export default LoginIn