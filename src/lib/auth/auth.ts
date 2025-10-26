'use server';

import jwt from "jsonwebtoken";

import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";

import { ILogin, IResendVerification, ISignUp, IVerifyEmail, IVerifyToken } from "@/interfaces/lib/auth/auth.interface";

import { API_URL, PUBLIC_KEY } from "@/config/config";
import { IResponse } from "@/interfaces/core/response.interface";

export const login: ILogin = async function (username, password) {
    const t = await getTranslations("error.login");

    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result: IResponse<{ token: string } | null> = await response.json();

        if (result.error || !result.data) throw new Error(result.message);

        return {
            data: { token: result.data.token },
            message: 'Login successful',
            error: false,
        };
    } catch (err: any) {
        return {
            data: null,
            message: t(err.message) || t("default"),
            error: true,
        }
    }
}

export const signUp: ISignUp = async function (email, username, password, confirmPassword) {
    const t = await getTranslations("error.login");

    try {
        const response = await fetch(`${process.env.API_URL}/auth/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password, confirmPassword })
        });

        const result: IResponse<{ token: string; verificationToken: string } | null> = await response.json();

        if (result.error || !result.data) throw new Error(result.message);

        // Send verification email
        await fetch(`${process.env.API_URL}/auth/send-verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                token: result.data.verificationToken
            })
        });

        return {
            data: {
                token: result.data.token,
                verificationToken: result.data.verificationToken
            },
            message: 'Sign up successful. Please check your email to verify your account.',
            error: false
        };
    } catch (err: any) {
        return {
            data: null,
            message: t(err.message) || t("default"),
            error: true,
        }
    }
}

export const verifyEmail: IVerifyEmail = async function (token) {
    try {
        const response = await fetch(`${process.env.API_URL}/auth/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
        });

        const result: IResponse<{ token: string } | null> = await response.json();

        if (result.error || !result.data) throw new Error(result.message);

        return {
            data: {
                token: result.data.token
            },
            message: 'Email verified successfully',
            error: false
        };
    } catch (err: any) {
        return {
            data: null,
            message: err.message || "Failed to verify email",
            error: true
        }
    }
}

export const resendVerification: IResendVerification = async function (email) {
    try {
        const response = await fetch(`${process.env.API_URL}/auth/resend-verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email })
        });

        const result: IResponse<{ verificationToken: string } | null> = await response.json();

        if (result.error || !result.data) throw new Error(result.message);

        // Send new verification email
        await fetch(`${process.env.API_URL}/auth/send-verification`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                token: result.data.verificationToken
            })
        });

        return {
            data: {
                verificationToken: result.data.verificationToken
            },
            message: 'Verification email sent',
            error: false
        };
    } catch (err: any) {
        return {
            data: null,
            message: err.message || "Failed to resend verification email",
            error: true
        }
    }
}

export const verifyToken: IVerifyToken = async function () {
    try {
        const cookiesStore = await cookies();

        const token = cookiesStore.get('token')?.value;

        if (!token) throw new Error('No token provided');

        const decoded = jwt.verify(token, PUBLIC_KEY, (err, decoded) => {
            if (err) throw new Error('Invalid or expired token');

            return decoded;
        });

        const now = Date.now() / 1000;

        const valid = (decoded as any).exp > now;

        if (!valid) throw new Error('Token has expired');

        return {
            data: {
                valid: true,
                decoded,
            },
            message: 'Token is valid',
            error: false,
        }
    } catch (err: any) {
        return {
            data: {
                valid: false,
                decoded: null,
            },
            message: err.message,
            error: true
        }
    }
}