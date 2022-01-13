import { FormContent, FormGroupStyled, FormStyled, FormSubTitle, FormTitle } from "./Form.styled"
import { useTranslation } from 'react-i18next'
import { Formik, Form as FormikForm } from "formik";
import InputFile from "../InputFile"


export const Form = ({ form: { title,initialValues } }) => {
    const { t } = useTranslation();

    
    const onSubmit = (values, actions) => {
        console.log(values);
    }

    return (
        <FormStyled>
            <FormTitle>
                {t(title)}
            </FormTitle>
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
            >
                {({setFieldValue}) => (
                     <FormikForm>
                        <FormGroupStyled>
                            <FormSubTitle>
                                Upload your product image 
                            </FormSubTitle>
                            <FormContent height={122}>
                                <InputFile imageKey={"img_url"} setImage={setFieldValue}/>
                            </FormContent>
                        </FormGroupStyled>
                        <button type="submit">Send</button>
                    </FormikForm>
                )}
            </Formik>
        </FormStyled>

    )
}