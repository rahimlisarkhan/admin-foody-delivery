import { InputImageLabel } from "./InputFile.styled"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import PropTypes from 'prop-types'

export const InputFile = ({ imageKey, setImage}) => {

    const handleChange = (e) => {
        let file = e.target.files[0]
        setImage(imageKey,file)
    }

    return (
            <InputImageLabel>
                <input type="file" id="image" onChange={handleChange}  />
                <CloudUploadIcon/>
                upload
            </InputImageLabel>
    )
}

InputFile.propTypes = {
    imageKey: PropTypes.string.isRequired,
    setImage: PropTypes.func.isRequired,
}