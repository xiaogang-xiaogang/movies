import React, {useState} from "react";

const Search = (props) =>{
    const [searchValue, setSearchValue] = useState("")

    const resetInputField = () => {
        setSearchValue("")
    }

    const handleSearchInputChanges = (e) =>{
        setSearchValue(e.target.value)
    }

    const callSearchFunction = (e) => {
        e.preventDefault()
        props.search(searchValue)
        resetInputField()
    }

    return (
        <form className="search">
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input
                onClick={callSearchFunction}
                type="submit"
                value="搜索"
            />
        </form>
    )
}

export default Search;