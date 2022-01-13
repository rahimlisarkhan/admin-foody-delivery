import { Card, CardTitleContent, ButtonDelete } from "./RestaurantCard.styled"
import Image from "../../../components/Image"
import TypographyText from '../../../components/Typograph'
import IconDelete from '../../../components/Icons/Delete';
import { useModalSetting } from "../../../hooks/useModalSetting";

export const RestaurantsCard = () => {
  const {setOpenRestaurantModal,setDeleteRestaurantModalID } = useModalSetting()
  
  const handleDelete = () => {
    setOpenRestaurantModal(true)
    setDeleteRestaurantModalID("004")
  }
    return (
        <Card>
            <Image cover width="65" height="65" src="https://www.trusselltrust.org/wp-content/uploads/sites/2/2020/07/papa-johns-logo@2x.png" />
            <CardTitleContent>
                <TypographyText font="18" color="dark">
                    Papa John’s
                </TypographyText >
                <TypographyText font="14" color="gray">
                    Pizza
                </TypographyText >
            </CardTitleContent>
            <ButtonDelete onClick={handleDelete}>
                <IconDelete />
            </ButtonDelete>
        </Card>
    )
}