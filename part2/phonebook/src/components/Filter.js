import React from 'react';

const Filter = ({filterByName}) =>
{
  return <div>filter shown with <input onChange={filterByName}/></div>
}

export default Filter;