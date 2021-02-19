import React from 'react';
import GlobalStyle from "./styles/globalStyle";
import Routers from "./Routers";

import { BrowserRouter } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:null
    };
  }
  componentDidMount() {
    fetch('api')
        .then(res=>res.json())
        .then(data=>this.setState({username:data.username}));
  }
  render() {
    return (
        <BrowserRouter>
          <GlobalStyle/>
          <Routers/>
        </BrowserRouter>
    );
    ;
  }
}

export default App;

