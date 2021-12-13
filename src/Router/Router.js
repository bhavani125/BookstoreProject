import { BrowserRouter, Route, Switch } from 'react-router-dom'
import OrderLogin from '../Pages/LoginSignUp/OrderLogin'
import DashBoard from '../Pages/DashBoard/DashBoard';
import CustomerDetails from '../Components/MyCart/CustomerDetails';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={OrderLogin} />
                    <Route path="/DashBoard" component={DashBoard} />
                    <CustomerDetails/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router;