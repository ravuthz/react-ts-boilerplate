import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders home page', () => {
  const { getByTestId } = render(<App />);
  const htmlElement: HTMLElement = getByTestId('App');
  expect(htmlElement).toBeInTheDocument();
});
