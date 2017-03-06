import { events as e } from 'constants';

export default (state = {}, action) => ({
        [e.LOGIN]: state => state,
        [e.LOGOUT]: state => state,
    }[action.type] || state)
