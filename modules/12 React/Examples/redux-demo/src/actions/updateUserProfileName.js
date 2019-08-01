import actionEnums from '../common/actionsEnums';

const updateUserProfileName = newName => ({
    type: actionEnums.UPDATE_USERPROFILE_NAME,
    newName
})

export default updateUserProfileName;