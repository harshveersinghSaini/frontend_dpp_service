import apiClient from "@/utils/apiClient.utils";

const registerUser = async (_user: any) => {
    console.log('registerUser', _user);
    const response = await apiClient({
        method: 'POST',
        endpoint: 'register',
        body: _user,
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    })
    console.log('data', response)
    return response;
}

export {
    registerUser
}