import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
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
            <HashRouter basename='/'>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/shop" component={Shopping} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </HashRouter>
        </Provider>
    );
};

export default Routes;