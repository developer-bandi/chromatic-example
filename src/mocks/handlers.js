import { rest } from "msw";

const result = new Array(200).fill(0).map((_, index) => {
  return {
    download_url: "https://picsum.photos/150/150",
    author: `테스트${index}`,
  };
});

const handlers = [
  rest.get("https://picsum.photos/v2/list", (req, res, ctx) => {
    const url = new URL(req.url);

    const page = url.searchParams.get("page");
    const keyword = url.searchParams.get("keyword");

    return res(
      ctx.json(
        keyword === "테스트" ? result.slice((page - 1) * 20, page * 20) : []
      )
    );
  }),
];

export default handlers;
