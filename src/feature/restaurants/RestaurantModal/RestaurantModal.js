import { useTranslation } from "react-i18next"
import ModalContent from "../../../components/Modal"
import { useModalSetting } from "../../../hooks/useModalSetting"



export const RestaurantModal = () => {

    const {t} = useTranslation()
    const {openRestaurantModal,setOpenRestaurantModal, deleteRestaurantModal } = useModalSetting()
    
    return (
        <ModalContent title={t("title delete")} 
                      subtitle={t("subtitle restaurant delete")}
                      modalOpen={openRestaurantModal}
                      modalClose={setOpenRestaurantModal}
                      modalItemDelete={deleteRestaurantModal}
                      />
    )
}
