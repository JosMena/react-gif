import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';


describe('Testing on useFetchGifs hooks', () => {

    test('should return initial state', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return an image array & isLoading in false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

});