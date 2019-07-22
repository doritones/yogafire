import React from 'react';
import ReactDOM from 'react-dom';
import Yoga from './Yoga';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Yoga />, div);
  ReactDOM.unmountComponentAtNode(div);
});
