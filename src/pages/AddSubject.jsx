import { useState } from "react";
import api from "../api/axios";

function AddSubject() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await api.post(
        "/subjects",
        {
          name,
          code
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Subject Saved Successfully");

      console.log(response.data);

      setName("");
      setCode("");

    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
        "Error Saving Subject"
      );
    }
  };

  return (
    <div>
      <h1>Add Subject</h1>

      <input
        type="text"
        placeholder="Subject Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Subject Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSave}>
        Save Subject
      </button>
    </div>
  );
}

export default AddSubject;