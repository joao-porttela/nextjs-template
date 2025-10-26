import { IResponse } from "../core/response.interface";
import { IAuthState } from "./auth-state.interface";
import { ITokenVerification } from "./token-verification.interface";

export interface IAuthContext {
    state: IAuthState;
    Login: (username: string, password: string) => Promise<IResponse<null>>;
    SignUp: (email: string, username: string, password: string, confirmPassword: string) => Promise<IResponse<{ verificationToken: string } | null>>;
    VerifyEmail: (token: string) => Promise<IResponse<null>>;
    ResendVerification: (email: string) => Promise<IResponse<null>>;
    vToken: () => Promise<IResponse<ITokenVerification | null>>;
    Logout: () => Promise<void>;
}