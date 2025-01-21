import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Example1, ImagePath, TitleOfSection } from "@/Constant";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const Example1Timeline = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader heading={Example1} />
        <CardBody>
          <section className="cd-container" id="cd-timeline">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture bg-primary">
                <i className="icon-pencil-alt" />
              </div>
              <div className="cd-timeline-content">
                <h4>
                  {TitleOfSection}
                  <span className="digits"> 1</span>
                </h4>
                <p className="m-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
                <span className="cd-date">
                  Jan <span className="counter digits"> 14</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie bg-secondary">
                <i className="icon-video-camera" />
              </div>
              <div className="cd-timeline-content">
                <h4>
                  {TitleOfSection}
                  <span className="digits"> 2</span>
                </h4>
                <div className="embed-responsive embed-responsive-21by9 m-t-20">
                  <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen />
                </div>
                <span className="cd-date">
                  Jan <span className="counter digits">18</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture bg-success">
                <i className="icon-image" />
              </div>
              <div className="cd-timeline-content">
                <h4>
                  {TitleOfSection}
                  <span className="digits"> 3</span>
                </h4>
                <Image width={600} height={300} className="img-fluid p-t-20" src={`${ImagePath}/banner/1.jpg`} alt="" />
                <span className="cd-date">
                  Jan <span className="counter digits">24</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location bg-info">
                <i className="icon-pulse" />
              </div>
              <div className="cd-timeline-content">
                <h4>
                  {TitleOfSection}
                  <span className="digits"> 4</span>
                </h4>
                <audio className="m-t-20" controls>
                  <source src="../assets/audio/horse.ogg" type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
                <span className="cd-date">
                  Feb <span className="counter digits">14</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location bg-warning">
                <i className="icon-image" />
              </div>
              <div className="cd-timeline-content">
                <h4>
                  {TitleOfSection}
                  <span className="digits"> 5</span>
                </h4>
                <Image width={600} height={300} className="img-fluid p-t-20" src={`${ImagePath}/banner/3.jpg`} alt="" />
                <span className="cd-date">
                  Feb <span className="counter digits">18</span>
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie bg-danger">
                <i className="icon-pencil-alt" />
              </div>
              <div className="cd-timeline-content">
                <h4>Final Section</h4>
                <p className="m-0">This is the content of the last section</p>
                <span className="cd-date">
                  Feb <span className="counter digits">26</span>
                </span>
              </div>
            </div>
          </section>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example1Timeline;
