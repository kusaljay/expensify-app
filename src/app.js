import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDahsboardPage = () => (
  <div>
    This is from Expense Dahsboard component
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from Create Expense component
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from Edit Expense component
  </div>
);

const HelpPage = () => (
  <div>
    This is from Help component
  </div>
);

const NotFoundPage = () => (
  <div>
    404! Not found.
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDahsboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));