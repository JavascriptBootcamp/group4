interface IPlay {
    play(song: string): void;
    next(): string | void;
    prev(): string | void;
}
