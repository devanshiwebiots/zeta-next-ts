import { ImagePath } from "@/Constant";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Col, Media } from "reactstrap";

const Greeting = () => {
  const router = useRouter();
  return (
    <Col xl="6" md="6" className="dash-xl-50 box-col-12">
      <Card className="profile-greeting">
        <CardBody>
          <Media>
            <Media body>
              <div className="greeting-user">
                <h1>Hello, Harry Mendez</h1>
                <p>Welcome back, your dashboard is ready!</p>
                <Button color="white" onClick={() => router.push(`/blog/blogsingle`)} className="btn-outline-white_color">
                  Get Started<i className="icon-arrow-right"></i>
                </Button>
              </div>
            </Media>
          </Media>
          <div className="cartoon-img">
            <img className="img-fluid" src={`${ImagePath}/images.svg`} alt="" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Greeting;
