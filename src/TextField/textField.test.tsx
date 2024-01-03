// label 클릭시 input foucus
// input 입력시 onChange 핸들러 호출

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import TextField from "./TextField";

test("label을 클릭하면 input이 foucus 됩니다", async () => {
  const title = "일련번호";
  const onChange = jest.fn();

  // ARRANGE
  render(<TextField title="일련번호" onChange={onChange} />);

  // ACT
  userEvent.click(screen.getByText("일련번호"));

  // ASSERT
  expect(screen.getByLabelText(title)).toHaveFocus();
});

test("input에 값을 넣은 만큼 onChange 핸들러가 호출 됩니다", async () => {
  const title = "일련번호";
  const onChange = jest.fn();

  // ARRANGE
  const { container } = render(<TextField title={title} onChange={onChange} />);

  // ACT
  userEvent.click(screen.getByText(title));
  userEvent.type(screen.getByLabelText(title), "hello");

  // ASSERT

  expect(container).toMatchSnapshot();
  expect(onChange).toHaveBeenCalledTimes(5);
});

test("스냅샷 테스트", async () => {
  const { container } = render(
    <TextField title={"일련번호"} onChange={jest.fn()} />
  );

  expect(container).toMatchSnapshot();
});

describe("The Login Page", () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec("npm run db:reset && npm run db:seed");

    // seed a user in the DB that we can control from our tests
    // assuming it generates a random password for us
    cy.request("POST", "/test/seed/user", { username: "jane.lane" })
      .its("body")
      .as("currentUser");
  });

  it("sets auth cookie when logging in via form submission", function () {
    // destructuring assignment of the this.currentUser object
    const { username, password } = this.currentUser;

    cy.visit("/login");

    cy.get("input[name=username]").type(username);

    // {enter} causes the form to submit
    cy.get("input[name=password]").type(`${password}{enter}`);

    // we should be redirected to /dashboard
    cy.url().should("include", "/dashboard");

    // our auth cookie should be present
    cy.getCookie("your-session-cookie").should("exist");

    // UI should reflect this user being logged in
    cy.get("h1").should("contain", "jane.lane");
  });
});
