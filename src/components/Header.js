import React from "react";
import { useNavigate } from "react-router-dom";
import { PREFIX_PATH } from "../helper/constants";
import { StyledHeader } from "../styles";

function Header() {
  const navigate = useNavigate();

  const deltaPng = `${PREFIX_PATH}/LogoDelta.png`;

  const handleHome = () => {
    navigate(`${PREFIX_PATH}/`);
  };

  return (
    <StyledHeader>
      <div className="content">
        <div className="content-left">
          <div className="image-container" onClick={handleHome}>
            <img src={deltaPng} alt="logo" />
          </div>
          <h1> Dashboard CCO </h1>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
