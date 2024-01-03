const objectSame = (targetA: object, targetB: object): boolean => {
  const entriesA = Object.entries(targetA).sort(([keyA], [keyB]) => {
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  const entriesB = Object.entries(targetB).sort(([keyA], [keyB]) => {
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  if (entriesA.length !== entriesB.length) return false;

  for (let i = 0; i < entriesA.length; i++) {
    const [keyA, valueA] = entriesA[i];
    const [keyB, valueB] = entriesB[i];

    if (keyA !== keyB) return false;
    if (typeof valueA !== typeof valueB) return false;
    if (
      typeof valueA === "object" &&
      valueA !== null &&
      typeof valueB === "object" &&
      valueB !== null
    ) {
      return objectSame(valueA, valueB);
    }
    if (!Object.is(valueA, valueB)) return false;
  }

  return true;
};

export const isSame = (targetA: unknown, targetB: unknown) => {
  // Object.is로 동등 비교
  if (Object.is(targetA, targetB)) return true;

  // 객체가 타입이 아닌경우 거짓
  if (
    typeof targetA !== "object" ||
    targetA === null ||
    typeof targetB !== "object" ||
    targetB === null
  ) {
    return false;
  }

  return objectSame(targetA, targetB);
  // 객체비교
};

const targetA = {
  name: "foo",
  age: "25",
  country: {
    nation: "대한민국",
    staion: "경상남도",
  },
};

const targetB = {
  name: "foo",
  age: "25",
  country: {
    nation: "대한민국",
    staion: "경상남도",
  },
};

console.log(isSame(targetA, targetB));
