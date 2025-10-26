import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export type IGetCookie = () => Promise<RequestCookie | undefined>;

export type ICreateCookie = (token: string) => Promise<void>;

export type IDeleteCookie = () => Promise<void>