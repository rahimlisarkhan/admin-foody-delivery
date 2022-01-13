import { useTranslation } from "react-i18next"
import ModalContent from "../../../components/Modal"
import { useModalSetting } from "../../../hooks/useModalSetting"


export const CategoryModal = () => {

    const {t} = useTranslation()
    const {openCategoryModal,setOpenCategoryModal, deleteCategoryModal } = useModalSetting()

    return (
        <ModalContent title={t("title delete")} 
                      subtitle={t("subtitle category delete")}
                      modalOpen={openCategoryModal}
                      modalClose={setOpenCategoryModal}
                      modalItemDelete={deleteCategoryModal}
                      />
    )
}
