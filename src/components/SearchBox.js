import React, { useState } from 'react'

const SearchBox = ({searchQuery, handleInputChange, searchRef}) => {

    const onChangeHandleInput = () => {
        handleInputChange(searchRef.value)
    }

    return (
        <form>
            <input
                value={searchQuery}
                placeholder="Search for..."
                ref={input => searchRef = input}
                onChange={onChangeHandleInput}
        />
     </form>
   )
}

export default SearchBox;