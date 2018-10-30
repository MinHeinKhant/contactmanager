import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './components/pages/NotFound';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import About from './components/pages/About';
import { Provider } from './Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route path="/about" component={About} />
                <Route path="/contact/add" component={AddContact} />
                <Route path="/contact/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
