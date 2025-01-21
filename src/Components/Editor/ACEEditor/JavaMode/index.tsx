import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Typescript } from "@/Data/Editor";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

const JavaMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading="Java Mode" />
        <CardBody>
        <Highlight theme={themes.vsDark} code={Typescript} language='Java'>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaMode;
