import {useState} from 'react';

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
                type='text'
                placeholder='Enter a city..'
                value={city}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchCall;