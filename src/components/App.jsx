import { Component } from 'react';
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  
  render() {
    return (
      <Layout>
        <GlobalStyle />
      </Layout>
    );
  }
}

