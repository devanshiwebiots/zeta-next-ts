import { CreatedByMe, Href, Print } from "@/Constant";
import { useRef } from "react";
import { Printer } from "react-feather";
import { useReactToPrint } from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import CreatedByMeClass from "../CreatedByMe";

const ListOfTask = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({ contentRef });
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h5 className="mb-0">{CreatedByMe}</h5>

        <a href={Href} onClick={() => handlePrint()}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <div ref={contentRef}>
        <CreatedByMeClass />
      </div>
    </Card>
  );
};

export default ListOfTask;
