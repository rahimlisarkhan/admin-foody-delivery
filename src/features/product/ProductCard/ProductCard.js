import * as React from 'react';
import * as Style from './ProductCard.styled';
import IconDelete from '../../../components/Icons/Delete';
import TypographyText from '../../../components/Typograph'
import { useModalSetting } from '../../../hooks/useModalSetting';

export const ProductCard = ({ item: { id, name, price, img_url, restaurant } }) => {

  const { setOpenProductModal, setDeleteProductModalID } = useModalSetting()

  const handleDelete = () => {
    setOpenProductModal(true)
    setDeleteProductModalID(id)
  }

  return (
    <Style.Card >
      <Style.CardImage
        image={img_url}
        alt="pizza"
      />
      <Style.CardContentStyled>
        <TypographyText font="18" color="dark" >
          {name}
        </TypographyText>
        <TypographyText font="14" color="gray">
          {restaurant}
        </TypographyText>
      </Style.CardContentStyled>
      <Style.CardActionsStyled>
        <TypographyText font="12" color="green">
          ${price}
        </TypographyText>
        <Style.ButtonDeleteStyled onClick={handleDelete}>
          <IconDelete />
        </Style.ButtonDeleteStyled>
      </Style.CardActionsStyled>
    </Style.Card>
  );
}
