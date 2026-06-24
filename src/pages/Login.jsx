
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      

const response = await api.post(
  "/auth/login",
  {
    email,
    password
  }
);

console.log("Login Response:", response.data);

localStorage.setItem(
  "token",
  response.data.token
);
localStorage.setItem(
  "role",
  response.data.user.role
);











console.log(
  "Saved Token:",
  localStorage.getItem("token")
);


//alert("Token = " + response.data.token);

if (
  response.data.user.role === "admin"
) {

  navigate("/dashboard");

} else {

  navigate(
    "/student-dashboard"
  );

}




    } catch (error) {

      alert(
        error.response?.data?.message ||
        error.message ||
        "Login Failed"
      );

    }

  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>GATE Mechanical</h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

<button onClick={() => navigate("/register")}>
  New User Register
</button>




    </div>
  );
}

export default Login;