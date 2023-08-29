import { useState } from "react";
import Option from "./Option";

const QuestionCard = ({data}) => {
  const [show,setShow]=useState(true)
  console.log(data)
  return (
    <div>
      {data.map((quiz,i)=>(
        <div className="question-card" key={quiz.id}>
        {/* add question here */}
        <h3>{quiz.question}</h3>
  
        <div className="options">
          <Option optionData={quiz.options}/>
        </div>
        <div className="show-ans">
          <button onClick={()=>setShow(!show)}>{show?"Show Ans":"Hide Ans"}</button>
          {!show?<p>{quiz.options[quiz.correctOptionIndex]}</p>:null}
        </div>
      </div>
      ))}
    </div>
  );
};

export default QuestionCard;
