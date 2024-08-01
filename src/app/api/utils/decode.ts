import jwt from 'jsonwebtoken';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export const decode = (token: string) => {
  return jwt.decode(token) as any;
};

export const verify = (token: any) => {
  return jwt.verify(token, 'Anti-D-2024' as string);
};

export const createToken = (tokenData: any, time: string) => {
  return jwt.sign(tokenData, 'Anti-D-2024' as string, {
    expiresIn: time,
  });
};

export const authenticate = async (req: NextApiRequest): Promise<any> => {
    return new Promise<boolean>((resolve, reject) => {
      // const accessToken = req.headers['authorization'];
      const accessToken = headers().get('authorization');
      
      
  // const refreshToken = req.cookies['refreshToken'];
  if (!accessToken) {
    // return NextResponse.json({ status: 'Error', message: 'Access Denied. No refresh token provided.' }, { status: 401 });
    resolve(false)
  }

  try {
    const decoded:any = verify(accessToken);
   resolve(decoded)
  } catch (error) {
    resolve(false)
  }
    
    })

      // try {
      //   const decoded = verify(refreshToken);
      //   resolve(true)
      // } catch (error) {
      //     // return NextResponse.json({ status: 'Error', message: 'Access Denied. Invalid Token.' }, { status: 400 });
      //     resolve(false)
      // }
    }
 
