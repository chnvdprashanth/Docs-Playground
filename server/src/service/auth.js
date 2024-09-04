import jsonwebtoken from "jsonwebtoken";

export const createJsonWebToken = (id) => {
    const payload = {
        userId : id,
    }
    return jsonwebtoken.sign(payload,`${process.env.JWT_KEY}`);
}

export const getUserFromJsonWebToken = (token) => {
    if(!token) return null;
    return jsonwebtoken.verify(token,`${process.env.JWT_KEY}`);
}