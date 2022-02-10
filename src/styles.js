import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background: #21419e;
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .content {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 10px;

    .content-left {
      display: flex;
      align-items: center;
    }

    .image-container {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border: 1px #ffffff solid;
      border-radius: 50%;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 31px;
        height: 31px;
      }
    }

    .button-icon {
      margin-right: 10px;
      color: white;
    }

    h1 {
      color: #ffffff;
      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      margin: 0 0 0 10px;
    }
  }
`;

export const ButtonSecondary = styled(Button)`
  color: rgba(33, 65, 158, 1);
`;

export const ButtonPrimary = styled(Button)`
  background: #8dc544;
  color: white;

  &:hover {
    color: #8dc544;
  }
`;
