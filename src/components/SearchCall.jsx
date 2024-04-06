import {useState} from 'react';
import '../styles/searchCall.css';

const SearchCall = ({onSearch}) => {
    const [city, setCity] = useState('');

    const handleInputChange= (event) => {
        setCity(event.target.value);
    }
    const handleSearch = () => {
        onSearch(city);
    }

    return(
        <div className="searchContainer">
            <input 
                className='searchBox'
                type='text'
                placeholder='Enter a city..'
                value={city}
                onChange={handleInputChange}
            />
            <button className='searchBtn' onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchCall;