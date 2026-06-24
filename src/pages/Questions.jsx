// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";

// function Questions() {

//   const [questions, setQuestions] =
//     useState([]);

//   useEffect(() => {

//     const fetchQuestions =
//       async () => {

//         try {

//           const token =
//             localStorage.getItem("token");

//           const response =
//             await api.get(
//               "/questions",
//               {
//                 headers: {
//                   Authorization:
//                     `Bearer ${token}`
//                 }
//               }
//             );

//           setQuestions(
//             response.data.questions
//           );

//         } catch (error) {

//           console.log(error);

//         }

//       };

//     fetchQuestions();

//   }, []);

//   return (
//     <div>

//       <Navbar />

//       <h1>Questions</h1>

//       {
//         questions.map((question) => (

//           <div
//             key={question._id}
//             style={{
//               border:
//                 "1px solid black",
//               margin: "10px",
//               padding: "10px"
//             }}
//           >

//             <h3>
//               {question.questionText}
//             </h3>
//  <p>
//         Type: {question.questionType}
//       </p>

//       <p>
//         Difficulty: {question.difficulty}
//       </p>

//       <p>
//         Marks: {question.marks}
//       </p>











//           </div>

//         ))
//       }

//     </div>
//   );
// }

// export default Questions;









































































// 







// 





import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Questions() {

  const [questions, setQuestions] =
    useState([]);

    const [currentIndex, setCurrentIndex] =
  useState(0);

  const [selectedAnswers, setSelectedAnswers] =
    useState({});


const [currentIndex, setCurrentIndex] =
  useState(0);

const currentQuestion =
  questions[currentIndex];



  useEffect(() => {

    const fetchQuestions =
      async () => {

        try {

          const token =
            localStorage.getItem("token");

          const response =
            await api.get(
              "/questions",
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`
                }
              }
            );

          setQuestions(
            response.data.questions
          );

        } catch (error) {

          console.log(error);

        }

      };

    fetchQuestions();

  }, []);

  const handleEdit = async (question) => {

    const newQuestionText =
      prompt(
        "Edit Question",
        question.questionText
      );

    if (!newQuestionText) {
      return;
    }

    try {

      const token =
        localStorage.getItem("token");

      const response =
        await api.put(
          `/questions/${question._id}`,
          {
            questionText:
              newQuestionText
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

      setQuestions(
        questions.map((q) =>
          q._id === question._id
            ? response.data.question
            : q
        )
      );

      alert(
        "Question Updated Successfully"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Error Updating Question"
      );

    }

  };

  const handleDelete = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this question?"
      );

    if (!confirmDelete) {
      return;
    }

    try {

      const token =
        localStorage.getItem("token");

      await api.delete(
        `/questions/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setQuestions(
        questions.filter(
          (question) =>
            question._id !== id
        )
      );

      alert(
        "Question Deleted Successfully"
      );

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Error Deleting Question"
      );

    }

  };

const currentQuestion =
  questions[currentIndex];









  return (
    <div>

      <Navbar />

      


<h3>
  Question {currentIndex + 1}
  of {questions.length}
</h3>

<h1>Questions</h1>

      {{/* {
        questions.map((question) => (

          
          <div
            key={question._id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px"
            }} */}}
          





{
  currentQuestion && (

    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px"
      }}
    >

      <h3>
        {currentQuestion.questionText}
      </h3>

    </div>

  )
}










            <button
  disabled={currentIndex === 0}
  onClick={() =>
    setCurrentIndex(currentIndex - 1)
  }
>
  Previous
</button>

<button
  disabled={
    currentIndex === questions.length - 1
  }
  onClick={() =>
    setCurrentIndex(currentIndex + 1)
  }
>
  Next
</button>

            <h3>
              {question.questionText}
            </h3>

            <p>
              Type: {question.questionType}
            </p>

            <p>
              Difficulty: {question.difficulty}
            </p>

            <p>
              Marks: {question.marks}
            </p>

            {
              question.options?.map((option) => (

                <div
                  key={option.key}
                  style={{
                    marginLeft: "20px"
                  }}
                >

                  <input
                    type="radio"
                    name={question._id}
                    value={option.key}
                    onChange={(e) =>
                      setSelectedAnswers({
                        ...selectedAnswers,
                        [question._id]: e.target.value
                      })
                    }
                  />

                  <strong>
                    {option.key}.
                  </strong>{" "}
                  {option.text}

                </div>

              ))
            }

            <br />

            <button
              onClick={() => {

                const selected =
                  selectedAnswers[question._id];

                const correct =
                  question.correctAnswer[0];

                if (selected === correct) {

                  alert(
  `✅ Correct Answer

Explanation:
${question.explanation || "No explanation available"}`
);


                } else {

                  alert(
                    `❌ Wrong Answer\nCorrect Answer: ${correct}


                    Explanation:
${question.explanation || "No explanation available"}`
                  );

                }

              }}
            >
              Check Answer
            </button>

            <br />
            <br />

            <button
              onClick={() =>
                handleEdit(question)
              }
            >
              Edit Question
            </button>

            <br />
            <br />

            <button
              onClick={() =>
                handleDelete(
                  question._id
                )
              }
            >
              Delete Question
            </button>

          </div>

        ))
      }

    </div>
  );
}

export default Questions;