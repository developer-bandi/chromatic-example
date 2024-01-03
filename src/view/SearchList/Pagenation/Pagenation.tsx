import { Pagination } from "@mui/material";
import styles from "./style.module.css";
import { useRecoilState } from "recoil";
import { searchPageAtom, searchResultAtom, searchValueAtom } from "../store";

const Pagenation = ({ count }: { count: number }) => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);
  const [page, setPage] = useRecoilState(searchPageAtom);
  const [searchResult, setSearchResult] = useRecoilState(searchResultAtom);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=${20}&keyword=${searchValue}`
    )
      .then((response) => response.json())
      .then((json) => setSearchResult(json));
  };

  if (searchResult.length === 0) return null;

  return (
    <div className={styles.container}>
      <Pagination count={count} page={page} onChange={handleChange} />
    </div>
  );
};

export default Pagenation;
