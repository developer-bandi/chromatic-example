import {
  idErrorMessage,
  nicknameErrorMessage,
  passwordCheckErrorMessage,
  passwordErrorMessage,
} from "./constant";
import { searchValue } from "./type";

export const idValidator = (input: string) => {
  const regExp = /[a-zA-Z0-9]{6,15}/;
  return !!input.match(regExp);
};

export const nicknameValidator = (input: string) => {
  const regExp = /[ㄱ-ㅎ가-힣a-zA-Z0-9]{6,15}/;
  return !!input.match(regExp);
};

export const passwordValidator = (input: string) => {
  const regExp = /[a-zA-Z0-9]{8,20}/;
  return !!input.match(regExp);
};

export const passwordCheckValidator = (inputA: string, inputB: string) =>
  inputA === inputB;

export const validator = (input: searchValue) => {
  const idValue = input?.id || "";
  const nicknameValue = input?.nickname || "";
  const passwordValue = input?.password || "";
  const passwordCheckValue = input?.passwordCheck || "";

  return {
    id: idValidator(idValue) || idErrorMessage,
    nickname: nicknameValidator(nicknameValue) || nicknameErrorMessage,
    password: passwordValidator(passwordValue) || passwordErrorMessage,
    passwordCheck:
      passwordCheckValidator(passwordValue, passwordCheckValue) ||
      passwordCheckErrorMessage,
  };
};
