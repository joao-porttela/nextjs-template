import { ITokenPayload } from "./token-payload.interface";

export interface ITokenVerification {
    valid: boolean;
    decoded: ITokenPayload | null;
}