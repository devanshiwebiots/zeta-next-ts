import { Fragment, useState } from "react";
import SingleDatePicker from "./SingleDatePicker";
import InputEmpty from "./InputEmpty";

const SecondRowRangePicker = () => {
  const [dateRange, setDateRange] = useState<any>([null, null]);
  const [startDate, endDate] = dateRange;
  const [startDate1] = useState(new Date());
  const handleChange = (date: Date) => {
    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    alert(`Your Age is =>${age}`);
  };
  return (
    <>
      <SingleDatePicker startDate1={startDate1} handleChange={handleChange} />
      <InputEmpty startDate={startDate} endDate={endDate} setDateRange={setDateRange} />
    </>
  );
};
export default SecondRowRangePicker;
