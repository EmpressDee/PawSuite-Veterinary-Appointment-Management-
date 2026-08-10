import { Search } from "lucide-react";
import "./SearchBar.css";

function SearchBar({ filterText, setFilterText }) {
  return (
    <div className="search-wrapper">
      <Search className="search-icon" size={18} />
      <input
        id="search-input"
        type="text"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Enter pet or clients name..."
        className="search-input"
      />

      <button type="submit" className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
