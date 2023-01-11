import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../../src/components/GifGrid';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

jest.mock('../../../src/hooks/useFetchGifs');

describe('Testing on <GifGrid />', () => {

    const category = 'One Punch';

    test('should show initial loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( < GifGrid category = { category } /> );
        // screen.debug();

        expect( screen.getByText('Cargando...') );
        expect( screen.getByText(category) );

    });

    test('should show items when the images are loading useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Gohan',
                url: 'https://localhost/gohan.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( < GifGrid category = { category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});