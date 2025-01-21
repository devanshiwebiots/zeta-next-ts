import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { JavascriptData } from "@/Data/Editor";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

const JavaScriptMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading="Javascript Mode" />
        <CardBody>
          <div className="ace-editor" id="editor">
          <Highlight theme={themes.vsDark} code={JavascriptData} language='javascript'>
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
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaScriptMode;
