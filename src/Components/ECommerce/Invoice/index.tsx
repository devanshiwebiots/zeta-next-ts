import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Cancel, Print } from "@/Constant";
import Link from "next/link";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Col } from "reactstrap";
import ItemDescription from "./ItemDescription";
import { useAppSelector } from "@/Redux/Hooks";

const Invoice = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({ contentRef });

  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Invoice" />
      <div ref={contentRef}>
        <ItemDescription />
      </div>
      <Col sm="12" className="text-center my-3">
        <Button color="primary" className="me-2" onClick={() => handlePrint()}>
          {Print}
        </Button>
        <Link href={`/ecommerce/product`}>
          <Button color="secondary">{Cancel}</Button>
        </Link>
      </Col>
    </>
  );
};

export default Invoice;
