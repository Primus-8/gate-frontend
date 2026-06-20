import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Subjects() {

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {

    const fetchSubjects = async () => {

      try {

        const token =
          localStorage.getItem("token");

        const response =
          await api.get(
            "/subjects",
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );


          console.log("API Response:", response.data);

        setSubjects(
          response.data.subjects
        );

      } catch (error) {

        console.log(error);

      }

    };

    fetchSubjects();

  }, []);


console.log("Subjects State:", subjects);
console.log("Subjects Length:", subjects.length);



  return (
    <div>

      <Navbar />

      <h1>Subjects</h1>

      {
        subjects.map((subject) => (

          <div
            key={subject._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{subject.name}</h3>
            <p>{subject.code}</p>
          </div>

        ))
      }

    </div>
  );
}

export default Subjects;