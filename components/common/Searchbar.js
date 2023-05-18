import { useEffect, useRef } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

const SearchbarWrap = styled.div`
  position: sticky;
  top: 70px;
  width: 70%;
  height: 70px;
  margin: 0px auto;
  margin-top: -70px;
  background-color: #151717;
  z-index: 50;
  padding: 0 30px;

  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 480px) {
    top: 80px;
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  height: 60px;
  .MuiInputBase-input {
    height: 1.5em;
    line-height: 1.5em;
    font-size: 1.2rem;
  }
`;
export default function Searchbar({ setIsSearchVisible }) {
  const outside = useRef();
  const closeSearchbar = () => {
    setIsSearchVisible(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  });

  const handleOutside = (e) => {
    if (!outside.current.contains(e.target)) {
      closeSearchbar();
    }
  };

  return (
    <SearchbarWrap ref={outside}>
      <StyledInput
        fullWidth
        placeholder="동아리를 입력하세요."
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              // onClick={handleClickShowPassword}
              // onMouseDown={handleMouseDownPassword}
            >
              <SearchIcon sx={{ fontSize: "34px" }} />
            </IconButton>
          </InputAdornment>
        }
      />
    </SearchbarWrap>
  );
}
