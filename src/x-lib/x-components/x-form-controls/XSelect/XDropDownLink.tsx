import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Navigate, useLocation, useMatch, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useUpdateEffect from "../../../../shared/hooks/useUpdateEffect";
interface Props {
  value: { index: number; path: string }[];
}
interface State {
  index: number;
  value: string;
  path: string
}
export const XDropDownLink: React.FC<Props> = (props) => {
  const { value: val } = props;
  const navigate = useNavigate();
  const [value, setValue] = React.useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
    navigate(`/${event.target.value}`,{replace: true});
  };

  const MenuItems = () => {
    return val.map((v) => (
      <MenuItem key={v.index} value={v.path} >
        {(v.path).toUpperCase()} PAGE
      </MenuItem>
    ));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {MenuItems()}
        </Select>
      </FormControl>
    </div>
  );
};
