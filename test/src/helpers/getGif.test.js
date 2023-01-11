import { getGifs } from "../../../src/helpers/getGif";

describe('Test on getGifs()', () => {

    test('should should return an gifs array', async() => {

        const gifs = await getGifs('One Punch');
        const beginPosition = gifs[0];

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( beginPosition ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        });

    });

});