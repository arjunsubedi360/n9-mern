import React from 'react'

function ChildComponent({ searchText }) {
    console.log("searchText in child component==>", searchText);
    return (
      <div>
        <p>{searchText}</p>
      </div>
    );
  }

export default ChildComponent