import { useRecoilState } from "recoil";
import { searchResultAtom } from "../store";
import Card from "./Card/Card";
import styles from "./style.module.css";

const List = () => {
  const [searchResult, setSearchResult] = useRecoilState(searchResultAtom);

  console.log(searchResult);

  if (searchResult.length === 0)
    return (
      <div className={styles.container}>
        <div>검색 결과가 없습니다</div>
      </div>
    );

  return (
    <div className={styles.container}>
      {searchResult.map(({ author, download_url }) => (
        <Card title={author} img={download_url} key={author} />
      ))}
    </div>
  );
};

export default List;
