import { withFormik } from "formik";
import * as yup from "yup";

import InnerLoginForm from "../../components/auth/innerLoginForm";
import { LoginFormValuesInterface } from "../../contracts/auth";
import callApi from "../../helpers/callApi";

const loginFormValidationSchema = yup.object().shape({
    email : yup.string().required().email(),
    password : yup.string().required().min(8)
})

interface LoginFormProps {
}

const LoginForm = withFormik<LoginFormProps , LoginFormValuesInterface>({
    mapPropsToValues : props => ({
        email : '',
        password : ''
    }),
    validationSchema: loginFormValidationSchema,
    handleSubmit : (values) => {
        // callApi().post()
    }
})(InnerLoginForm)

export default LoginForm;