import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { createBrowserHistory } from 'history';
import { Router,Switch,Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction' 
import SpeciesList from './components/SpeciesList'
import Advertisement from './components/Advertisement'
import AdvertisementPreview from './components/AdvertisementPreview'
import SpeciesPreview from './components/SpeciesPreview'
import Reference from './components/Reference'
import Background from "./components/background";
import TransparentNavBar from "./components/tranparent-navbar";
import Footer from "./components/footer";

const history = createBrowserHistory();
class App extends Component {
  render(){
    return (
      <Router history = {history} >
        <Background/>
        <TransparentNavBar />
        <div style={{position:'relative', marginLeft:'4%', marginRight:'4%', marginTop:'1%', marginBottom:'1%'}}>
          <Switch>
            <Route exact path="/">
              <Introduction/>
            </Route>
            <Route path="/huongdan">
              <Advertisement/>
            </Route>
            <Route path="/loai">
              <SpeciesList/>
            </Route>
            <Route path="/adpreview">
              <AdvertisementPreview/>
            </Route>
            <Route path="/speciespreview">
              <SpeciesPreview/>
            </Route>
          </Switch>
        </div>
        
      </Router>
    );
  }
}
library.add(fas);
export default App;
