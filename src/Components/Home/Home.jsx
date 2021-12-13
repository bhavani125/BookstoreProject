import React from "react";
import './home.css'
import search from '../../Assests/Home/search.png'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

function Home(props) {

    const OpenMyCart = ()=>{
        props.ListenToCart(true)
        
    }
    return (
        <div>
            <div className="HomeContainer">

                <div className="HeaderSection">

                    <div className="Section1">
                        <img id="bookIcon" src="https://img.icons8.com/ios/30/000000/open-book.png" />
                        <div>BookStore</div>
                    </div>

                    <div className="SearchSec">
                        <Paper
                            component="form"
                            sx={{ p: '1px 1px', display: 'flex', alignItems: 'center', width: 500, height: "34px", backgroundColor: "#FCFCFC" }}

                        >
                            <img id="search" src={search} alt="" />
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search "
                                inputProps={{ 'aria-label': 'search ' }}
                            />
                        </Paper>
                    </div>

                    <div className="profileIcon">
                        <img id="icons" src="https://img.icons8.com/ios/24/000000/manager.png" />
                        <div>profile</div>
                    </div>
                    <div className="CartIcon">
                        <img id="icons" src="https://img.icons8.com/ios/24/000000/favorite-cart.png" onClick={OpenMyCart}/>
                        <div >Cart</div>
                    </div>
                </div>
            </div>
            {/* <div className="TotalBooks">
                <div className="bookheading">Books(128items)</div>
                <button>Sort by relevance</button>
            </div> */}
        </div>
    )
}
export default Home