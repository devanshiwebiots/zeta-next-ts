import { Loss, Profit } from "@/Constant";
import { TicketData } from "@/Data/SupportTicket";
import CountUp from "react-countup";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const Tickets = () => {
  return (
    <Row>
      {TicketData.map((item) => (
        <Col xl="4" sm="6" className="box-col-4" key={item.id}>
          <Card className="ecommerce-widget">
            <CardBody className="support-ticket-font">
              <Row>
                <Col xs="5">
                  <span>{item.title}</span>
                  <h3 className="total-num counter">
                    <CountUp end={item.num} />
                  </h3>
                </Col>
                <Col xs="7">
                  <div className="text-end">
                    <ul>
                      <li>
                        {Profit}
                        <span className="product-stts txt-success ms-2">
                          {"8989"}
                          <i className="icon-angle-up f-12 ms-1"></i>
                        </span>
                      </li>
                      <li>
                        {Loss}
                        <span className="product-stts txt-danger ms-2">
                          {"2560"}
                          <i className="icon-angle-down f-12 ms-1"></i>
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <div className="progress-showcase">
                <Progress className={`${item.class} sm-progress-bar`} style={{ width: "70%" }} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
export default Tickets;
