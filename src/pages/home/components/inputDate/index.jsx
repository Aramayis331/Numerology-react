import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./InputDate.scss";

const InputDate = ({ setDate, value, setError }) => {
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        className="input__date"
        inputFormat="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
        onError={(err) => setError(err)}
        renderInput={(params) => (
          <TextField name="date" autoComplete="off" error {...params} />
        )}
      />
    </LocalizationProvider>
  );
};
export default InputDate;
