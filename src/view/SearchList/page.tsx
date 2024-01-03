import styles from "./style.module.css";
import List from "./List/List";
import Search from "./Search/Search";
import Pagenation from "./Pagenation/Pagenation";
import { useEffect, useLayoutEffect } from "react";

const Page = () => {
  useLayoutEffect(() => {});

  return (
    <div className={styles.container}>
      <Search />
      <List />
      <Pagenation count={100} />
    </div>
  );
};

export default Page;
