import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
const ExpenseDashboardPage = () => (
  <div>
    This is from dashboard component.
  </div>
);

const AddExpensePage = () => (
  <div>
    This is from add expense component.
  </div>
);

const EditExpensePage = () => (
  <div>
    This is from edit expense component.
  </div>
);

const HelpPage = () => (
  <div>
    This is from help component.
  </div>
);

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
  </div>
);

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;