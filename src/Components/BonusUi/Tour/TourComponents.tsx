import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import UserProfile from "./UserProfile";

const TourComponents = () => {
  
  return (
    <>
      <CommonBreadcrumb pageTitle="Tour" parent="Bonus Ui" />
      <Container fluid>
        <div className="user-profile tour">
          <Row>
            <UserProfile />
            <LeftSection />
            <RightSection />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourComponents;
