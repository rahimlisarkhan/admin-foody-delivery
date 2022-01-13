import { InputImageLabel } from "./InputFile.styled"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PropTypes from 'prop-types'
import { useTranslation } from "react-i18next";

export const InputFile = ({ imageKey, setImage, setUploadImg }) => {
    const { t } = useTranslation('translation', { keyPrefix: 'form' });

    const handleChange = (e) => {
        let file = e.target.files[0]
        setImage(imageKey, file)
        setUploadImg && setUploadImg(file)
    }

    return (
        <InputImageLabel>
            <input type="file" id="image" onChange={handleChange} />
            <CloudUploadIcon />
            {t("upload")}
        </InputImageLabel>
    )
}

InputFile.propTypes = {
    imageKey: PropTypes.string.isRequired,
    setImage: PropTypes.func.isRequired,
}