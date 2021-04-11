
import { createContext, useContext } from 'react';
import reducer from './../reducer/reducer';
import { useCustomReducer } from './../utils/useCustomReducer';


const StoreContext = createContext();

export const initialState = {
    userProfile: {},
    repos: [],
    status: "",
    error: {}
};

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useCustomReducer(reducer, initialState, true);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);