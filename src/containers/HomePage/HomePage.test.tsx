import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<HomePage />);
    const homePage: HTMLElement = getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });
});
