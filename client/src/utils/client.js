import { jwtDecode } from "jwt-decode";

export const createOrGetUser = (respone) => {
  try {
    const decode = jwtDecode(respone.credential);
    const { name, picture, sub } = decode;
    const user = {
      sub: sub,
      name: name,
      image: picture,
    };
    return user;
  } catch (err) {}
};
