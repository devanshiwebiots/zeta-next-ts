import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HtmlData } from "@/Data/Editor";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

const HtmlMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading="HTML Mode" />
        <CardBody>
        <Highlight theme={themes.vsDark} code={HtmlData} language='HTML'>
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
export default HtmlMode;
