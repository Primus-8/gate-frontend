import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  return (
    <div>
      <Navbar />

      <div
        style={{
          padding: "30px"
        }}
      >
        <h1>Student Dashboard</h1>

        <p>
          Welcome Student
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "30px"
          }}
        >

          <Link
            to="/subjects"
            style={{
              textDecoration: "none"
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <h3>Subjects</h3>
            </div>
          </Link>

          <Link
            to="/topics"
            style={{
              textDecoration: "none"
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <h3>Topics</h3>
            </div>
          </Link>

          <Link
            to="/questions"
            style={{
              textDecoration: "none"
            }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "25px",
                borderRadius: "10px",
                textAlign: "center"
              }}
            >
              <h3>Questions</h3>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;