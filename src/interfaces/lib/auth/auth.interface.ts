import { IResponse } from "@/interfaces/core/response.interface";

export type ILogin = (username: string, password: string) => Promise<IResponse<{ token: string } | null>>

export type ISignUp = (email: string, username: string, password: string, confirmPassword: string) => Promise<IResponse<{ token: string; verificationToken: string } | null>>;

export type IVerifyEmail = (token: string) => Promise<IResponse<{ token: string } | null>>;

export type IResendVerification = (email: string) => Promise<IResponse<{ verificationToken: string } | null>>;

export type IHashPassword = (password: string, fn: (err: Error | undefined, hash: string) => Promise<void>) => Promise<void | string>;

export type IVerifyPassword = (storedHash: string, password: string) => Promise<Boolean | string>;

export type IVerifyToken = () => Promise<IResponse<{ valid: boolean; decoded: any; }>>;

export type IUpdatePassword = ({ _id, currPass, password }: { _id: string; currPass: string; password: string }) => Promise<{ message: string; error: boolean }>;