export function fillArrayToLength<T>(
  array: T[],
  length: number,
  filler: T
): T[] {
  const result = [...array];
  while (result.length < length) {
    result.push(filler);
  }
  return result;
}
