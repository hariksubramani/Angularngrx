import { IUserState } from './../state/user.state';
import { UserActions, EUserActions } from './../actions/user.actions';
import { initialUserState } from '../state/user.state';


export const userReducers = (state = initialUserState, action: UserActions) : IUserState => {
    switch(action.type)
    {
        case EUserActions.GetUsersSuccess :
        {
            return {...state, users:action.payLoad};
        }
        case EUserActions.GetUserSuccess :
        {
            return {...state, selectedUser: action.payLoad};
        }

        default:
        return state;
    }
}
