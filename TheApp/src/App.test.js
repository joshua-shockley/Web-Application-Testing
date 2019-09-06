import React from 'react';
import { render } from '@testing-library/react';
import App, { theHit, theFoul } from './App';

import { add } from './App.js';

const help = require('./App');

describe('adds two integers', () => {
    it('adds the numbers', () => {
        expect(add(1, 3)).toBe(4);
    });

});


describe('renders the page without crashing that turd..lol', () => {


    it('renders without crashing', () => {
        render( < App / > );
    });

});