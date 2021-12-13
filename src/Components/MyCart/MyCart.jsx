import React from "react";
import './MyCart.css'
import Locationimg from '../../Assests/Home/location.png'
import SortDownimg from '../../Assests/Home/sort-down.png'
import Home from "../Home/Home";
import Footer from "../Footer/footer";
import CartItems from "./CartItems";
import { GetCartBooks } from "../../Service/DataService";
import CustomerDetails from "./CustomerDetails";
import OrderSummery from "./OrderSummery";

function MyCart() {
    const [MycartList, setMyCartList] = React.useState([]);
    const [openCustomerDetails, setOpenCustomerDetails] = React.useState(false)
    const [openOrderDetails, setopenOrderDetails] = React.useState(false)

    const getcartItems = () => {
        GetCartBooks()
            .then((response) => {
                console.log(response)
                const itemsList = response.data.result;
                setMyCartList(itemsList)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    React.useEffect(() => {
        getcartItems()
    }, [])

    const displayCustomerDetails = () => {
        setOpenCustomerDetails(true)
    }
    const displayParticularOrder = () => {
        setopenOrderDetails(true)
    }

    return (
        <div className="MyCartSection">
            <Home />
            <div className="MainMyCart">
                <div className="Cart">
                    <div className="HomeSection">
                        <div>Home/</div>
                        <div>MyCart</div>
                    </div>
                    <div className="BookSections">
                        <div className="BookSection2">
                            <div className="CartAndLocation">
                                <div>My Cart</div>
                                <div className="location">
                                    <div className="locationrow">
                                        <img id="locationimg" src={Locationimg} alt="" />
                                        <div>Use Current Location</div>
                                    </div>
                                    <img id="Sortdownimg" src={SortDownimg} alt="" />
                                </div>
                            </div>
                            <div className="CartItemBooks">
                                {
                                    MycartList.map((bookitem) => <CartItems bookitem={bookitem} getcartItems={getcartItems} />)

                                    
                                }
                            </div>

                            <button id="placeorderButton" onClick={displayCustomerDetails}>PLACEORDER</button>
                        </div>
                    </div>
                    <div className="AddressSection">
                        {
                            openCustomerDetails ? <CustomerDetails displayParticularOrder={displayParticularOrder} /> : <div>Address Details </div>
                        }

                    </div>

                    <div
                        className="OrderSummarySection">
                        {
                            openOrderDetails ?
                                <div className="OrderItemBooks">
                                    {
                                          MycartList.map((bookitem) => <OrderSummery bookitem={bookitem}  />)

                                        // MycartList.map((bookitem) => <CartItems bookitem={bookitem} getcartItems={getcartItems} />)
                                    }
                                </div>
                                : <div> Order Summary</div>


                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default MyCart