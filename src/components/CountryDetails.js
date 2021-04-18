import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

function CountryDetails(props) {
  const foundCountry = countries.find((country) => {
    return country.cca3 === props.match.params.cca3;
  });

  return (
    <div class="col-7">
      <div className="d-flex">
          <img
            src={`https://www.countryflags.io/${foundCountry.cca2}/flat/64.png`}
            style={{ width: '45px' }}
            alt=""
          /> <h1>{foundCountry.name.common}</h1>  
          
      </div>
      <table class="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km<sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((abbreviation) => {
                  return (
                    <Link key={abbreviation} to={`/${abbreviation}`}>
                      <li>
                        {
                          countries.find(
                            (country) => country.cca3 === abbreviation
                          ).name.common
                        }
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
