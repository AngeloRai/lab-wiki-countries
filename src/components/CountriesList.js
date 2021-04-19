import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountriesList() {
  
	return (
    
      <div class="col-5" style={{ height: '85vh', overflow: 'scroll' }}>
        <div class="list-group">
          {countries.map((country) => {
            return (
              <Link
                key={country.cca3}
                to={`/${country.cca3}`}
                className="list-group-item list-group-item-action "
              >
                <img
                  src={`https://www.countryflags.io/${country.cca2}/shiny/64.png`}
                  style={{ width: '25px', marginRight: '.7rem' }}
                  alt=""/> {country.name.common}
              </Link>
            );
          })}
        </div>
      </div>
    
  );
}

export default CountriesList;
