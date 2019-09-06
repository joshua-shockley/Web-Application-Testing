import React from 'react';

import { render } from '@testing-library/react';
import App, { theHit } from './App';


test('rendering app component looking for strikes', () => {
    const app = render( < App / > );
    app.getByText(/STRIKES/)

});

test('can we find the fouls', () => {
    const theFouls = render( < App / > );
    theFouls.getByText(/FOULS/)
});

{ /* test('') */ }



{
    /* describe('adds two integers', () => { 
        it('adds the numbers', () => {
            const blah = render( < App / > )
            expect(add(1, 3)).toBe(4);
        });

    });


    describe('renders the page without crashing that turd..lol', () => {


        it('renders without crashing', () => {
            render( < App / > );
        });

    }); */
}