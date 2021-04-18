import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    
      <BrowserRouter>
        <Navbar />

        <div className="container ">
        <div className="row">
          <Route path="/" component={CountriesList} />
          <Route path="/:cca3" component={CountryDetails} />
          </div>
        </div>
      </BrowserRouter>
   
  );
}

export default App;
