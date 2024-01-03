export const objectToQueryString = (object) => {
  return Object.entries(object)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => {
      if (typeof value === "string" && value.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/))
        return [key, encodeURI(value)];
      return [key, value];
    })
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
