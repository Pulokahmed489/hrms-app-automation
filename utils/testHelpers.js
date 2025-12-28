// utils/TestHelper.js
import creds from '../test-data/credentials.json';
import users from '../test-data/users.json';

export const getCreds = (type = 'validCredentials') => creds[type];
export const getUser = (type = 'testUser') => users[type];
export const getEmail = (type = 'validCredentials') => creds[type].email;
export const getPassword = (type = 'validCredentials') => creds[type].password;
