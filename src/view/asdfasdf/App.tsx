import Form from "../../lib/bandi-form/form/form";
import "./App.css";
import Input from "../../lib/bandi-form/input/input";
import Button from "../../lib/bandi-form/button/button";
import { validator } from "./helper";
import { searchValue } from "./type";

function App() {
  /* Event Handler */
  const onSubmit = (input: searchValue) => {
    console.log(input);
    alert("제출완료~");
  };

  return (
    <main className="container">
      <h3 className="title">회원가입</h3>
      <Form validator={validator} onSubmit={onSubmit}>
        <Input label="아이디" name="id" />
        <Input label="닉네임" name="nickname" />
        <Input label="비밀번호" name="password" type="password" />
        <Input label="비밀번호 확인" name="passwordCheck" type="password" />
        <Button name="가입하기" />
      </Form>
    </main>
  );
}

export default App;
