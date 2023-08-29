const Option = ({optionData}) => {
  console.log(optionData)
  return <div data-testid="option">
    {/* create a button here */}
    {optionData.map((opt)=>(
      <button key={opt}>
        {opt}
      </button>
    ))}
    </div>;
};

export default Option;
