import { fetchHydra as baseFetchHydra, hydraClient as baseHydraClient } from '@api-platform/admin';
import { LOCAL_STORAGE_KEY_TOKEN } from './constants';

export const fetchHeaders = {
    'Authorization': `Bearer ${window.localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN)}`,
};

export const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
});

export default api => baseHydraClient(api, fetchHydra);