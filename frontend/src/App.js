import React from 'react';
import Intro1 from "./pages/intro1";

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
    const {username} = this.state;
    return (
        <div className="App">
          {/*<Intro1/>*/}
          {username ? `Hello ${username}` : 'Hello World'}
        </div>
    );
    ;
  }
}

export default App;