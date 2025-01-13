import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Card, Col, Row } from "reactstrap";
import PostHeader from "../../Common/PostHeader";
import PostReact from "../../Common/PostReact";
import SocialIcon from "../../Common/SocialIcons";

const PostSecond = () => {
  return (
    <Col sm="12" data-intro="This is the your Last Post" className="step6">
      <Card>
        <div className="profile-post">
          <PostHeader heading="5 Hours ago" />
          <div className="post-body">
            <div className="img-container">
              <Row className=" mt-4 pictures my-gallery" id="aniimated-thumbnials-2">
                <Col sm="6">
                  <Image height={200} width={500} className="img-fluid rounded" src={`${ImagePath}/user-profile/post2.jpg`} itemProp="thumbnail" alt="gallery" />
                </Col>
                <Col sm="6">
                  <Image height={200} width={500} className="img-fluid rounded" src={`${ImagePath}/user-profile/post3.jpg`} itemProp="thumbnail" alt="gallery" />
                </Col>
              </Row>
            </div>
            <br />
            <PostReact h6="+25 people react this post" />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default PostSecond;
