import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

export interface OptionForDropDown {
  name: string;
  value: string;
}

export interface UseDropdownSelectorProps {
  options: string[];
  defaultOption: string;
  labelId: string;
}

export const useDropdownSelector = ({
  options,
  defaultOption,
  labelId,
}: UseDropdownSelectorProps) => {
  const [selected, setSelected] = useState<string>(defaultOption);

  const handleOnChange = (event: SelectChangeEvent<string>) => {
    setSelected(event.target.value);
    return;
    // const optionSelected = findSelectedOption(options, event.target.value);
    // if (optionSelected) {
    //   setSelected(optionSelected.name);
    // }
  };

  return {
    selected,
    Dropdown: (
      <Select
        labelId={labelId}
        id={labelId}
        onChange={handleOnChange}
        onClick={(e) => {
          e.stopPropagation();
        }}
        value={selected}
        label="Select Theme:"
      >
        {options.map((option) => (
          <MenuItem key={`dropdownSelector_${option}`} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    ),
  };
};
