import React from 'react';
import { render } from '@testing-library/react';
import App, { theHit, theFoul } from './App';

test('renders without crashing', () => {
    render( < App / > );
});