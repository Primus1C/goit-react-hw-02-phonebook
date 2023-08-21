import React from 'react';

class Filter extends React.Component { 
    render() {
        return (
        <label>
            Find contacts by name
            <input 
              type="text"
              name="filter"
            /> 
          </label>
        )
        
    }
}

export default Filter