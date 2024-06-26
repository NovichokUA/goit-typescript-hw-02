/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log(message);
}

showMessage("Hello World");

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

calc(5, 3);

function customError(): never {
  throw new Error("Error");
}

customError();

export {};
