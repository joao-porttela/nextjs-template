'use client';

import { createContext } from "react";

import { IAuthContext } from "@/interfaces/auth/auth-context.interface";
import { IAuthState } from "@/interfaces/auth/auth-state.interface";
import { IResponse } from "@/interfaces/core/response.interface";

export const AuthState: IAuthState = {
    valid: false,
    loading: false
}

export const AuthContext = createContext<IAuthContext>({
    state: AuthState,
    Login: async () => ({ data: null, message: '', error: false }),
    SignUp: async () => ({ data: null, message: '', error: false }),
    vToken: async () => ({ data: null, message: '', error: false }),
    VerifyEmail: async () => ({ data: null, message: '', error: false }),
    ResendVerification: async () => ({ data: null, message: '', error: false }),
    Logout: async () => { },
})