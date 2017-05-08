import React, { Component } from 'react';

class Filters extends Component {
  render(){
    const {
      filterOptions,
      activeFilter,
      changeFilter
    } = this.props;

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
}

export default Filters;
