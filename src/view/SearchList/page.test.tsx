import { act, render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import userEvent from "@testing-library/user-event";

it("검색어 입력후 검색 버튼을 클릭하면 검색 결과를 보여준다.", async () => {
  render(<App />);

  const inputBox = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button");

  act(() => {
    userEvent.type(inputBox, "테스트");
    userEvent.click(searchButton);
  });

  await waitFor(() => {
    expect(screen.getAllByText("테스트", { exact: false }).length).toBe(20);
  });
});

it("검색어 입력후 검색 버튼을 클릭하였을때 결과가 없을 경우 결과가 없음을 보여준다", async () => {
  render(<App />);

  const inputBox = screen.getByRole("textbox");
  const searchButton = screen.getByRole("button");

  act(() => {
    userEvent.type(inputBox, "검색 결과 없는 검색어");
    userEvent.click(searchButton);
  });

  await waitFor(() => {
    expect(screen.getByText("검색 결과가 없습니다")).toBeInTheDocument();
  });
});
