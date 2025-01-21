import { CreateProjectDateProps } from "@/Type/Projects";
import { Fragment, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label } from "reactstrap";

const Dates = ({ StartingDate, EndingDate }: CreateProjectDateProps) => {
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(new Date());
  const handleStartDate = (date: SetStateAction<Date | null>) => {
    setStartDate(date);
  };
  const handleEndDate = (date: SetStateAction<Date | null>) => {
    setEndDate(date);
  };
  return (
    <Fragment>
      {StartingDate ? (
        <FormGroup>
          <Label>{StartingDate}</Label>
          <DatePicker className="datepicker-here form-control" selected={startDate} onChange={handleStartDate} />
        </FormGroup>
      ) : (
        <FormGroup>
          <Label>{EndingDate}</Label>
          <DatePicker className="datepicker-here form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
        </FormGroup>
      )}
    </Fragment>
  );
};
export default Dates;
