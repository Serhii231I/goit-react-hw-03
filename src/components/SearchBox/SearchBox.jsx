import s from "../SearchBox/SearchBox.module.css";
const SearchBox = ({ onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className={s.searchContainer}>
      <label>
        Find contacts by name
        <input type="text" className={s.searchInput} onChange={handleChange} />
      </label>
    </div>
  );
};
export default SearchBox;
