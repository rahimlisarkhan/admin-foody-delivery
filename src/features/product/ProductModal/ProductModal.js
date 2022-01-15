import { useTranslation } from "react-i18next"
import ModalContent from "../../../components/Modal"
import { useModalSetting } from "../../../hooks/useModalSetting"



export const ProductModal = () => {

    const {t} = useTranslation()
    const {openProductModal,setOpenProductModal, deleteItemModal } = useModalSetting()

    return (
        <ModalContent title={t("title delete")} 
                      subtitle={t("subtitle product delete")}
                      modalOpen={openProductModal}
                      modalClose={setOpenProductModal}
                      modalItemDelete={deleteItemModal}
                      />
    )
}
