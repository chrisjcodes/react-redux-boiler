import { actionTypes as a } from 'constants';

export default (state = {}, action) => {
    const cases = {
        [a.LOGIN]() {
            return state;
        },
        [a.LOGOUT]() {
            return state;
        },
        default() {
            return state;
        }
    };

    return (cases[action.type] || cases['default'])();
}
