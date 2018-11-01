import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
class App extends React.Component {
  handleTitleClick() {
    alert('You clicked title');
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>Adopt me</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
