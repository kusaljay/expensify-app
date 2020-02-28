import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
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
    404! Not found. <Link to="/">Go to homepage</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <Link to="/">Home</Link>
    <Link to="/create">Add</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDahsboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));