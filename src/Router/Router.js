import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OrderLogin from '../Pages/LoginSignUp/OrderLogin'
import DashBoard from '../Pages/DashBoard/DashBoard';
import OrderPlaced from '../Components/MyCart/OrderPlaced';
import Wishlist from '../Components/WishList/Wishlist';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={OrderLogin} />
                    <Route path="/DashBoard" component={DashBoard} />
                    <Route path="/OrderSuccess" component={OrderPlaced} />
                    <Route path="/Wishlist" component={Wishlist} />

                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router;