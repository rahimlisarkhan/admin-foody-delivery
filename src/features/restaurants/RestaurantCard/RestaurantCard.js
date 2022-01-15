import { Card, CardTitleContent, ButtonDelete } from "./RestaurantCard.styled"
import Image from "../../../components/Image"
import TypographyText from '../../../components/Typograph'
import IconDelete from '../../../components/Icons/Delete';
import { useModalSetting } from "../../../hooks/useModalSetting";

export const RestaurantsCard = ({item:{id,name,category,img_url}}) => {
  const {setOpenRestaurantModal,setDeleteRestaurantModalID } = useModalSetting()
  
  const handleDelete = () => {
    setOpenRestaurantModal(true)
    setDeleteRestaurantModalID(id)
  }
    return (
        <Card>
            <Image cover width="65" height="65" src={img_url} />
            <CardTitleContent>
                <TypographyText font="18" color="dark">
                    {name}
                </TypographyText >
                <TypographyText font="14" color="gray">
                    {category}
                </TypographyText >
            </CardTitleContent>
            <ButtonDelete onClick={handleDelete}>
                <IconDelete />
            </ButtonDelete>
        </Card>
    )
}