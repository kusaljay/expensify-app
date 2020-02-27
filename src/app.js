import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDahsboardPage = () => (
  <div>
    This is Expense Dahsboard Page
  </div>
);

const routes = (
  <BrowserRouter>
    <Route path="/" component={ExpenseDahsboardPage} />
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));