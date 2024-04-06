import { useState, useEffect } from 'react'
import './App.css'
import BrewLogo from './assets/WalkingBeer.jpg'
import PageCall from './components/PageCall'
import SearchCall from './components/SearchCall'
import { Link } from "react-router-dom";

const App = () => {
  const [list, setList] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalBrews] = useState(8251)
  const [currentPage, setCurrentPage] = useState(1);
  const [id, setId] = useState("");
  const [totalPages, setTotalPages] = useState(166);
  const [searchInput, setSearchInput] = useState("");
  const [selectionInput, setSelectionInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);


  useEffect(() => {
    const fetchBreweries = async () =>{
      const response = await fetch(
        `https://api.openbrewerydb.org/v1/breweries?page=${currentPage}&per_page=50&by_city=${searchInput}&by_state=${selectionInput}`);
      const json = await response.json();
      setList(json);
      setTotalItems(json.length);
    };

    fetchBreweries().catch(console.error);
  }, [currentPage, searchInput, selectionInput]);

  /*API information from the docs*/ 
  useEffect(() => {
    const fetchTotalPages = async () => {
      const response = await("https://api.openbrewerydb.org/v1/breweries");
      const totalCount = 50;
      const totalPages = 166;
      setTotalPages(totalPages);
    };
    fetchTotalPages().catch(console.error);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  const handleSearch = (city) => {
    setSearchInput(city);
    setCurrentPage(1);
    setIsSearching(true);
  }

  const handleStateChange = (event) => {
    setSelectionInput(event.target.value);
  }

  return (
    <>
    <div className='navBar'>
      <h1>Planning Pints!</h1>
    </div>
    <img className='brewLogo' src={BrewLogo} width={300}/>
    <SearchCall onSearch={handleSearch}/>
    <select name="states" id="states" value={selectionInput} onChange={handleStateChange}>
      <option value="">None </option>
      <option value="alabama">AL</option>
      <option value="alaska">AK</option>
      <option value="arizona">AZ</option>
      <option value="arkansas">AR</option>
      <option value="california">CA</option>
      <option value="colorado">CO</option>
      <option value="connecticut">CT</option>
      <option value="delaware">DE</option>
      <option value="florida">FL</option>
      <option value="georgia">GA</option>
      <option value="hawaii">HI</option>
      <option value="idaho">ID</option>
      <option value="illinois">IL</option>
      <option value="indiana">IN</option>
      <option value="iowa">IA</option>
      <option value="kansas">KS</option>
      <option value="kentucky">KY</option>
      <option value="louisiana">LA</option>
      <option value="maine">ME</option>
      <option value="maryland">MD</option>
      <option value="massachusetts">MA</option>
      <option value="michigan">MI</option>
      <option value="minnesota">MN</option>
      <option value="mississippi">MS</option>
      <option value="missouri">MO</option>
      <option value="montana">MT</option>
      <option value="nebraska">NE</option>
      <option value="nevada">NV</option>
      <option value="new-hampshire">NH</option>
      <option value="new-jersey">NJ</option>
      <option value="new-mexico">NM</option>
      <option value="new-york">NY</option>
      <option value="north-carolina">NC</option>
      <option value="north-dakota">ND</option>
      <option value="ohio">OH</option>
      <option value="oklahoma">OK</option>
      <option value="oregon">OR</option>
      <option value="pennsylvania">PA</option>
      <option value="rhode-island">RI</option>
      <option value="south-carolina">SC</option>
      <option value="south-dakota">SD</option>
      <option value="tennessee">TN</option>
      <option value="texas">TX</option>
      <option value="utah">UT</option>
      <option value="vermont">VT</option>
      <option value="virginia">VA</option>
      <option value="washington">WA</option>
      <option value="west-virginia">WV</option>
      <option value="wisconsin">WI</option>
      <option value="wyoming">WY</option>
    </select>

    <div>
      <h2>Total pints to try in US: {totalBrews} </h2>
      <h2>List of brews to travel to:</h2>
      <h3>Totel items: {totalItems}</h3>
      <ul className='listContainer'>
        {list.map((brewery) => (
          <>
            <ul className='listItem'>
            <Link
                className='listContainerItem'
                to={`/BrewCall/${brewery.id}`}
                key={brewery.id}>
                {brewery.name} <span className="tab">-</span> {brewery.state_province}
            </Link>
            </ul>
            
          </>
        ))}
    </ul>
    { !isSearching && (selectionInput === '')&& <PageCall 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      }
  </div>
    
      </>
  )
}
export default App
