import * as React from 'react';
import * as Style from './ProductCard.styled';
import IconDelete from '../../../components/Icons/Delete';
import TypographyText from '../../../components/Typograph'
import { useModalSetting } from '../../../hooks/useModalSetting';

export const ProductCard = () => {

  const {setOpenProductModal,setDeleteProductModalID } = useModalSetting()

  const handleDelete = () => {
    setOpenProductModal(true)
    setDeleteProductModalID("004")
  }

  return (
      <Style.Card >
        <Style.CardImage
          image="https://pizza.az/upload/resize_cache/iblock/37e/260_250_040cd750bba9870f18aada2478b24840a/37eb63cda8f0ffca5b732896c3780187.png"
          alt="pizza"
        />
        <Style.CardContentStyled>
          <TypographyText font="18" color="dark" >
            Marqarita
          </TypographyText>
          <TypographyText font="14" color="gray">
            Papa John’s
          </TypographyText>
        </Style.CardContentStyled>
        <Style.CardActionsStyled>
         <TypographyText font="12" color="green">
            $16
          </TypographyText>
          <Style.ButtonDeleteStyled onClick={handleDelete}>
            <IconDelete />
          </Style.ButtonDeleteStyled>
        </Style.CardActionsStyled>
      </Style.Card>
  );
}
