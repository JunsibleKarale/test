export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}

export const TestLib = () => require('./TestFolder/TestLib')
