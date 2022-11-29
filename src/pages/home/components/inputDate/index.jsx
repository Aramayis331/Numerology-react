import "./InputDate.scss";

const InputDate = ({ setDate, value }) => {
  return (
    <input
      className="input__date"
      name="date"
      type="date"
      min="1700-12-12"
      max="5555-12-12"
      pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
      placeholder="DD/MM/YYYY"
      required
      value={value}
      onChange={(e) => {
        setDate(e.target.value);
      }}
    />
  );
};
export default InputDate;
