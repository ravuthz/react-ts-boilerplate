import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<AboutPage />);
    const aboutPage: HTMLElement = getByTestId('AboutPage');

    expect(aboutPage).toBeInTheDocument();
  });
});
