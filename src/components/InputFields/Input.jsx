import "../Edit/EditPage"
import "../Post/MakePost"
const Input = (props) => {
  const { inputType, classStyle, data, setData, label } = props;
  return (
    <>
      <label> {label}</label>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      )}
    </>
  );
};

export default Input;
