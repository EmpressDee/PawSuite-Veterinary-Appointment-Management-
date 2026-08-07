function SearchBar({ filterText, setFilterText }) {

    return (
        <div>

   <input id="search-input"
            type="text" 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Enter pet or owner name..."
            
        />
        <button type="submit">Search</button>
        </div>
     
        
    )
}

export default SearchBar