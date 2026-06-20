import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Topics() {

  const [topics, setTopics] =
    useState([]);

  useEffect(() => {

    const fetchTopics =
      async () => {

        try {

          const token =
            localStorage.getItem("token");

          const response =
            await api.get(
              "/topics",
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`
                }
              }
            );

          setTopics(
            response.data.topics
          );

        } catch (error) {

          console.log(error);

        }

      };

    fetchTopics();

  }, []);

  return (
    <div>

      <Navbar />

      <h1>Topics</h1>

      {
        topics.map((topic) => (

          <div
            key={topic._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }}
          >

            <h3>
              {topic.name}
            </h3>

          </div>

        ))
      }

    </div>
  );
}

export default Topics;