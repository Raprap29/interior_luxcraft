import crypto from 'crypto';

export const verifyLogin = (password, salt, passwordHash) => {
    const hashedPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    return hashedPassword === passwordHash;
}
