import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import styled from "@emotion/styled";

const StyledRadioGroup = styled(RadioGroup)`
  margin-left: 10px;

  @media (max-width: 768px) {
    margin: 10px 5px;
  }
`;

const StyledRadioBtn = styled(Radio)`
  &.Mui-checked {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

export default function NoticeRadioBtns({ value, setValue }) {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <StyledRadioGroup row value={value} onChange={handleChange}>
        <FormControlLabel
          value=""
          control={<StyledRadioBtn size="small" />}
          label="전체"
        />
        <FormControlLabel
          value="ROLE_ADMIN_SEOUL_CENTRAL"
          control={<StyledRadioBtn size="small" />}
          label="명륜 동아리"
        />
        <FormControlLabel
          value="ROLE_ADMIN_SUWON_CENTRAL"
          control={<StyledRadioBtn size="small" />}
          label="율전 동아리"
        />
      </StyledRadioGroup>
    </FormControl>
  );
}
