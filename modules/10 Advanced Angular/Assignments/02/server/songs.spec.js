const songs = require('./songs');

describe('Given a songs array', () => {
    describe('when delete a song by index', () => {
        let songsArray = ['ofek', 'shimon', 'moshiko'];
        let songsAfterDelete = songs.removeSong(songsArray,0);
        it('Then songs length should be length-1', ()=>{
            expect(songsAfterDelete.length).toBe(songsArray.length-1);
        })
    })
})