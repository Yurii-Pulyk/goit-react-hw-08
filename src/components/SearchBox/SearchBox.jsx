import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleSearch = (event) => dispatch(changeFilter(event.target.value));

  return (
    <div className={css.container}>
      <p className={css.text}>Find contacts by Name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleSearch}
      />
    </div>
  );
}
