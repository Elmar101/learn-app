import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import ListItem from "@mui/material/ListItem";
import Menu from "@mui/material/Menu";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import React, { useState, useMemo, useCallback } from "react";
import { isNotEmpty } from "../../../../utils/validators/validator";
import XTextField from "../XTextField";
import { XSelectItemProps, XSingleSelectProps } from "./XSelectProps";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TextField from '@mui/material/TextField';
const XSingleSelect: React.FC<XSingleSelectProps> = (props: XSingleSelectProps) => {
  const theme = useTheme();
  const { items, itemBuilder, showValueTooltip, onClose, onChange } = props;

  const [searchKey, setSearchKey] = useState('');
  const changeSearchKey = useCallback((e) => { setSearchKey(e) }, []);

  const transformedItems: XSelectItemProps[] | undefined = useMemo(() => {
    return items?.map((item, index) => itemBuilder(item, index))
  }, [items, itemBuilder])

  const inputValue = useMemo(() => {
    if (!isNotEmpty(props.value)) return '';
    const _txt = transformedItems?.find(item => item.value === props.value)?.text;
    if (typeof _txt === 'string') return _txt;
    else return ''
  }, [transformedItems, props.value]);

  const showTooltip = useMemo(() => {
    if (inputValue && showValueTooltip) return true;
    return false;
  }, [inputValue, showValueTooltip])

  const filteredItems = useMemo(() => {
    return transformedItems?.filter(item => {
      if (typeof item.text === 'string') {
        if (searchKey.length === 1) {
          return item.text.toLocaleLowerCase('AZ').startsWith(searchKey.toLocaleLowerCase('AZ'));
        } else {
          return item.text.toLocaleLowerCase('AZ').indexOf(searchKey.toLocaleLowerCase('AZ')) !== -1;
        }
      } else {
        return true;
      }
    })
  }, [transformedItems, searchKey])

  const [isOpenPopupMenu, setIsOpenPopupMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const openMenu = useCallback((event: React.MouseEvent<any>) => {
    if (!props.readonly && !props.disabled) {
      setAnchorEl(event.currentTarget);
      setIsOpenPopupMenu(true);
    }
  }, [props.readonly, props.disabled])

  const close = useCallback(() => {
    setIsOpenPopupMenu(false);
    setAnchorEl(null);
    setSearchKey('');
  }, [])

  const closeMenu = useCallback(() => {
    close();
    onClose && onClose('');
  }, [onClose, close])

  const selectItem = useCallback((item: XSelectItemProps) => () => {
    onChange(item.value, items);
    close();
    onClose && onClose(item.value)
  }, [onChange, close, onClose, items])

  return (
    <Container sx={{ width:"100%" }}>
      <Tooltip title={showTooltip ? inputValue : ''} disableFocusListener={true} disableTouchListener={true} >
        <TextField
          style={{ cursor: 'pointer' }}
          margin="dense"
          type='text'
          fullWidth={true}
          disabled={!!props.disabled}
          error={!!props.error}
          label={props.label}
          InputLabelProps={{ style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', right: '2px' } }}
          value={inputValue}
          helperText={!!props.error ? props.error : props.hint}
          onClick={openMenu}
          FormHelperTextProps={{ style: { textAlign: props.alignmentHintAndError || 'start' } }}
          InputProps={{
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <ArrowDropDownIcon />
              </InputAdornment>
            )
          }}
        />
      </Tooltip>
      <Menu
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        id="simple-menu"
        anchorEl={anchorEl}
        open={isOpenPopupMenu}
        onClose={closeMenu}
        PaperProps={{
          style: { maxHeight: 250, minHeight: 200 }
        }}
      >
        <div style={{ width: '100%', padding: '0px 8px' }}>
          <XTextField autoFocus={true} placeholder="Axtarış" value={searchKey} onChange={changeSearchKey} />
        </div>
        {filteredItems?.map((filteredItem, index) => {
          return (
            <ListItem
              style={{ cursor: 'pointer' }}
              key={filteredItem.value}
              value={filteredItem.value}
              autoFocus={false}
              onClick={selectItem(filteredItem)}
            >
              <span style={{ color: filteredItem.value === props.value ? theme.palette.primary.main : 'initial' }}>{filteredItem.text}</span>
            </ListItem>
          );
        })}
      </Menu>
    </Container>
  )
};

export default XSingleSelect;