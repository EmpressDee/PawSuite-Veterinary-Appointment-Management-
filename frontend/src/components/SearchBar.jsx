function SearchBar({ filterText, setFilterText }) {

    return (
        <input id="search-input"
            type="text" 
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Enter pet or owner name..."
        />
    )
}

export default SearchBar