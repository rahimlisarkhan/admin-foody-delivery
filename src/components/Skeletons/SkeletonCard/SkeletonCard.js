import { Skeleton } from "@mui/material"
import { SkeletonCardStyled,SkeletonImg } from "./SkeletonCard.styled"


export const SkeletonCard = ({width}) => {

    return (
        <SkeletonCardStyled width={width}>
            <SkeletonImg/>
            <Skeleton  />
              <Skeleton width="60%" />
              <Skeleton width="30%" />
        </SkeletonCardStyled>
    )
}
