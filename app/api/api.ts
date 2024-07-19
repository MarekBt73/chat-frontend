import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:9000/api';

interface RegisterResponse {
    key: string;
}

interface LoginResponse {
    key: string;
}

interface ApiError {
    detail: string;
}

export const registerUser = async (email: string, password: string): Promise<RegisterResponse> => {
    try {
        const response = await axios.post<RegisterResponse>(`${API_URL}/auth/registration/`, {
            email,
            password1: password,
            password2: password,
        });
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiError>;
        if (err.response && err.response.data) {
            throw err.response.data;
        }
        throw { detail: 'Unknown error occurred' };
    }
};

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
    try {
        const response = await axios.post<LoginResponse>(`${API_URL}/auth/login/`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        const err = error as AxiosError<ApiError>;
        if (err.response && err.response.data) {
            throw err.response.data;
        }
        throw { detail: 'Unknown error occurred' };
    }
};
