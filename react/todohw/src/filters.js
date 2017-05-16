import React from 'react';

const Filters = ({filterOptions, activeFilter, changeFilter}) => {
  return (
    <div style={{marginTop: 50}}>
      {filterOptions.map((filter, i) => {
        let active = activeFilter === filter ? 'orange' : 'black'
        return (
          <a
            style={{margin: 20, color: active}}
            key={i}
            onClick={() => changeFilter(filter)}
            >
              {filter}
          </a>
        )
      })}
    </div>
  )
}

export default Filters;
