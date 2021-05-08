const songs  = require('./songs');


describe('Given a songs arrat', () => {
    describe('When delete a song from songs array by index', () => {
        let songsArray = ['ofek','shimon','amitay']
        let songsArrayAfterDel = songs.removeSong(songsArray,0)
        it('Then songs length should be length -1', () => {
            expect(songsArrayAfterDel.length).toBe(songsArray.length-1);
        })
    });
})