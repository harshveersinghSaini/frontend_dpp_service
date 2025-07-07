
interface AuthState {
    isAuthenticated: boolean,
    user: object | null,
    token: string | null,
    loading: boolean,
    error: object | null,
    success: boolean,
    message: string | null
}

export type {
    AuthState
}