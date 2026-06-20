// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <h2>GATE Mechanical</h2>

//       <hr />

//       <Link to="/dashboard">Dashboard</Link>

//       <br /><br />

//       <Link to="/subjects">Subjects</Link>

//       <br /><br />

// <Link to="/questions">
//   Questions
// </Link>

// <br /><br />


// <Link to="/topics">
//   Topics
// </Link>





































//       <button
//         onClick={() => {
//           localStorage.removeItem("token");
//           window.location.href = "/";
//         }}
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

// export default Navbar;




import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#1f2937",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <h2
        style={{
          color: "white",
          margin: "0"
        }}
      >
        GATE Mechanical
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/subjects"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Subjects
        </Link>

        <Link
          to="/topics"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Topics
        </Link>

        <Link
          to="/questions"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          Questions
        </Link>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}
          style={{
            padding: "8px 15px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;