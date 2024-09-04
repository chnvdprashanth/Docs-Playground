import { GoogleLogin } from "@react-oauth/google";
import { createOrGetUser } from "../utils/client";
import { useNavigate } from "react-router-dom";
import { useGetUser } from "../contexts/User";

const Login = ({ setLoginStatus }) => {
  const navigate = useNavigate();
  const { setUser } = useGetUser();

  const responseGoogele = async (response) => {
    try {
      const userInfo = createOrGetUser(response);

      const res = await fetch("https://docs-playground.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      const user = await res.json();
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/user", { replace: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="">
      <GoogleLogin
        type="icon"
        theme="filled_black"
        shape="circle"
        onSuccess={responseGoogele}
        onError={responseGoogele}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default Login;
