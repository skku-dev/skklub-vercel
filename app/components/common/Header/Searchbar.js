"use client";

import { useState, useEffect, useRef } from "react";
import {
  Input,
  InputAdornment,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Snackbar,
  Alert,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import useURLParse from "@/hooks/useURLParse";
import { useQuery } from "@tanstack/react-query";
import {
  getPartiallyMatchedSearchResults,
  getFullyMatchedSearchResults,
} from "@/utils/fetch";
import { useRouter } from "next/navigation";

const SearchbarWrap = styled.div`
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 70%;
  min-height: 60px;
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#E5E4DA")};
  z-index: 50;
  padding: 0 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

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
    line-height: 20px;
    font-size: 16px;
  }

  &::after {
    border-bottom: 2px solid
      ${(props) =>
        props.campus === "true"
          ? props.theme.palette.primary.main
          : props.theme.palette.secondary.main};
  }
`;

const SuggestionBox = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#2A3133" : "#E5E4DA")};
  position: sticky;
  /* top: 140px; */
  width: 100%;
  height: auto;
  max-height: 300px;
  overflow: scroll;
  margin: 0px auto;
  padding: 0 10px;
  z-index: 60;

  @media (max-width: 480px) {
    top: 150px;
    width: 100%;
    max-height: 160px;
  }
`;

const BelongsLabel = styled.div`
  color: #949595;
  font-weight: 300;
  font-size: 14px;
`;
const CampusChip = styled.div`
  font-size: 14px;
  color: ${(props) =>
    props.campus === "율전"
      ? props.theme.palette.primary.main
      : props.theme.palette.secondary.main};
  margin-left: 10px;
`;

export default function Searchbar({ setIsSearchVisible, isDarkMode }) {
  const { isSuwon } = useURLParse();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { isLoading, data } = useQuery({
    queryKey: ["searchKeywords", searchTerm],
    queryFn: () => getPartiallyMatchedSearchResults({ searchTerm, isSuwon }),
    // onSuccess: (data) => console.log(data),
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSelectSuggestion = (suggestion) => {
    router.push(
      `/${suggestion.campus === "율전" ? "suwon" : "seoul"}/${suggestion.id}`
    );
    setIsSearchVisible(false);
  };

  const [searchAlert, setAlert] = useState(false);

  const handleSubmit = () => {
    if (data.content.length === 0) {
      setAlert(true);
    } else if (data.content[0].name === searchTerm) {
      router.push(
        `/${data.content[0].campus === "율전" ? "suwon" : "seoul"}/${
          data.content[0].id
        }`
      );
      setIsSearchVisible(false);
    } else {
      setAlert(true);
    }
  };

  const handleAlertClose = () => {
    setAlert(false);
  };

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
    <SearchbarWrap isDarkMode={isDarkMode} ref={outside}>
      <StyledInput
        campus={isSuwon.toString()}
        fullWidth
        placeholder="동아리를 입력하세요."
        value={searchTerm}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleSubmit}>
              <SearchIcon sx={{ fontSize: "34px" }} />
            </IconButton>
          </InputAdornment>
        }
      />
      <SuggestionBox isDarkMode={isDarkMode} campus={isSuwon.toString()}>
        <List component="div" aria-label="suggestion">
          {data &&
            data.content.map((suggestion) => (
              <ListItemButton
                key={suggestion.id}
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                <ListItemText primary={suggestion.name} />
                <BelongsLabel>{suggestion.belongs}</BelongsLabel>
                <CampusChip campus={suggestion.campus}>
                  {suggestion.campus}
                </CampusChip>
              </ListItemButton>
            ))}
        </List>
      </SuggestionBox>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={searchAlert}
        autoHideDuration={2000}
        onClose={handleAlertClose}
      >
        <Alert severity="error" sx={{ width: "100%", wordBreak: "keep-all" }}>
          {data && data.content.length === 0
            ? "입력하신 키워드에 해당하는 동아리가 없습니다."
            : "추천 검색어를 클릭하여 정확한 동아리명을 입력해주세요!"}
        </Alert>
      </Snackbar>
    </SearchbarWrap>
  );
}
