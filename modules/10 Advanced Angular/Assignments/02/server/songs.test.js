const { removeSong,addSong,updateSong } = require('./song');

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


    describe('When adding a song',()=>{
        const sampleSongs = ['Oops I Did It Again', 'My Heart Go On', 'The Lion Sleeps Tonight'];
        const newSong = 'my new song';
        const newSongsData = addSong(sampleSongs,newSong);
        it('Then array length should be increased by one', () => {
            expect(newSongsData.length).toBe(sampleSongs.length + 1);
        })
        it('Then this song should be contained in the last index of the array', () => {
            expect(newSongsData[newSongsData.length-1]).toBe(newSong);
        });
    })

    
    describe('When updating a song',()=>{
        const sampleSongs = ['Oops I Did It Again', 'My Heart Go On', 'The Lion Sleeps Tonight'];
        const newSong = 'my new song';
        const index = 0;
        const newSongsData = updateSong(sampleSongs,newSong,index);
        it('Then array length should not be changed', () => {
            expect(newSongsData.length).toBe(sampleSongs.length);
        })
        it('Then this song should be contained in the index in the array', () => {
            expect(newSongsData[index]).toBe(newSong);
        });
    })




