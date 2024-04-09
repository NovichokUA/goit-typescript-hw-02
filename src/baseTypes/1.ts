// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
let age: number;
let name: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;

let callback = (a: number): number => {
  return 100 + a;
};

// let callback: (a: number) => number = (a) => {
//   return 100 + a;
// };

age = 50;
name = "Max";
toggle = true;
empty = null;
notInitialize;
callback = (a) => {
  return 100 + a;
};

export {};
