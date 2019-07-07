const { removeSong, sortSongs, addSong, updateSong } = require('./song');

describe('Given an array of songs and an index', () => {
    const sampleSongs = ['Oops I Did It Again', 'My Heart Go On', 'The Lion Sleeps Tonight'];
    const index = 0;
    const selectedSong = sampleSongs[index];
    describe('When removing a song at this index', () => {
        const newSampleSongs = removeSong(sampleSongs, index);
        it('Then array length should be decreased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length - 1);
        });
        it('Then this index should not be contained in the array', () => {
            expect(newSampleSongs[index]).not.toBe(selectedSong);
        });
    })
});


describe('Given an array of songs', () => {
    const sampleSongs = [{title:'a'}, {title:'c'}, {title:'b'}];
    describe('When sort the array', () => {
        const newSampleSongs = sortSongs(sampleSongs);
        it('Then array should be sorted by the title of the songs', () => {
            expect(newSampleSongs).toStrictEqual([{title:'a'}, {title:'b'}, {title:'c'}]);
        });
    })
});

describe('Given an array of songs and a song object', () => {
    const sampleSongs = [{title:'a'}, {title:'b'}];
    const song = {title:'c'};
    describe('When sort the array', () => {
        const newSampleSongs = addSong(sampleSongs, song);
        it('Then array length should be increased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length + 1);
        });

        it('Then array should be with the new song', () => {
            expect(newSampleSongs).toStrictEqual([{title:'a'}, {title:'b'}, {title:'c'}]);
        });
    })
});


describe('Given an array of songs and a song object and idex of a song we need to update', () => {
    const sampleSongs = [{title:'a'}, {title:'b'}, {title:'d'}];
    const upSong = {title:'c'};
    const index = 2;
    describe('When update the song at the index place', () => {
        const newSampleSongs = updateSong(sampleSongs, upSong, index);
        it('Then array length should be the same as before', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length);
        });

        it('Then array should be with the updated song at the index place', () => {
            expect(newSampleSongs[index]).toStrictEqual(upSong);
        });
    })
});
