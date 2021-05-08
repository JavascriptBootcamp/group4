const { removeSong } = require('./song');
const { addSong } = require('./song');
const { updateSong } = require('./song');

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


describe('Given an array of songs and an new song', () => {
    const sampleSongs = [ { "id":10, "title":"song", "singer":"avi", "words":"la la la" }];
    const newSong = { "id":11, "title":"new song", "singer":"avi", "words":"la la la" };

    describe('When adding a song', () => {
        const newSampleSongs = addSong(sampleSongs, newSong);
        it('Then array length should be ascended by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length +1);
        });
        it('Then this song should be contained in the last ndex in the array', () => {
            expect(newSampleSongs[newSampleSongs.length-1].id).toBe(newSong.id);
        });
    })
});


describe('Given an array of songs , song updated and a index of song', () => {
    const sampleSongs = [ { "id":10, "title":"song", "singer":"avi", "words":"la la la" },{ "id":11, "title":"new song", "singer":"avi", "words":"la la la" }];
    const updatedSong = { "id":11, "title":"song updated", "singer":"idan", "words":"la la la" };
    const index =1;
    describe('When update a song', () => {
        const newSampleSongs = updateSong(sampleSongs, index , updatedSong);
        it('Then array length should be same length', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length);
        });
        it('Then this song should be contained in the last index in the array', () => {
            expect(newSampleSongs[newSampleSongs.length-1]).toBe(updatedSong);
        });
    })
});