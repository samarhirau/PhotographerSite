// jwt 

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY!;

if (!SECRET_KEY) {
     throw new Error(
           "Please define the SECRET_KEY environment variable inside .env.local"
     );
}
export function generateToken(payload: object, expiresIn: string | number = '1h'): string {
     return jwt.sign(payload, SECRET_KEY, { expiresIn } as any);
}
export function verifyToken(token: string): object | string {
     return jwt.verify(token, SECRET_KEY);
}