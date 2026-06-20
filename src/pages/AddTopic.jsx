import { useState } from "react";
import api from "../api/axios";

function AddTopic() {

  const [name, setName] = useState("");
  const [subjectId, setSubjectId] = useState("");

  const handleSave = async () => {

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await api.post(
          "/topics",
          {
            name,
            subjectId
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      alert(
        "Topic Saved Successfully"
      );

      console.log(response.data);

      setName("");
      setSubjectId("");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Error Saving Topic"
      );

    }

  };

  return (
    <div>

      <h1>Add Topic</h1>

      <input
        type="text"
        placeholder="Topic Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Subject ID"
        value={subjectId}
        onChange={(e) =>
          setSubjectId(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={handleSave}>
        Save Topic
      </button>

    </div>
  );
}

export default AddTopic;