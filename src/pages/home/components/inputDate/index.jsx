import { TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./InputDate.scss";

const InputDate = ({ setDate, value }) => {
  const handleChange = (newValue) => {
    setDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        className="input__date"
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField name="date" autoComplete="off" {...params} />
        )}
      />
    </LocalizationProvider>
  );
};
export default InputDate;
