"use client";
import MediaIcons from "@/Components/Others/Authentication/Common/MediaIcons";
import { EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn } from "@/Constant";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Lock, Mail } from "react-feather";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const UserLogin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
  const { data: session } = useSession();

  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/dashboard/ecommerce",
    });

    if (result?.ok) {
      toast.success("successfully Logged in Rediract......");
      router.push("/dashboard/ecommerce");
    } else {
      toast.error("Invalid Credentaial...");
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/dashboard/ecommerce");
    }
  }, [session, router]);

  if (session) return null;

  return (
    <Container fluid>
      <Row>
        <Col xl='12 p-0'>
          <div className='login-card1'>
            <Form className='theme-form login-form' onSubmit={(event) => formSubmitHandle(event)}>
              <div className='login-header '>
                <h4>Sign In With Simple Login</h4>
                <h6>Welcome back! Log in to your account.</h6>
              </div>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input type='email' defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder='Test@gmail.com' />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>{Password}</Label>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input type={show ? "text" : "password"} defaultValue={password} onChange={(event) => setPassword(event.target.value)} name='password' required placeholder='*********' />
                  <div className='show-hide'>
                    <span className={show ? "hide" : "show"} onClick={() => setShow(!show)}></span>
                  </div>
                </InputGroup>
              </FormGroup>
              <FormGroup className='login-btn'>
                <div className='checkbox'>
                  <Input id='checkbox1' type='checkbox' />
                  <Label className='text-muted' for='checkbox1'>
                    {RememberPassword}
                  </Label>
                </div>
                <a href={Href} className='link'>
                  {ForgotPassword}?
                </a>
              </FormGroup>
              <FormGroup>
                <Button className='btn-block' color='primary' type='submit'>
                  {SignIn}
                </Button>
              </FormGroup>
              <div className='login-social-title'>
                <h5>Sign in with</h5>{" "}
              </div>
              <FormGroup>
                <MediaIcons />
              </FormGroup>
              <p>
                Don't have account ?
                <a className='ms-2' href={Href}>
                  Create Account
                </a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
