import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import store from './store';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';

const App = () => (
  <Provider store={store}> 
      <Router>
        <div className="App">
          <Header/>
          <h1>My Online Store</h1>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav> */}

          <Routes>
            <Route path="/" exact element={<Products/>} />
            <Route path="/cart" element={<Cart/>} />
            </Routes>
        </div>
      </Router>
      {/* <Products /> */}
    </Provider>
);

export default App;