import React from 'react'
import AllProject from './components/AllProject'
import Footer from './components/Footer'
import Main from './components/Main';
import { Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar'
import DetailsPage from './components/DetailsPage';

const App = () => {
  return (<>
   <Topbar/>
   <Switch> 
         <Route exact path='/' component={Main} /> 
         <Route exact path='/all' component={AllProject} /> 
         <Route exact path='/detail' component={DetailsPage} /> 


       </Switch>
   <Footer/>
   </>
  )
}

export default App