import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CssData } from "@/Data/Editor";
import { Card, CardBody, Col } from "reactstrap";
import { Highlight, themes } from "prism-react-renderer";

const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading="CSS Mode" />
        <CardBody>
        <Highlight theme={themes.vsDark} code={CssData} language='css'>
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
export default CssMode;
