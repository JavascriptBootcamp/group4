import actionEnums from '../common/actionsEnums';

// const objectAssign = require('object-assign');

class UserProfileState {
    constructor() {
        this.firstname = 'Moshiko is the king';
    }
}

const handleUserProfileAction = (state, action) => {
    // const newState = objectAssign({}, state, { firstname: action.newName });
    const newState = {
        ...state,
        firstname: action.newName
    }
    return newState;
}

const UserProfileReducer = (state = new UserProfileState(), action) => {
    switch (action.type) {
        case actionEnums.UPDATE_USERPROFILE_NAME:
            return handleUserProfileAction(state, action);
        default:
    }
    return state;
};

export default UserProfileReducer;