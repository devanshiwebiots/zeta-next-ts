import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ComboChart } from "@/Constant";
import { ComboChartProps } from "@/Type/GoogleCharts";
import { Chart } from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

const ComboCharts = ({ data }: ComboChartProps) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ComboChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={[
                ["Month", "Bolivia", "Ecuador", "Madagascar", "Papua New Guinea", "Rwanda", "Average"],
                ["2017/18", 165, 938, 522, 998, 450, 614.6],
                ["2018/19", 135, 1120, 599, 1268, 288, 682],
                ["2019/20", 157, 1167, 587, 807, 397, 623],
                ["2020/21", 139, 1110, 615, 968, 215, 609.4],
                ["2021/22", 136, 691, 629, 1026, 366, 569.6],
              ]}
              options={{
                title: "Monthly Coffee Production by Country",
                vAxis: { title: "Cups" },
                hAxis: { title: "Month" },
                seriesType: "bars",
                colors: ["#148df6", "#51bb25", "#fdde2e", "#655af3", "#fff024"],
                series: { 5: { type: "line" } },
                backgroundColor: "transparent",
              }}
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ComboCharts;
