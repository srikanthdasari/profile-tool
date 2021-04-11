import { useStore } from './../store/store';
import { GenericGetAction } from './../actions/GenericAction';
import { SEARCH_INPROGRESS, SEARCH_ERROR, SEARCH_SUCCESS } from './../constants/ActionTypes';
import { useState } from 'react';
const Search = () => {
    const { state, dispatch } = useStore();
    const [searchString, setSearchString] = useState('');
    const onClickHandler = () => {
        const url = `https://api.github.com/users/${searchString}`;
        const actionType = {
            InProgress: SEARCH_INPROGRESS,
            Success: SEARCH_SUCCESS,
            Error: SEARCH_ERROR
        };
        GenericGetAction(url, actionType, dispatch);
    }
    const onTextChange = (e) => {
        // console.log(e.target.value);
        setSearchString(e.target.value);
    }
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <input
                    placeholder="Type github username..."
                    type="text"
                    value={searchString}
                    className={"w-10/12 px-4 py-2 mb-4 text-black transition duration-500 ease-in-out transform bg-gray-100 border-transparent rounded-lg mr-4text-base focus:border-gray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2-max h-12 rounded border-gray-300 text-black text-2xl"}
                    onChange={onTextChange}
                />
                <button
                    class="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 m-4 h-12 rounded"
                    onClick={onClickHandler}
                >Find Friends</button>

            </div>
        </header>
    )

}

export default Search;