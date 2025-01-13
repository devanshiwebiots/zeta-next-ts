import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MarketingExpense } from "@/Constant";
import { MarketingExpenseChartData, MarketingExpenseChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";



const MarketingExpenses = () => {
  return (
    <Col xl="7" md="12" className="box-col-7">
      <Card className="o-hidden">
        <CommonCardHeader heading={MarketingExpense} />
        <div className="bar-chart-widget">
          <CardBody className="bottom-content">
            <Row>
              <Col xs="12">
                <div id="chart-widget4">
                  <ReactApexChart options={MarketingExpenseChartOptions} series={MarketingExpenseChartData.series} height="380" type="bar" />
                </div>
              </Col>
            </Row>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};
export default MarketingExpenses;
