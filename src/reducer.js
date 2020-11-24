import * as Action from './actions';
import * as immutable from 'immutable';

const initialState = [];
const CACHE_SIZE = 2;
var lastId = 0;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.ADD_MOVTAG:
            return [
                ...state,
                {
                    id: ++lastId,
                    data: []
                }
            ]
        case Action.ADD_DATA:
            return state.map(device => {
                return {
                    ...device,
                    data: [
                        ...device.data,
                        action.payload
                    ]
                }
            })
        default:
            return state;
    }
}