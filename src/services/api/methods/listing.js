import {getRequest} from '..';

export const getList = endpoint => getRequest(`/${endpoint}`);
