import { useRecoilState } from "recoil";
import styles from "./style.module.css";
import { FaSearch } from "react-icons/fa";
import { searchResultAtom, searchValueAtom, searchPageAtom } from "../store";

const Search = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);
  const [searchResult, setSearchResult] = useRecoilState(searchResultAtom);
  const [page, setPage] = useRecoilState(searchPageAtom);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickButton = async (e: React.MouseEvent<HTMLButtonElement>) => {
    fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${20}&keyword=${searchValue}`
    )
      .then((response) => response.json())
      .then((json) => setSearchResult(json));
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} onChange={onChangeInput} />
      <button className={styles.button} onClick={onClickButton}>
        <FaSearch size="20" />
      </button>
    </div>
  );
};

export default Search;
