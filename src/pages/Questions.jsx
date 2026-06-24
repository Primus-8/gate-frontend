// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import Navbar from "../components/Navbar";

// function Questions() {

//   const [questions, setQuestions] =
//     useState([]);

//   const [currentIndex, setCurrentIndex] =
//   useState(0);

//   const [selectedAnswers, setSelectedAnswers] =
//     useState({});

//   const [currentIndex, setCurrentIndex] =
//   useState(0);

//   const currentQuestion = questions[currentIndex];
  


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

//   const handleEdit = async (question) => {

//     const newQuestionText =
//       prompt(
//         "Edit Question",
//         question.questionText
//       );

//     if (!newQuestionText) {
//       return;
//     }

//     try {

//       const token =
//         localStorage.getItem("token");

//       const response =
//         await api.put(
//           `/questions/${question._id}`,
//           {
//             questionText:
//               newQuestionText
//           },
//           {
//             headers: {
//               Authorization:
//                 `Bearer ${token}`
//             }
//           }
//         );

//       setQuestions(
//         questions.map((q) =>
//           q._id === question._id
//             ? response.data.question
//             : q
//         )
//       );

//       alert(
//         "Question Updated Successfully"
//       );

//     } catch (error) {

//       console.log(error);

//       alert(
//         error.response?.data?.message ||
//         "Error Updating Question"
//       );

//     }

//   };

//   const handleDelete = async (id) => {

//     const confirmDelete =
//       window.confirm(
//         "Are you sure you want to delete this question?"
//       );

//     if (!confirmDelete) {
//       return;
//     }

//     try {

//       const token =
//         localStorage.getItem("token");

//       await api.delete(
//         `/questions/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       setQuestions(
//         questions.filter(
//           (question) =>
//             question._id !== id
//         )
//       );

//       alert(
//         "Question Deleted Successfully"
//       );

//     } catch (error) {

//       console.log(error);

//       alert(
//         error.response?.data?.message ||
//         "Error Deleting Question"
//       );

//     }

//   };

// const currentQuestion =
//   questions[currentIndex];









//   return (
//     <div>

//       <Navbar />

      


// <h3>
//   Question {currentIndex + 1}
//   of {questions.length}
// </h3>

// <h1>Questions</h1>

//       {
//         questions.map((question) => (


          
//           <div
//             key={question._id}
//             style={{
//               border: "1px solid black",
//               margin: "10px",
//               padding: "10px"
//             }}
//           >



//             <button
//   disabled={currentIndex === 0}
//   onClick={() =>
//     setCurrentIndex(currentIndex - 1)
//   }
// >
//   Previous
// </button>

// <button
//   disabled={
//     currentIndex === questions.length - 1
//   }
//   onClick={() =>
//     setCurrentIndex(currentIndex + 1)
//   }
// >
//   Next
// </button>

//             <h3>
//               {question.questionText}
//             </h3>

//             <p>
//               Type: {question.questionType}
//             </p>

//             <p>
//               Difficulty: {question.difficulty}
//             </p>

//             <p>
//               Marks: {question.marks}
//             </p>

//             {
//               question.options?.map((option) => (

//                 <div
//                   key={option.key}
//                   style={{
//                     marginLeft: "20px"
//                   }}
//                 >

//                   <input
//                     type="radio"
//                     name={question._id}
//                     value={option.key}
//                     onChange={(e) =>
//                       setSelectedAnswers({
//                         ...selectedAnswers,
//                         [question._id]: e.target.value
//                       })
//                     }
//                   />

//                   <strong>
//                     {option.key}.
//                   </strong>{" "}
//                   {option.text}

//                 </div>

//               ))
//             }

//             <br />

//             <button
//               onClick={() => {

//                 const selected =
//                   selectedAnswers[question._id];

//                 const correct =
//                   question.correctAnswer[0];

//                 if (selected === correct) {

//                   alert(
//   `✅ Correct Answer

// Explanation:
// ${question.explanation || "No explanation available"}`
// );

//                 } else {

//                   alert(
//                     `❌ Wrong Answer\nCorrect Answer: ${correct}


//                     Explanation:
// ${question.explanation || "No explanation available"}`
//                   );

//                 }

//               }}
//             >
//               Check Answer
//             </button>

//             <br />
//             <br />

//             <button
//               onClick={() =>
//                 handleEdit(question)
//               }
//             >
//               Edit Question
//             </button>

//             <br />
//             <br />

//             <button
//               onClick={() =>
//                 handleDelete(
//                   question._id
//                 )
//               }
//             >
//               Delete Question
//             </button>

//           </div>

//         ))
//       }

//     </div>
//   );
// }

// export default Questions;




import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Questions() {

  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState({});
const [testStarted, setTestStarted] = useState(false);
const [testSubmitted, setTestSubmitted] = useState(false);
const [showResult, setShowResult] = useState(false);
const [finalScore, setFinalScore] = useState(0);




  const currentQuestion = questions[currentIndex];

  useEffect(() => {

    const fetchQuestions = async () => {

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

      if (
        currentIndex > 0 &&
        currentIndex >= questions.length - 1
      ) {
        setCurrentIndex(currentIndex - 1);
      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Error Deleting Question"
      );

    }

  };



if (showResult) {
  return (
    <div>

      <Navbar />

      <h1>Mock Test Result</h1>

      <h2>
        Total Questions: {questions.length}
      </h2>

      <h2>
        Correct: {correctCount}
      </h2>

      <h2>
        Wrong: {wrongCount}
      </h2>

      <h2>
        Score:
        {" "}
        {finalScore}%
      </h2>

    </div>
  );
}


  return (
    <div>

      <Navbar />

      <h1>Questions</h1>

<div
  style={{
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc"
  }}
>
  <h3>Score Board</h3>

  <p>Correct: {correctCount}</p>

  <p>Wrong: {wrongCount}</p>

  <p>Score: {correctCount}</p>
</div>

{
  !testStarted && (
    <button
      onClick={() => {
        setTestStarted(true);
      }}
    >
      Start Mock Test
    </button>
  )
}




      {
        questions.length > 0 && (
          <h3>
            Question {currentIndex + 1}
            {" "}of{" "}
            {questions.length}
          </h3>
        )
      }







      {
        currentQuestion && (










          
          <div
           style={{
  background: "white",
  borderRadius: "18px",
  padding: "25px",
  boxShadow:
    "0 8px 25px rgba(0,0,0,0.08)",
  marginTop: "20px"
}}
          >

            <h2
  style={{
    marginBottom: "20px",
    color: "#1e3a8a"
  }}
>
  {currentQuestion.questionText}
</h2>

            <p>
              Type: {currentQuestion.questionType}
            </p>

            <p>
              Difficulty: {currentQuestion.difficulty}
            </p>

            <p>
              Marks: {currentQuestion.marks}
            </p>

            {
              currentQuestion.options?.map((option) => (

                <div
                  key={option.key}
                  style={{
                    marginLeft: "20px"
                  }}
                >

                  <input
                    type="radio"
                    name={currentQuestion._id}
                    value={option.key}
                    checked={
                      selectedAnswers[currentQuestion._id] === option.key
                    }
                    onChange={(e) =>
                      setSelectedAnswers({
                        ...selectedAnswers,
                        [currentQuestion._id]:
                          e.target.value
                      })
                    }
                  />

                  <strong>
                    {option.key}.
                    <div
  key={option.key}
  style={{
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    marginBottom: "10px",
    background: "#f9fafb"
  }}
></div>
                  </strong>{" "}
                  {option.text}

                </div>

              ))
            }

            <br />

            <button
              onClick={() => {

  const selected =
  selectedAnswers[currentQuestion._id];

const correct =
  currentQuestion.correctAnswer[0];

if (!selected) {

  alert(
    "Please select an answer first"
  );

  return;
}

if (
  !answeredQuestions[
    currentQuestion._id
  ]
) {

  if (selected === correct) {

    setCorrectCount(
      (prev) => prev + 1
    );

  } else {

    setWrongCount(
      (prev) => prev + 1
    );

  }

  setAnsweredQuestions({
    ...answeredQuestions,
    [currentQuestion._id]: true
  });

}

if (selected === correct) {

  alert(
    `✅ Correct Answer

Explanation:
${currentQuestion.explanation || "No explanation available"}`
  );

} else {

  alert(
    `❌ Wrong Answer

Correct Answer: ${correct}

Explanation:
${currentQuestion.explanation || "No explanation available"}`
  );

} 

              }}
            >
              Check Answer
            </button>

            <br />
<br />

{
  testStarted &&
  !testSubmitted && (

    <button
      onClick={() => {

        const score =
          Math.round(
            (
              correctCount /
              questions.length
            ) * 100
          );

        setFinalScore(score);

        setTestSubmitted(true);

        setShowResult(true);

      }}
    >
      Submit Test
    </button>

  )
}
      

            <button
              disabled={currentIndex === 0}
              onClick={() =>
                setCurrentIndex(
                  currentIndex - 1
                )
              }
            >
              Previous
            </button>

            {" "}

            <button
              disabled={
                currentIndex ===
                questions.length - 1
              }
              onClick={() =>
                setCurrentIndex(
                  currentIndex + 1
                )
              }
            >
              Next
            </button>

            <br />
            <br />

            <button
              onClick={() =>
                handleEdit(
                  currentQuestion
                )
              }
            >
              Edit Question
            </button>

            <br />
            <br />

            <button
              onClick={() =>
                handleDelete(
                  currentQuestion._id
                )
              }
            >
              Delete Question
            </button>

          </div>

        )
      }

    </div>
  );
}

export default Questions;