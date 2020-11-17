import Home from './Components/Home'
import Contact from './Components/Contact'
import {Provider} from 'react-redux'
import store from './Redux/store'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/contact" component={Contact}/>

    </Switch>

    </div>
    </Router>
    </Provider>
  );
}

export default App;
