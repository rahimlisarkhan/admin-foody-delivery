import { Box } from "@mui/material";
import styled from "styled-components";

export const ModalBody = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=>theme.colors.white};
  padding: 10px 20px;
  border-radius: 4px;
`

export const ModalTitle = styled()