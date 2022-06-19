import React from 'react';

const ListSelector = ({onListSelected}) => {

    const handleChange = (event) => {
        onListSelected(event.target.value);
    }

    return (
        <select className="movies" id="select" onChange={handleChange}>
            <option disabled value=''>Select a Playlist</option>
            <option selected value='0'>All Movies</option>
            <option value='1'>Watch List</option>
        </select>
    )
}

export default ListSelector;