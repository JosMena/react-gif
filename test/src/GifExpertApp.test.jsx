import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../../src/GifExpertApp';

describe('Testing on <GifExpertApp/>', () => {

    const setup = () => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form", { name: "form" });
        return {
          input,
          form,
        };
    };

    // Initial state is One Punch by default if it is changed the length will start in 1

    test('should add new category', () => {

        const { input, form } = setup();
        fireEvent.input( input, { target: { value: 'One Punch' } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: 'Dragon Ball' } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', { level: 3 }) ).toHaveLength(2);

    });

    test('should not add the same category', () => {

        const { input, form } = setup();
        fireEvent.input( input, { target: { value: 'One Punch' } } );
        fireEvent.submit( form );

        fireEvent.input( input, { target: { value: 'One Punch' } } );
        fireEvent.submit( form );

        expect( screen.getAllByRole('heading', { level: 3 }) ).toHaveLength(1);

    });

});