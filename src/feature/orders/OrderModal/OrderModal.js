import { useTranslation } from "react-i18next"
import ModalContent from "../../../components/Modal"
import { useModalSetting } from "../../../hooks/useModalSetting"


export const OrderModal = () => {

    const {t} = useTranslation()
    const {openOrderModal,setOpenOrderModal, deleteOrderModal } = useModalSetting()

    return (
        <ModalContent title={t("title delete")} 
                      subtitle={t("subtitle order delete")}
                      modalOpen={openOrderModal}
                      modalClose={setOpenOrderModal}
                      modalItemDelete={deleteOrderModal}
                      />
    )
}
