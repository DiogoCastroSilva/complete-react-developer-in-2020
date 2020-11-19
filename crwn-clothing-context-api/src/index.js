import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

import './index.css';
import App from './App';
import CartProvider from './providers/cart/cart.provider';

ReactDOM.render(
  <Provider store={store}>
    <CartProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </CartProvider>
  </Provider>,
  document.getElementById('root')
);
