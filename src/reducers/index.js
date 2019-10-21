import { combineReducers } from 'redux';
import ScanReducer from './ScanReducer';

export default combineReducers({
    scan: ScanReducer
});