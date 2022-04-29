export interface UserValues {
    username: string;
    displayName: string;
    password?: string;
    passwordConfirm?: string;
}

export type AuthUser = Omit<UserValues, "passwordConfirm"> & { isLoggin?: boolean };

