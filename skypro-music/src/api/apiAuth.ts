const BASE_URL = "https://webdev-music-003b5b991590.herokuapp.com";

export type RegisterUserType = {
    email: string;
    password: string;
}

export const signupUser = async ({ email, password }: RegisterUserType) => {
    const response = await fetch(`${BASE_URL}/user/signup/`, {
        method: 'POST',
        body: JSON.stringify({ email, password, username: email }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.errorMessage)
    }
    return json;
};

export const signinUser = async ({email, password}:RegisterUserType) => {
    const response = await fetch(`${BASE_URL}/user/login/`, {
        method: 'POST',
        body: JSON.stringify({ email, password}),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const json = await response.json();
    if(!response.ok) {
        throw new Error(json.errorMessage)
    }
    return json;
};

export const getTokens = async ({email, password}:RegisterUserType) => {
    const response = await fetch (`${BASE_URL}/user/token/`, {
        method: 'POST',
        body: JSON.stringify({ email, password}),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const json = await response.json();
    if(!response.ok) {
        throw new Error(json.errorMessage)
    }
    return json;
}


