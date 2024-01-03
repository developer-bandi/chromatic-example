import { ReactNode, createContext, useEffect, useState } from "react";

export type FormContextContent = {
  formValid: { [index: string]: boolean };
  setFormValue: React.Dispatch<
    React.SetStateAction<{ [index: string]: string }>
  >;
};

export const FormContext = createContext<FormContextContent | null>(null);

type FormProps = {
  children: ReactNode;
  onSubmit: Function;
  validator: Function;
};

const Form = ({ children, onSubmit, validator }: FormProps) => {
  const [formValue, setFormValue] = useState<{ [index: string]: string }>({});
  const [formValid, setFormValid] = useState<{ [index: string]: boolean }>({});

  useEffect(() => {
    const error = validator(formValue);
    setFormValid(error);
  }, [formValue]);

  return (
    <FormContext.Provider value={{ formValid, setFormValue }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formValue);
        }}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
