export function createIndexByInput(input: number, array: string[]) {
  for (let index = 0; index < input - 1; index++) {
    array.push("");
  }

  return array;
}
