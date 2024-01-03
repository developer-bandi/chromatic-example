import { useContext, useState } from "react";
import styles from "./style.module.css";
import { FormContext, FormContextContent } from "../form/form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
};

const Input = ({ label, name, type, placeholder }: InputProps) => {
  const { formValid, setFormValue } = useContext(
    FormContext
  ) as FormContextContent;
  const [inputType, setInputType] = useState(type || "text");
  const errorMessage = formValid[name] || "";

  /* Event Handler */
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target?.value;
    setFormValue((prev) => ({ ...prev, [name]: inputValue }));
  };

  const onClickEyesButton = () => {
    if (inputType === "text") setInputType("password");
    if (inputType === "password") setInputType("text");
  };

  if (type === "password") {
    return (
      <div className={styles.container}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <div className={styles.passwordInputBox}>
          <input
            id={name}
            className={styles.passwordInput}
            placeholder={placeholder}
            onChange={onChangeInput}
            type={inputType}
          />
          <button
            onClick={onClickEyesButton}
            className={styles.eyesButton}
            type="button"
          >
            {inputType === "password" ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        </div>
        {errorMessage ? (
          <div className={styles.errorMessage}>{errorMessage}</div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChangeInput}
        type={inputType}
      />
      {errorMessage ? (
        <div className={styles.errorMessage}>{errorMessage}</div>
      ) : null}
    </div>
  );
};

export default Input;
