import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shopping from "./components/shopping";
import Navbar from "./components/navbar"
import Home from './components/home'
import Cart from './components/cart'
import { Provider } from './components/cartContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faMinus, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './App.scss'

library.add(faPlus, faMinus, faShoppingCart);


const Routes = () => {
    return (
        <Provider>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/simple-ecommerce/" component={Home}/>
                    <Route exact path="/simple-ecommerce/shop" component={Shopping} />
                    <Route exact path="/simple-ecommerce/cart" component={Cart} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default Routes;