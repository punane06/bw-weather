import React from 'react'

const SearchBox = ({city}: {city: string}) => {
    return (
        <div>
            <p>{city}</p>
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." />
            <datalist id="datalistOptions">
                <option value="San Francisco" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
            </datalist>
            {/* <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter location" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Button</button>
                </div>
            </div> */}
        </div>
    )
}

export default SearchBox