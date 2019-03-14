export interface Iplay{
    play(song: string): string | void;
    next(): string | void;
    prev(): string | void;

}