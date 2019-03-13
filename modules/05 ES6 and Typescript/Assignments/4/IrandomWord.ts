export interface IRandomWord<T>{
  randomize(lengthNum: number): string,
  getGoodOrBad: (value: T) => string
}
