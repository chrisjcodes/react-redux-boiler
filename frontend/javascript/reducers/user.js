import { events as e } from 'constants';

export default (state = {}, action) => ({
        [e.LOGIN]: () => state,
        [e.LOGOUT]: () => state,
    }[action.type]() || state)
