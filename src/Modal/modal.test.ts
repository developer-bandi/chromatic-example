import { act, renderHook } from "@testing-library/react";
import { useCarousel } from "./Modal";

it("초기값이 캐러샐 길이보다 긴 경우 첫번째 step을 0으로 설정한다", () => {
  const { result } = renderHook(() => useCarousel(5, 3));

  expect(result.current.step).toBe(0);
});

it("마지막이 아닌 스텝에서nextStep 함수를 호출하면 다음 스텝으로 이동한다", () => {
  const { result } = renderHook(() => useCarousel(0, 3));

  act(() => result.current.nextStep());

  expect(result.current.step).toBe(1);
});

it("마지막 스텝에서 nextStep 함수를 호출하면 처음 스텝으로 이동한다", () => {
  const { result } = renderHook(() => useCarousel(2, 3));

  act(() => result.current.nextStep());

  expect(result.current.step).toBe(0);
});

it("처음이 아닌 스텝에서 prevStep 함수를 호출하면 이전 스텝으로 이동한다", () => {
  const { result } = renderHook(() => useCarousel(1, 3));

  act(() => result.current.prevStep());

  expect(result.current.step).toBe(0);
});

it("처음 스텝에서 nextStep 함수를 호출하면 마지막 스텝으로 이동한다", () => {
  const { result } = renderHook(() => useCarousel(0, 3));

  act(() => result.current.prevStep());

  expect(result.current.step).toBe(2);
});
