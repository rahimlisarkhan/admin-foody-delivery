import Table from '../../../components/Table'
import { useModalSetting } from '../../../hooks/useModalSetting'


export const CategoryTable = ({ categories }) => {
    const { setOpenCategoryModal, setDeleteCategoryModalID } = useModalSetting()

    const deleteItem = (id) => {
        setOpenCategoryModal(true)
        setDeleteCategoryModalID(id)
    }

    return (
        <Table rows={categories} deleteItem={deleteItem} />
    )
}