import { useTranslation } from "react-i18next"
import ModalContent from "../../../components/Modal"
import { useModalSetting } from "../../../hooks/useModalSetting"


export const OfferModal = () => {

    const {t} = useTranslation()
    const {openOfferModal,setOpenOfferModal, deleteOfferModal } = useModalSetting()

    return (
        <ModalContent title={t("title delete")} 
                      subtitle={t("subtitle offer delete")}
                      modalOpen={openOfferModal}
                      modalClose={setOpenOfferModal}
                      modalItemDelete={deleteOfferModal}
                      />
    )
}
