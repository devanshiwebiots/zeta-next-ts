import { Col, Card, CardBody, Button } from "reactstrap";
import { toast } from "react-toastify";
import { BasicExamples, SuccessNotification } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicNotifyData } from "@/Data/BonusUi/BootstrapNotify";

const BasicNotify = () => {
  const basicToaster = (toastname: string) => {
    switch (toastname) {
      case "basicSuccessToast":
        toast.success("Success Notification !", {
          position: "top-right",
        });
        break;
      case "basicInfoToast":
        toast.info("Info Notification !", {
          position: "top-right",
        });
        break;
      case "basicWarningToast":
        toast.warn("Warning Notification !", {
          position: "top-right",
        });
        break;
      case "basicDangerToast":
        toast.error("Danger Notification !", {
          position: "top-right",
        });
        break;
      default:
        break;
    }
  };
  return (
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={BasicExamples} />
          <CardBody className="btn-showcase">
            <Button color="success" onClick={() => basicToaster("basicSuccessToast")}>
              {SuccessNotification}
            </Button>
            {BasicNotifyData.map((item, i) => (
              <Button key={i} color={item.color} onClick={() => basicToaster(item.name)}>
                {item.text}
              </Button>
            ))}
          </CardBody>
        </Card>
      </Col>
  );
};

export default BasicNotify;
