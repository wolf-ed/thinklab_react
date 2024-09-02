import { OptionForDropDown } from './useDropdownSelector';

export const findSelectedOption = (
  options: OptionForDropDown[],
  optionToFind: string
) => {
  return options.find((option) => option.value === optionToFind);
};
