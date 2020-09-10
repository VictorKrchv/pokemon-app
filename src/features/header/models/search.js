import { createStore, createEvent } from "effector";

export const $searchValue = createStore("");
export const valueChanged = createEvent();

$searchValue.on(valueChanged, (_, e) => {
  return e.target.value;
});
