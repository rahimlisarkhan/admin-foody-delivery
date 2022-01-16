import Table from '../../../components/Table'
import { useModalSetting } from '../../../hooks/useModalSetting'

export const OfferTable = ({ offers }) => {
    const { setOpenOfferModal, setDeleteOfferModalID } = useModalSetting()

    const deleteItem = (id) => {
        setOpenOfferModal(true)
        setDeleteOfferModalID(id)
    }

    return (
        <Table rows={offers} deleteItem={deleteItem} />
    )
}