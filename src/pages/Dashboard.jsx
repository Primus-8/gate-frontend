// // // function Dashboard() {
// // //   return (
// // //     <div>
// // //       <h1>Welcome to GATE Mechanical Dashboard</h1>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;

// // import Navbar from "../components/Navbar";
// // import { Link } from "react-router-dom";
// // function Dashboard() {
// //   return (
// //     <div>
// //       <Navbar />

// //       <h1>Dashboard</h1>

// //       <p>
// //         Welcome to GATE Mechanical Platform
// //       </p>

// // <br /> <Link to="/subjects"> <button> Subjects </button> </Link> <br /><br /> <Link to="/questions"> <button> Questions </button> </Link>


// // <br /><br /> <Link to="/add-question"> <button> Add Question </button> </Link>


// // <Link to="/add-subject">
// //   <button>Add Subject</button>
// // </Link>

// // <Link to="/add-topic">
// //   <button>Add Topic</button>
// // </Link>














// //     </div>
// //   );
// // }

// // export default Dashboard;


// // import Navbar from "../components/Navbar";
// // import { Link } from "react-router-dom";

// // function Dashboard() {
// //   return (
// //     <div>

// //       <Navbar />

// //       <h1>Dashboard</h1>

// //       <p>
// //         Welcome to GATE Mechanical Platform
// //       </p>

// //       <br />

// //       <Link to="/subjects">
// //         <button>
// //           Subjects
// //         </button>
// //       </Link>

// //       <br />
// //       <br />

// //       <Link to="/topics">
// //         <button>
// //           Topics
// //         </button>
// //       </Link>

// //       <br />
// //       <br />

// //       <Link to="/questions">
// //         <button>
// //           Questions
// //         </button>
// //       </Link>

// //       <br />
// //       <br />

// //       <Link to="/add-subject">
// //         <button>
// //           Add Subject
// //         </button>
// //       </Link>

// //       <br />
// //       <br />

// //       <Link to="/add-topic">
// //         <button>
// //           Add Topic
// //         </button>
// //       </Link>

// //       <br />
// //       <br />

// //       <Link to="/add-question">
// //         <button>
// //           Add Question
// //         </button>
// //       </Link>

// //     </div>
// //   );
// // }

// // export default Dashboard;




































// import Navbar from "../components/Navbar";
// import { Link } from "react-router-dom";

// function Dashboard() {
//   return (
//     <div>

//       <Navbar />

//       <div
//         style={{
//           padding: "30px"
//         }}
//       >

//         <h1>
//           Dashboard
//         </h1>

//         <p>
//           Welcome to GATE Mechanical Platform
//         </p>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns:
//               "repeat(auto-fit, minmax(220px, 1fr))",
//             gap: "20px",
//             marginTop: "30px"
//           }}
//         >

//           <Link
//             to="/subjects"
//             style={{
//               textDecoration: "none"
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "25px",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 cursor: "pointer"
//               }}
//             >
//               <h3>Subjects</h3>
//             </div>
//           </Link>

//           <Link
//             to="/topics"
//             style={{
//               textDecoration: "none"
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "25px",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 cursor: "pointer"
//               }}
//             >
//               <h3>Topics</h3>
//             </div>
//           </Link>

//           <Link
//             to="/questions"
//             style={{
//               textDecoration: "none"
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "25px",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 cursor: "pointer"
//               }}
//             >
//               <h3>Questions</h3>
//             </div>
//           </Link>

//           <Link
//             to="/add-subject"
//             style={{
//               textDecoration: "none"
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "25px",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 cursor: "pointer"
//               }}
//             >
//               <h3>Add Subject</h3>
//             </div>
//           </Link>

//           <Link
//             to="/add-topic"
//             style={{
//               textDecoration: "none"
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "25px",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 cursor: "pointer"
//               }}
//             >
//               <h3>Add Topic</h3>
//             </div>
//           </Link>

//           <Link
//             to="/add-question"
//             style={{
//               textDecoration: "none"
//             }}
//           >
//             <div
//               style={{
//                 border: "1px solid #ddd",
//                 padding: "25px",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 cursor: "pointer"
//               }}
//             >
//               <h3>Add Question</h3>
//             </div>
//           </Link>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default Dashboard;




































import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {

  const role =
    localStorage.getItem("role");

  return (
    <div>

      <Navbar />

      <div
        style={{
          padding: "30px"
        }}
      >

        <h1>
          Dashboard
        </h1>

        <p>
          Welcome to GATE Mechanical Platform
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
                textAlign: "center",
                cursor: "pointer"
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
                textAlign: "center",
                cursor: "pointer"
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
                textAlign: "center",
                cursor: "pointer"
              }}
            >
              <h3>Questions</h3>
            </div>
          </Link>

          {role === "admin" && (
            <>
              <Link
                to="/add-subject"
                style={{
                  textDecoration: "none"
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "10px",
                    textAlign: "center",
                    cursor: "pointer"
                  }}
                >
                  <h3>Add Subject</h3>
                </div>
              </Link>

              <Link
                to="/add-topic"
                style={{
                  textDecoration: "none"
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "10px",
                    textAlign: "center",
                    cursor: "pointer"
                  }}
                >
                  <h3>Add Topic</h3>
                </div>
              </Link>

              <Link
                to="/add-question"
                style={{
                  textDecoration: "none"
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "10px",
                    textAlign: "center",
                    cursor: "pointer"
                  }}
                >
                  <h3>Add Question</h3>
                </div>
              </Link>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;