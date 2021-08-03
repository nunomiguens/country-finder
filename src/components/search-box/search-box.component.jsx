import React from 'react';

import './search-box.styles.css';
import 'semantic-ui-css/semantic.min.css';

import { Input } from 'semantic-ui-react';

export const SearchBox = ({ placeholder, handleChange }) => (
  <Input
    icon='search'
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
