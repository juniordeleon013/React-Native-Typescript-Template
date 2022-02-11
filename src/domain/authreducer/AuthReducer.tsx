import { IUser } from '../Interfaces/UserInterface';

export interface IAuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated',
    user: IUser | null,
    errorMessage: string,
    token: string | null,
}

type AuthAction = 
    | { type: 'SignIn-Up', payload: {token: string, user: IUser} } 
    | { type: 'AddError', payload: string }                        
    | { type: 'removeError' }
    | { type: 'badToken'}
    | { type: 'logOut' }



export const AuthReducer = (state: IAuthState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case 'badToken':
            return{
                ...state,
                status: 'not-authenticated',
                user: null,
                token: null,
            }
            break;
        case 'SignIn-Up': 
            const { user, token } = action.payload;
            return {
                ...state,
                user,
                token,
                status: 'authenticated'
            }
            break;
        case 'logOut': 
            return {
                errorMessage: '',
                token: null,
                user: null,
                status: 'not-authenticated',
            }
            break;
        case 'removeError':
            return {
                errorMessage: '',
                token: null,
                user: null,
                status: 'not-authenticated',
            };
            break;
        case 'AddError': 
            return {
                errorMessage: action.payload,
                token: null,
                user: null,
                status: 'not-authenticated',
            }
        default:
            return state;
    }
}