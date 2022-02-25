import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Catalog } from './components/Catalog';
import { Inventory } from './components/Inventory';
import { ApplicationPaths } from './components/Constants';

import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path={ApplicationPaths.CatalogPath} component={Catalog} />
        <Route path={ApplicationPaths.InventoryPath} component={Inventory} />
      </Layout>
    );
  }
}
