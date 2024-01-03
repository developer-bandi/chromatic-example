import { atom } from "recoil";

export const searchValueAtom = atom({
  key: "searchValue", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});

export const searchResultAtom = atom({
  key: "searchResult",
  default: [],
});

export const searchPageAtom = atom({
  key: "searchPage",
  default: 1,
});
