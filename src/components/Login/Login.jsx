import React from "react";
import s from "../common/FormsControls/FormsControl.module.css";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControl";
import { login, logout } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
const maxLength50 = maxLengthCreator(50);
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder={"Email"}
          component={Input}
          validate={[requiredField, maxLength50]}
          name={"email"}
        />
      </div>
      <div>
        <Field
          type="password"
          placeholder={"Password"}
          component={Input}
          validate={[requiredField, maxLength50]}
          name={"password"}
        />
      </div>
      <div>
        {" "}
        <Field type="checkbox" component={Input} name={"rememberMe"} /> remember
        me
      </div>
      {props.error ? (
        <div className={s.formSummaryError}>{props.error}</div>
      ) : undefined}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
