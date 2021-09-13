import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Error404 from './Pages/Error404';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className='container-navbar'>

          <div className='label'>
            <img className='label-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="pokePic" />
          </div>

          <div className='container-navLink'>
            <NavLink
            
              className='navLink' exact to='/' activeClassName='nav-active'>
              <img src="https://fontmeme.com/permalink/210913/f45336d296028f78033a3d6bc77b87dd.png" alt="pokemon-font" border="0"/>
                </NavLink>
            <NavLink
              className='navLink' to='/Login' activeClassName='nav-active'>
              <img src="https://fontmeme.com/permalink/210913/2ac26ad43eb58b9553190db09a7c8dfd.png" alt="pokemon-font" border="0"/>
                </NavLink>
          </div>

        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exat path='/Login' component={Login} />
          <Route exat path='*' component={Error404} />

        </Switch>
      </BrowserRouter>
    </div>

  );
};

export default App;