import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import DetailPage from './components/detailpage/detailPage';
import HomePage from './components/homepage/homePage';
import SearchPage from './components/searchpage/searchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/search' component={SearchPage} />
          <Route path='/product' component={DetailPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
