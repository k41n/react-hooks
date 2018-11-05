import React, { Component } from 'react';
import './App.css';

import './include/bootstrap';

import Button from './Button';
import Link from './Link';

import HookedButton from './HookedButton';
import HookedLink from './HookedLink';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button caption="I am button" title="This is button tooltip" />
        <Link href="https://shuttlerock.com" caption="I am link" title="This is link tooltip" />
        <HookedButton caption="I am button" title="This is button tooltip" />
        <HookedLink href="https://reactjs.org" caption="I am link" title="This is link tooltip" />
      </div>
    );
  }
}

export default App;
