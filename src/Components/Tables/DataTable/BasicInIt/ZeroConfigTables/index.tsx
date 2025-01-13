import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ZeroConfigurationHeading } from "@/Constant";
import { ZeroConfigurationSubHeading, ZeroConfigurationTableColumns, ZeroConfigurationTableData } from "@/Data/Table/DataTable";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col } from "reactstrap";

const ZeroConfiguration = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ZeroConfigurationHeading} subHeading={ZeroConfigurationSubHeading} />
        <CardBody>
          <div className="table-responsive">
            <DataTable data={ZeroConfigurationTableData} columns={ZeroConfigurationTableColumns} striped={true} pagination highlightOnHover />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ZeroConfiguration;
