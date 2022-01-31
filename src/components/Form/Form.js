import * as Styled from "./Form.styled"
import { useTranslation } from 'react-i18next'
import { Formik, Form as FormikForm } from "formik";
import InputFile from "../InputFile"
import SelectLabels from "../Select";
import { useState } from "react";
import Image from "../Image"
import PropTypes from "prop-types"

export const Form = ({ selectOptions, setIsClose,setForm, form: { title, initialValues, inputs } }) => {

    const translate = useTranslation();
    const { t } = useTranslation('translation', { keyPrefix: 'form' });
    const [uploadImg, setUploadImg] = useState(null)

    const onSubmit = (values, { resetForm }) => {
        setForm(values)
        resetForm()
        setUploadImg(null)
    }

    return (
        <Styled.FormContainer>
            <Styled.FormTitle>
                {translate.t(title)}
            </Styled.FormTitle>
            <Formik onSubmit={onSubmit} initialValues={initialValues}>
                {({ setFieldValue, resetForm }) => (
                    <FormikForm>
                        <Styled.FormGroupStyled>
                            <Styled.FormSubTitle>
                                {t("upload title")}
                                {uploadImg && <Image width="150" height="100" cover src={URL.createObjectURL(uploadImg)} />}
                            </Styled.FormSubTitle>
                            <Styled.FormContent height={122}>
                                <InputFile imageKey={"img_url"} setUploadImg={setUploadImg} setImage={setFieldValue} />
                            </Styled.FormContent>
                        </Styled.FormGroupStyled>
                        <Styled.FormGroupStyled>
                            <Styled.FormSubTitle>
                                {t("form title")}
                            </Styled.FormSubTitle>
                            <Styled.FormContent height={400}>
                                {inputs?.map(field => {
                                    switch (field.type) {
                                        case "text":
                                            return (
                                                <Styled.FormFieldGroup key={field.id}>
                                                    <Styled.FormLabel>
                                                        {t(field.label)}
                                                    </Styled.FormLabel>
                                                    <Styled.FormField name={field.name} />
                                                </Styled.FormFieldGroup>
                                            )
                                        case "number":
                                            return (
                                                <Styled.FormFieldGroup key={field.id}>
                                                    <Styled.FormLabel>
                                                        {t(field.label)}
                                                    </Styled.FormLabel>
                                                    <Styled.FormField type="number" name={field.name} />
                                                </Styled.FormFieldGroup>
                                            )
                                        case "textarea":
                                            return (
                                                <Styled.FormFieldGroup key={field.id}>
                                                    <Styled.FormLabel>
                                                        {t(field.label)}
                                                    </Styled.FormLabel>
                                                    <Styled.FormTextArea name={field.name} />
                                                </Styled.FormFieldGroup>
                                            )
                                        case "select":
                                            return (
                                                <Styled.FormFieldGroup key={field.id}>
                                                    <Styled.FormLabel>
                                                        {t(field.label)}
                                                    </Styled.FormLabel>
                                                    <SelectLabels poper="350"
                                                        selectKey={field.name}
                                                        height={46}
                                                        setValue={setFieldValue}
                                                        options={selectOptions} />
                                                </Styled.FormFieldGroup>
                                            )
                                        default:
                                            return null;
                                    }
                                })}
                            </Styled.FormContent>
                        </Styled.FormGroupStyled>
                        <Styled.FormButtonGroup>
                            <Styled.FormButton dark={"true"} onClick={() => {
                                setIsClose()
                                resetForm()
                                setUploadImg(null)
                            }}>
                                {translate.t("cancel")}
                            </Styled.FormButton>
                            <Styled.FormButton submit={"true"} >
                                {translate.t("create")}
                            </Styled.FormButton>
                        </Styled.FormButtonGroup>
                    </FormikForm>
                )}
            </Formik>
        </Styled.FormContainer>
    )
}


Form.prototype = {
    selectOptions: PropTypes.array,
    setIsClose: PropTypes.func.isRequired,
    setForm: PropTypes.func.isRequired,
    form: PropTypes.shape({
        title: PropTypes.string.isRequired,
        initialValues: PropTypes.object.isRequired,
        inputs:PropTypes.array.isRequired
      }),
}