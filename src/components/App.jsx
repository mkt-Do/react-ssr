import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

export default function App() {
 return (
    <div>
      <ul>
        <li><Link to='/1'>page 1</Link></li>
        <li><Link to='/2'>page 2</Link></li>
      </ul>
      <Switch>
        <Route path='/1' component={() => (<div><h1>page 1</h1></div>)} />
        <Route path='/2' component={() => (<div><h1>page 2</h1></div>)} />
      </Switch>
    </div>
  );
}

