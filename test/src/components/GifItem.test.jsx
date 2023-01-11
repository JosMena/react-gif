import { render, screen } from "@testing-library/react"
import { GifItem } from "../../../src/components/GifItem"

describe('Test in component <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('should match snapshot', () => {

        const { container } = render( <GifItem title={title} url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('should show image with URL and ALT', () => {

        render( <GifItem title={title} url={ url } /> );
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

    });

    test('should show the component title', () => {

        render( <GifItem title={title} url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();

    });

});