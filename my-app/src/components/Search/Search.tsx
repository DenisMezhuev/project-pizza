import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { setSearchValue } from "../redux/slices/filterSlice";

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 500),
    []
  );
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>

      <input
        className={styles.input}
        type="text"
        placeholder="Поиск пиццы...."
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
    </div>
  );
};

export default Search;
