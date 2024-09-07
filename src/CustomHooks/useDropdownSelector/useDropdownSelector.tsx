import {
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material';
import { useState } from 'react';

// LOCAL
import { App_Colors } from '../../styles/globalStyles';

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
  };

  return {
    selected,
    Dropdown: (
      <FormControl>
        <InputLabel
          id={labelId}
          sx={{
            marginTop: '5px',
            color: App_Colors.contrastColor,
            '&.Mui-focused': { color: 'grey' },
          }}
        >
          {labelId}
        </InputLabel>
        <Select
          labelId={labelId}
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'grey',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'grey',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: App_Colors.contrastColor,
            },
            '& .MuiSelect-select': {
              color: App_Colors.contrastColor,
            },
            '& .MuiSvgIcon-root': {
              color: App_Colors.contrastColor,
            },
          }}
          id={labelId}
          onChange={handleOnChange}
          onClick={(e) => e.stopPropagation()}
          value={selected}
          label={labelId}
        >
          {options.map((option) => (
            <MenuItem
              key={`dropdownSelector_${option}`}
              value={option}
              sx={{ color: 'black' }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    ),
  };
};
