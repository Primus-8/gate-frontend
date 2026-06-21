// import { useState } from "react";
// import api from "../api/axios";
// import { useNavigate } from "react-router-dom";
// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async () => {

//     try {

//       const response = await api.post(
//         "/auth/login",
//         {
//           email,
//           password
//         }
//       );

//       localStorage.setItem(
//         "token",
//         response.data.token
//       );

//       alert("Login Successful");

//       console.log(response.data);

//     } catch (error) {

//       alert(
//         error.response?.data?.message ||
//         error.message ||
//         "Login Failed"
//       );

//     }

//   };

//   return (
//     <div style={{ padding: "40px" }}>

//       <h1>GATE Mechanical</h1>

//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) =>
//           setEmail(e.target.value)
//         }
//       />

//       <br /><br />

//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) =>
//           setPassword(e.target.value)
//         }
//       />

//       <br /><br />

//       <button onClick={handleLogin}>
//         Login
//       </button>

//     </div>
//   );
// }

// export default Login;
import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      // const response = await api.post(
      //   "/auth/login",
      //   {
      //     email,
      //     password
      //   }
      // );

      // localStorage.setItem(
      //   "token",
      //   response.data.token
      // );

      // console.log(response.data);

      // navigate("/dashboard");

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

console.log(
  "Saved Token:",
  localStorage.getItem("token")
);


//alert("Token = " + response.data.token);

navigate("/dashboard");




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