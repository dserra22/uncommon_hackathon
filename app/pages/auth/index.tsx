import { Formik, Form, Field } from "formik";

import { FormButton, LabelFieldContainer } from "./auth.style";

import { Section, Title } from "../reusable.style";

const Auth = () => {
  const login = (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values.username);
        console.log(values.password);
        console.log(values.email);
      }}
    >
      <Form
        style={{
          marginTop: "8px",
          backgroundColor: "#030",
          padding: `2.4rem`,
          display: "flex",
          flexDirection: "column",
        }}
        id="saveForm"
      >
        <h2>Login</h2>
        <LabelFieldContainer>
          <label htmlFor="username">username</label>
          <Field
            style={{
              color: "#F00",
              border: "none",
              padding: "8px 4px",
              borderBottom: "1px solid #86878B",
              width: `98%`,
              transition: "all .2s",
            }}
            id="username"
            name="username"
          />
        </LabelFieldContainer>
        <LabelFieldContainer>
          <label htmlFor="password">password</label>
          <Field
            style={{
              color: "#F00",
              border: "none",
              padding: "8px 4px",
              borderBottom: "1px solid #86878B",
              width: `98%`,
              transition: "all .2s",
            }}
            id="password"
            name="password"
          />
        </LabelFieldContainer>
        <LabelFieldContainer>
          <label htmlFor="email">email</label>
          <Field
            style={{
              color: "#F00",
              border: "none",
              padding: "8px 4px",
              borderBottom: "1px solid #86878B",
              width: `98%`,
              transition: "all .2s",
            }}
            id="email"
            name="email"
          />
        </LabelFieldContainer>

        <FormButton type="submit">Submit</FormButton>
      </Form>
    </Formik>
  );

  return (
    <Section>
      <Title>Auth</Title>
      {login}
    </Section>
  );
};
export default Auth;
