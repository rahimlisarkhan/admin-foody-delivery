import { FormContentStyled, FormColStyled, FormInput, FormSubmit, FormInputError } from "./LoginForm.styled"
import loginLogo from '../../../image/icon/login.svg'
import Image from '../../../components/Image'
import { FormGroup } from '@mui/material';
import { Formik, Form, } from 'formik';
import * as Yup from "yup";
import TypographyText from "../../../components/Typograph";

const SignupSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .required('Required'),
});

export const LoginForm = () => {

    const initialValues = {
        username: '',
        password: '',
    }
    const onSubmit = (values) => {
        console.log(values);

    }

    return (
        <FormContentStyled>
            <FormColStyled>
                <TypographyText  font="35" color="gray" >
                    Welcome Admin
                </TypographyText>
                <Formik initialValues={initialValues}
                    validationSchema={SignupSchema}
                    onSubmit={onSubmit}>
                    <Form>
                        <FormGroup>
                            <FormInput type="text" name="username" />
                            <FormInputError name="username" component="small" />
                        </FormGroup>

                        <FormGroup>
                            <FormInput type="password" name="password" />
                            <FormInputError name="password" component="small" />
                        </FormGroup>
                        <FormGroup>
                        <FormSubmit>Sign in</FormSubmit>
                    </FormGroup>
                    </Form>
          
                </Formik>
            </FormColStyled>
            <FormColStyled bg>
                <Image src={loginLogo} />
            </FormColStyled>
        </FormContentStyled>
    )
}