import React, {Component} from 'react';
import { BrowserRouter as Router, 
  Route, 
  Switch, 
  Redirect 
} from 'react-router-dom';
import MainPage from './pages/index';
import NotFound from './pages/404';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/contact' component={ContactPage}/>
          <Route exact path='/experience' component={ExperiencePage}/>
          <Route exact path='/education' component={EducationPage}/>
          <Route exact path='/404' component={NotFound}/>
          <Redirect to='/404' />
        </Switch>
      </Router>
    );
  }
}

export default App;
