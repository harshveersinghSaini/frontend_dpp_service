import { handleApiError, handleApiSuccess } from "./responseHandler.utils";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface ApiClientOptions<T = any> {
    method?: HttpMethod;
    endpoint: string;
    pathParams?: Record<string, string | number>;
    queryParams?: Record<string, any>;
    body?: any;
    headers?: Record<string, string>;
}
interface ApiError {
    status: number;
    statusText: string;
    data: any;
}

const BASE_URL = import.meta.env.VITE_BASE_URL

const buildQueryString = (queryParams: Record<string, any> = {}): string => {
    const query = new URLSearchParams(queryParams);
    return query.toString() ? `?${query.toString()}` : '';
};

const apiClient = async <T = any>({
    method = 'GET',
    endpoint,
    pathParams = {},
    queryParams = {},
    body = null,
    headers = {},
}: ApiClientOptions<T>): Promise<T> => {
    try {
        // Replace dynamic path params like /users/:id
        let url = `${BASE_URL}${endpoint}`;
        Object.keys(pathParams).forEach((key) => {
            url = url.replace(`:${key}`, encodeURIComponent(String(pathParams[key])));
        });

        url += buildQueryString(queryParams);

        const options: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
        };

        if (body && ['POST', 'PUT', 'PATCH'].includes(method.toUpperCase())) {
            options.body = JSON.stringify(body);
        }

        console.log(url, options);
        const response = await fetch(url, options);
        console.log('response', response)
        const contentType = response.headers.get('Content-Type');
        const isJson = contentType?.includes('application/json');
        const responseData = isJson ? await response.json() : await response.text();

        if (!response.ok) {
            const error: ApiError = {
                status: response.status,
                statusText: response.statusText,
                data: responseData,
            };
            throw error;
        }
        if (method !== 'GET' && response.ok) {
            handleApiSuccess(responseData)
        }
        return responseData as T;
    } catch (error: any) {
        console.error('API Error:', error.status);
        if (error && method !== 'GET') {
            handleApiError(error);
        }
        throw error;
    }
};

export default apiClient;
