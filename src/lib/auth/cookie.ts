'use server';

import { cookies } from "next/headers"

import { IGetCookie, ICreateCookie, IDeleteCookie } from "@/interfaces/lib/auth/cookie.interface";

export const getCookie: IGetCookie = async function getCookie() {
    const cookieStore = await cookies();

    return cookieStore.get('token');
}

export const createCookie: ICreateCookie = async function createCookie(token: string) {
    const cookieStore = await cookies();

    cookieStore.set('token', token, { path: '/' })
}

export const deleteCookie: IDeleteCookie = async function deleteCookie() {
    const cookieStore = await cookies();

    cookieStore.delete('token');
}