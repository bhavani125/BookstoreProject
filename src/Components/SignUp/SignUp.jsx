import React from "react";
import './SignUp.css'
import TextField from '@mui/material/TextField';
import { UserSignUp } from "../../Service/UserService";

const fullNameRegex = /[A-Z]{1}[a-z]{4,}/;
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^[+0-9]{10}$/;

function SignUp() {
    const [userObj, setuserObj] = React.useState(
        {
            fullName: "",
            email: "",
            password: "",
            phone: ""
        }
    )
    const [fullNameerror, setfullNameerror] = React.useState(false)
    const [emailerror, setemailerror] = React.useState(false)
    const [passworderror, setpassworderror] = React.useState(false)
    const [phoneerror, setphoneerror] = React.useState(false)

    const[fullNamehelper , setfullNamehelper]=React.useState(" ")
    const[emailhelper,setemailhelper]=React.useState(" ")
    const[passwordhelper,setpasswordhelper]=React.useState(" ")
    const[phonehelper,setphonehelper]=React.useState(" ")


    const takefullName = (event) => {
        setuserObj({ ...userObj, fullName: event.target.value })
    }
    const takeemail = (event) => {
        setuserObj({ ...userObj, email: event.target.value })
    }
    const takepassword = (event) => {
        setuserObj({ ...userObj, password: event.target.value })

    }
    const takephone = (event) => {
        setuserObj({ ...userObj, phone: event.target.value })

    }

    const onSubmit = () => {
        if (fullNameRegex.test(userObj.fullName)) {
            setfullNameerror(false)
            setfullNamehelper(" ")
        } else {
            setfullNameerror(true)
            setfullNamehelper("Enter fullName")

        }

        if (emailRegex.test(userObj.email)) {
            setemailerror(false)
            setemailhelper("")
        } else {
            setemailerror(true)
            setemailhelper("Enter Email")
        }

        if (passwordRegex.test(userObj.password)) {
            setpassworderror(false)
            setpasswordhelper("")
        } else {
            setpassworderror(true)
            setpasswordhelper("Enter password")
        }

        if (phoneRegex.test(userObj.phone)) {
            setphoneerror(false)
            setphonehelper("")
        } else {
            setphoneerror(true)
            setphonehelper("Enter number")
        }

        if (fullNameRegex.test(userObj.fullName) && emailRegex.test(userObj.email) && passwordRegex.test(userObj.password) && phoneRegex.test(userObj.phone)) {
            UserSignUp(userObj)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    return (
        <div className="SignUpContainer">

            <div className="TextContainer">
                <div className="inputField">
                    <div className="texts"> FullName </div>
                    <TextField id="outlined-basic" onChange={takefullName} error={fullNameerror} helperText={fullNamehelper} label="" variant="outlined" />
                </div>
                <div className="inputField">
                    <div className="texts"> Email Id </div>
                    <TextField id="outlined-basic" onChange={takeemail} error={emailerror} helperText={emailhelper} label="" variant="outlined" />
                </div>
                <div className="inputField">
                    <div className="texts"> Password </div>

                    <TextField id="outlined-basic" onChange={takepassword} error={passworderror} helperText={passwordhelper} label="" type="password" />
                </div>

                <div className="inputField">
                    <div className="texts"> MobileNumber </div>
                    <TextField id="outlined-basic" onChange={takephone} error={phoneerror} helperText={phonehelper} label="" variant="outlined" />
                </div>
                <button id="signupbutton" onClick={onSubmit}>Signup</button>

            </div>

        </div >

    )
}
export default SignUp