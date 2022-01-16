import Table from '../../../components/Table'
import { useModalSetting } from '../../../hooks/useModalSetting'

export const OrderTable = ({ orders }) => {
    const { setOpenOrderModal, setDeleteOrderModalID } = useModalSetting()

    const deleteItem = (id) => {
        setOpenOrderModal(true)
        setDeleteOrderModalID(id)
    }

    return (
        <Table rows={orders} deleteItem={deleteItem} />
    )
}