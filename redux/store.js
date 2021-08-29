/* eslint-disable import/no-anonymous-default-export */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';

// export default (initialstate) => {
//     let store;

//     const isClient = typeof window !== 'undefined';
//     if(isClient){
//         const persistConfig = {
//             key: 'root',
//             storage
//         }
    
//         store = createStore(
//             persistReducer(persistConfig, rootReducer),
//             initialState,
//             applyMiddleware(sagaMiddleware)
//           );
//     }else{
//         store = createStore(rootReducer, applyMiddleware(thunk, logger));
//     }
//     return store;
// }


const store = createStore(rootReducer, applyMiddleware(thunk, logger));
export default store;