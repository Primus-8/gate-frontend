// function AddQuestion() {
//   return (
//     <div>
//       <h1>Add Question</h1>

//       <p>
//         Question form coming next...
//       </p>
//     </div>
//   );
// }

// export default AddQuestion;



import { useState } from "react";
import api from "../api/axios";








function AddQuestion() {

  const [questionText, setQuestionText] =
    useState("");

  const [optionA, setOptionA] =
    useState("");

  const [optionB, setOptionB] =
    useState("");

  const [optionC, setOptionC] =
    useState("");

  const [optionD, setOptionD] =
    useState("");

  const [correctAnswer, setCorrectAnswer] =
    useState("");






const handleSave = async () => {

  try {

    const token =
      localStorage.getItem("token");

    const response =
      await api.post(
        "/questions",
        {
          subjectId:
            "6a356db49190d1b83a42b07f",

          topicId:
            "6a357b80291e66e51e6dedbd",

          questionCategory:
            "MCQ",

          questionType:
            "MCQ",

          questionText,

          options: [
            {
              key: "A",
              text: optionA
            },
            {
              key: "B",
              text: optionB
            },
            {
              key: "C",
              text: optionC
            },
            {
              key: "D",
              text: optionD
            }
          ],

          correctAnswer: [
            correctAnswer
          ]
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

    alert(
      "Question Saved Successfully"
    );

    console.log(response.data);

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Error Saving Question"
    );

  }

};




















    
  return (
    <div>

      <h1>Add Question</h1>

      <input
        type="text"
        placeholder="Question"
        value={questionText}
        onChange={(e) =>
          setQuestionText(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Option A"
        value={optionA}
        onChange={(e) =>
          setOptionA(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Option B"
        value={optionB}
        onChange={(e) =>
          setOptionB(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Option C"
        value={optionC}
        onChange={(e) =>
          setOptionC(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Option D"
        value={optionD}
        onChange={(e) =>
          setOptionD(e.target.value)
        }
      />

      <br /><br />

      <input
        type="text"
        placeholder="Correct Answer (A/B/C/D)"
        value={correctAnswer}
        onChange={(e) =>
          setCorrectAnswer(e.target.value)
        }
      />

      <br /><br />

      <button onClick={handleSave}>
        Save Question
      </button >

    </div>
  );
}

export default AddQuestion;
