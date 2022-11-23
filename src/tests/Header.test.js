import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Header from '../components/Header';

describe('Header renders correctly', () => {
  test('Header rockets Correctly', () => {
    const header = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    );
    expect(header).toMatchSnapshot();
  });
});
