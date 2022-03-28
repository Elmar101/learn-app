import { ReactNode } from "react";

export interface XSelectProps {
  label: string | null;
  hint?: string | null;
  items?: any[];
  disabled?: boolean;
  error?: string | null;
  alignmentHintAndError?: 'start' | 'end';
  readonly?: boolean;
  showValueTooltip?: boolean;
  itemBuilder: (item: any, index: number) => XSelectItemProps;
}

export interface XSingleSelectProps extends XSelectProps {
  value: string;
  onChange: (value: string, allItems?: any[]) => void;
  onClose?: (val: string) => void;
}

export interface XMultiSelectProps extends XSelectProps {
  autoControl?: boolean;
  value: string[];
  onChange: (value: string[], allItems?: any[]) => void;
  onClose?: (val: string[]) => void;
}

export interface XSelectItemProps {
  value: string;
  text: string | ReactNode;
}