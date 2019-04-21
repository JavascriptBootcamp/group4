import PairModel from './pair.model';

export default interface CalcModel {
    sum: (pair: PairModel) => number;
}