import React from "react";
import TextField from '@mui/material/TextField';
import './CustomerDetails.css'
import { CustomerDetailsEdit } from "../../Service/DataService";
import { getThemeProps } from "@mui/system";

function CustomerDetails(props) {

    const [customerObj, setcustomerObj] = React.useState(
        {
            addressType: "",
            fullAddress: "",
            city: "",
            state: ""

        }
    )
    const takeaddresstype = (event) => {
        setcustomerObj({ ...customerObj, addressType: event.target.value })
    }
    const takefulladdress = (event) => {
        setcustomerObj({ ...customerObj, fullAddress: event.target.value })
    }
    const takecity = (event) => {
        setcustomerObj({ ...customerObj, city: event.target.value })
    }
    const takestate = (event) => {
        setcustomerObj({ ...customerObj, state: event.target.value })
    }

    const onSubmit = () => {
        CustomerDetailsEdit(customerObj)
            .then((response) => {
                console.log(response)
                props.displayParticularOrder(true)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="customerdetailsSection">
            <div className="DetailsContainer">
                <div className="customerSection1">
                    <div className="Details">Customer Details</div>
                    <div className="AddressButton">Add New Address</div>
                </div>
                <div className="NameAndNumber">
                    <div className="customerinputfield">
                        <div className="Text"> FullName </div>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </div>
                    <div className="customerinputfield">
                        <div className="Text"> MobileNumber </div>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </div>

                </div>
                <div className="AdreesField">
                    <div className="Text"> Address</div>
                    <TextField id="outlined-basics" onChange={takefulladdress} label="" variant="outlined" />
                </div>
                <div className="CityAndState">
                    <div className="customerinputfield">
                        <div className="Text"> City/Town </div>
                        <TextField id="outlined-basic" onChange={takecity} label="" variant="outlined" />
                    </div>
                    <div className="customerinputfield">
                        <div className="Text"> State</div>
                        <TextField id="outlined-basic" onChange={takestate} label="" variant="outlined" />
                    </div>

                </div>
                <div className="RadioButtons" onChange={takeaddresstype}>
                    <div className="TextType"> Type</div>
                    <div className='radiobtns'>
                        <div>  <input type='radio' value="Home" /> Home</div>
                        <div> <input type='radio' value="Work" /> Work</div>

                        <div><input type='radio' value="other" /> Other</div>
                    </div>

                </div>
                <div className="ContinueButton" onClick={onSubmit}>Continue</div>

            </div>
        </div>
    )
}
export default CustomerDetails