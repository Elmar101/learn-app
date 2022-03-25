import { TextField } from "@mui/material";
import React, { ReactNode, useCallback, useState } from "react";
import useUpdateEffect from "../../../shared/hooks/useUpdateEffect";


export interface XTextFieldProps {
  ref?: any;
  autoFocus?: boolean;
  value: string;
  error?: string | null;
  disabled?: boolean;
  hint?: string | null;
  label?: string | null;
  alignmentHintAndError?: 'start' | 'end';
  multiline?: boolean;
  maxRows?: number;
  minRows? : number;
  rows?: number;
  maxLength?: number;
  type?: string;
  placeholder?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
  onBlur?: (value: string) => void;
  onEnterKeyPress?: (value: string) => void;
  endAdornment?: ReactNode;
  autoControl?: boolean;
}

const XTextField: React.FC<XTextFieldProps> = React.forwardRef((props: XTextFieldProps, ref: any) => {
  const { onEnterKeyPress, onChange, maxLength } = props;

  const keydownCallback = useCallback((e: any) => {
    if (e.keyCode === 13) {
      onEnterKeyPress && onEnterKeyPress(e.target.value);
    }
  }, [onEnterKeyPress])

  const [autoControlValue, setAutoControlValue] = useState(props.value);
  useUpdateEffect(() => {
    setAutoControlValue(props.value);
  }, [props.value])

  const onChangeCallback = useCallback((e: any) => {
    let val: string = e.target.value;
    if(maxLength && val.length > maxLength) {
      val = val.substr(0, maxLength);
    }
    onChange && onChange(val);
    setAutoControlValue(val);
  }, [maxLength, onChange])

  return (
    <TextField
      // style={{minHeight: 68}}
      inputRef={ref}
      autoFocus={props.autoFocus}
      spellCheck={false}
      InputProps={{ 
        readOnly: props.readonly,
        endAdornment: props.endAdornment
      }}
      margin="dense"
      multiline={props.multiline}
      maxRows={props.maxRows}
      type={props.type || 'text'}
      fullWidth={true}
      disabled={!!props.disabled}
      error={!!props.error}
      label={props.label}
      placeholder={props.placeholder}
      InputLabelProps={{style: {whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', right: '2px'}}}
      value={props.autoControl ? autoControlValue : props.value}
      onChange={onChangeCallback}
      onBlur={event => props.onBlur && props.onBlur(event.target.value)}
      onKeyDown={keydownCallback}
      helperText={!!props.error ? props.error : (props.hint || (maxLength && `${props.value.length}/${maxLength}`))}
      FormHelperTextProps={{style: {textAlign: props.alignmentHintAndError || (maxLength && !props.error ? 'end' : 'start')}}}

    />
  );
});

export default XTextField;