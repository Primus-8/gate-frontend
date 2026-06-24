import { Link, useNavigate } from "react-router-dom";

function Navbar() {

const navigate = useNavigate();

return (
<div
style={{
position: "sticky",
top: 0,
zIndex: 1000,
background: "#1e40af",
padding: "15px 25px",
display: "flex",
justifyContent: "space-between",
alignItems: "center",
flexWrap: "wrap",
boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
}}
>

```
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "15px"
    }}
  >

    <button
      className="back-btn"
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>

    <h2
      style={{
        color: "white",
        margin: 0
      }}
    >
      GATE Mechanical
    </h2>

  </div>

  <div
    style={{
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
      alignItems: "center"
    }}
  >

    <Link
      to="/dashboard"
      style={{ color: "white" }}
    >
      Dashboard
    </Link>

    <Link
      to="/subjects"
      style={{ color: "white" }}
    >
      Subjects
    </Link>

    <Link
      to="/topics"
      style={{ color: "white" }}
    >
      Topics
    </Link>

    <Link
      to="/questions"
      style={{ color: "white" }}
    >
      Questions
    </Link>

    <button
      onClick={() => {
        localStorage.clear();
        window.location.href = "/";
      }}
      style={{
        background: "#dc2626"
      }}
    >
      Logout
    </button>

  </div>

</div>


);
}

export default Navbar;
