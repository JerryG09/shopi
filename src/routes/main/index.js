import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home';
const Cart = lazy(() => import("../../pages/Cart"));
const Orders = lazy(() => import("../../pages/Orders"));
const Products = lazy(() => import("../../pages/Products"));
const ProductDetails = lazy(() => import("../../pages/ProductDetails"));
const Login = lazy(() => import("../../pages/Login"));
const Signup = lazy(() => import("../../pages/Signup"));
const Services = lazy(() => import("../../pages/Services"));
const Contact = lazy(() => import("../../pages/Contact"));


function App() {
  return (
    <Suspense 
      fallback={
        <div className="d-flex justify-content-center align-items-center h-100">
          <p>Loading...</p>
      </div>
      }
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Products} />
        <Route exact path="/shop/:id" component={ProductDetails} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Suspense>
  );
}

export default App;
