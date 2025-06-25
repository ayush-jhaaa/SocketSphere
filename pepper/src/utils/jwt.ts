import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || '2188-5,a.0=-.zx94i25tm8-c07c2m87d58972c8-mx2za,2.3*(!~#180Z,`MX098471-403Z8.!_)<*9812RY4HFH40725Y89Pj$%@)_C@ (&G(i(6vi7&$f20%#^_#v/B&V)B-8547b-=kpM)-015=-3M';

export const generateToken = (userId : string):string => {
    return jwt.sign({userId},secret,{expiresIn:'1h'});
}

export const validateToken = (token : string):{userId:string} | null => {
    try{
        return jwt.verify(token,secret) as {userId:string};
    }
    catch(err){
        return null;
    }
}