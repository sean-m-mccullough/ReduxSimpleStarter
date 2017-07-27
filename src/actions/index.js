import { FETCH_USERS } from './types';
import axios from 'axios';

const ROOT_URL = 'https://jsonplaceholder.typicode.com';

export function fetchUsers(){
    const url = `${ROOT_URL}/users`;
    const request = axios.get(url);

    return {
        type: FETCH_USERS,
        payload: request
    };
}