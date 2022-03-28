export const isNotEmpty = (value: any): boolean => {
    let _f = (value !== null) && (value !== undefined);
    if (typeof value == 'string') {
      _f = _f && value.trim().length !== 0;
    } else if (Array.isArray(value)) {
      _f = _f && value.length !== 0;
    }
    return _f;
  };