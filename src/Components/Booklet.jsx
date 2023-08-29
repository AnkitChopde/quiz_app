import { useState } from "react";

const Booklet = () => {
  const [flag,setFlag]=useState(true);

  const handleClick=async()=>{
     try{
      let res=await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz")
      let data=await res.json();
      console.log(data);
      setFlag(false)
     }
     catch(err){
      console.log(err)
     }
  }
  return (
    <div data-testid="Booklet" style={{textAlign:"center"}}>
      {/* create a div with className="welcome-div" here*/}
        {flag?<div className="welcome-div">
            <h1>To begin the exam, click on the 'Start Exam' button below</h1>
            <button onClick={handleClick}>Start Exam</button>
        </div>:
      <div className="questions-container">
        {/* Append score and question card components here */}
        <button onClick={()=>setFlag(true)}>End Exam</button>
        <h3>Score: {0}</h3>
      </div>}
    </div>
  );
};

export default Booklet;
