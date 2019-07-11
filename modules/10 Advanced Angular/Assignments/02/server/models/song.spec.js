const { deleteSong, sortSongs, addSong, updateSong } = require('./song');

describe('Given an array of songs and an index', () => {
    const sampleSongs = ['Oops I Did It Again', 'My Heart Go On', 'The Lion Sleeps Tonight'];
    const index = 0;
    const selectedSong = sampleSongs[index];
    describe('When removing a song at this index', () => {
        const newSampleSongs = deleteSong(sampleSongs, index);
        it('Then array length should be decreased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length - 1);
        });
        it('Then this index should not be contained in the array', () => {
            expect(newSampleSongs[index]).not.toBe(selectedSong);
        });
    })
});


describe('Given an array of songs', () => {
    const sampleSongs = [{title:'mumumu'}, {title:'lalala'}, {title:'ninini'}];
    describe('When sorting the array', () => {
        const newSampleSongs = sortSongs(sampleSongs);
        it('Then array should be sorted by songs titles', () => {
            expect(newSampleSongs).toBe([{title:'lalala'}, {title:'mumumu'}, {title:'ninini'}]);
        });
    })
});

describe('Given an array of songs objects and a song object', () => {
    const sampleSongs = [{title:'coco'}, {title:'pupo'}];
    const songObj = {title:'moca'};
    describe('When adding song object to the array', () => {
        const newSampleSongs = addSong(sampleSongs, songObj);
        it('Then array length should be increased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length + 1);
        });
        it('Then array should contain a new song object', () => {
            expect(newSampleSongs).toBe([{title:'coco'}, {title:'pupo'}, {title:'moca'}]);
        });
    })
});


describe('Given an array of songs objects, song object and iמdex of the song object that we want to update', () => {
    const sampleSongs = [{title:'gog'}, {title:'mog'}, {title:'kok'}];
    const songToUpdate = {title:'mog'};
    const index = 1;
    describe('When update the song at the given index', () => {
        const newSampleSongs = updateSong(sampleSongs, songToUpdate, index);
        it('Then array length should remain the same as before', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length);
        });

        it('Then array should include updated song at the given index', () => {
            expect(newSampleSongs[index]).toBe(songToUpdate);
        });
    })
});