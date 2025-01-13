import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MonthlySales } from "@/Constant";
import { MonthlySaleData, MonthlySaleOptions } from "@/Data/Widgets/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";


const MonthlySalesChart = () => {
  return (
    <Col xl="5" lg="12">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader heading={MonthlySales} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget8">
                    <ReactApexChart options={MonthlySaleOptions} series={MonthlySaleData.series} height="300" type="radar" />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};
export default MonthlySalesChart;
