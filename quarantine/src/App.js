import React from 'react';
import './App.css';
import QA from './QA/qa.js';
import QAAdmin from './QA/qaAdmin.js';
import Questionnaire from './questionnaire/questionnaire.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
              <Route path="/questionnaire/" component={Questionnaire} />
              <Route path="/qa/" component={QA} />
              <Route path="/qaAdmin/" component={QAAdmin} />
            </Switch>
          </Router>
        </div>
        );
    }
}

export default App;
