'use client';

import { useState } from "react";

import axios from "axios";

import { AuthContext } from "@/contexts/auth-context";

// Lib
import { login, signUp, verifyToken, verifyEmail, resendVerification } from "@/lib/auth/auth";
import { createCookie, deleteCookie } from "@/lib/auth/cookie";

export function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	const [valid, setValid] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	async function Login(username: string, password: string) {
		try {
			setLoading(true);

			const { data, message, error } = await login(username, password);

			if (error || !data) throw new Error(message);

			await createCookie(data.token);

			axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

			setValid(true);

			return {
				data: null,
				message,
				error: false
			}
		} catch (err: any) {
			setValid(false);

			return {
				data: null,
				message: err.message,
				error: true
			}
		} finally {
			setLoading(false);
		}
	}

	async function SignUp(email: string, username: string, password: string, confirmPassword: string) {
		try {
			setLoading(true);

			const { data, message, error } = await signUp(email, username, password, confirmPassword);

			if (error || !data) throw new Error(message || "Oops! Something went wrong");

			// Don't set cookie or auth header until email is verified
			return {
				data: {
					verificationToken: data.verificationToken
				},
				message,
				error: false
			}
		} catch (err: any) {
			setValid(false);

			return {
				data: null,
				message: err.message,
				error: true
			}
		} finally {
			setLoading(false);
		}
	}

	async function vToken() {
		try {
			setLoading(true);

			const { data, message, error } = await verifyToken();

			if (error || !data) throw new Error(message || "Invalid token");

			setValid(true);

			return {
				data: {
					valid: data.valid,
					decoded: data.decoded,
				},
				message,
				error,
			};
		} catch (err: any) {
			setValid(false);

			return {
				data: {
					valid: false,
					decoded: null,
				},
				message: err.message || "Opps! Something went wrong",
				error: true,
			}
		} finally {
			setLoading(false);
		}
	}

	async function Logout() {
		delete axios.defaults.headers.common["Authorization"];
		await deleteCookie();
	}

	async function VerifyEmail(token: string) {
		try {
			setLoading(true);

			const { data, message, error } = await verifyEmail(token);

			if (error || !data) throw new Error(message);

			await createCookie(data.token);
			axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
			setValid(true);

			return {
				data: null,
				message,
				error: false
			};
		} catch (err: any) {
			return {
				data: null,
				message: err.message,
				error: true
			};
		} finally {
			setLoading(false);
		}
	}

	async function ResendVerification(email: string) {
		try {
			setLoading(true);

			const { data, message, error } = await resendVerification(email);

			if (error || !data) throw new Error(message);

			return {
				data: null,
				message,
				error: false
			};
		} catch (err: any) {
			return {
				data: null,
				message: err.message,
				error: true
			};
		} finally {
			setLoading(false);
		}
	}

	return (
		<AuthContext.Provider value={{
			state: { valid, loading },
			Login,
			SignUp,
			VerifyEmail,
			ResendVerification,
			vToken,
			Logout,
		}}>
			{children}
		</AuthContext.Provider>
	)
}