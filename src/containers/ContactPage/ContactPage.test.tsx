import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import ContactPage from './ContactPage';

describe('<ContactPage />', () => {
  afterEach(cleanup);

  test('it should mount', () => {
    const { getByTestId } = render(<ContactPage />);
    const contactPage: HTMLElement = getByTestId('ContactPage');

    expect(contactPage).toBeInTheDocument();
  });
});
