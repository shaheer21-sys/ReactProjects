import React from 'react';

function SerachBox(props) {
  return (
    <div>SerachBox
        <input type="text" onChange={(e) => props.setSearchValue(e.target.value)}/>


        {/* <button type="submit" onSubmit={props.handleSubmit(props.searchValue)}>Submit</button> */}
    </div>
  )
}

export default SerachBox