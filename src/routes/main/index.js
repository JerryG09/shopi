import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../../pages/Home';
const Cart = lazy(() => import("../../pages/Cart"));
const Orders = lazy(() => import("../../pages/Orders"));
const Products = lazy(() => import("../../pages/Products"));
const ProductDetails = lazy(() => import("../../pages/ProductDetails"));


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
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetails} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Suspense>
  );
}

export default App;
