import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useMediaQuery,
} from "@mui/material";

export default function NoticeRadioBtns() {
  const match768 = useMediaQuery("(max-width:768px)");
  return (
    <FormControl>
      {!match768 && (
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={{ marginLeft: "30px" }}
        >
          <FormControlLabel
            value="all"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label="전체"
          />
          <FormControlLabel
            value="seoul"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "white",
                  },
                  marginLeft: "60px",
                }}
              />
            }
            label="명륜 동아리"
          />
          <FormControlLabel
            value="suwon"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "white",
                  },
                  marginLeft: "60px",
                }}
              />
            }
            label="율전 동아리"
          />
        </RadioGroup>
      )}
    </FormControl>
  );
}
