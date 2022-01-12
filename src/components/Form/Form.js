import { FormStyled, FormTitle } from "./Form.styled"
import { useTranslation } from 'react-i18next'




export const Form = ({ form: { title } }) => {
    const { t } = useTranslation();

    return (
        <FormStyled>
            <FormTitle>
                {t(title)}
            </FormTitle>
        </FormStyled>

    )
}