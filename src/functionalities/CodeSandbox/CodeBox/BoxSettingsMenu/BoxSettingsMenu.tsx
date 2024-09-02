import {
  IconButton,
  Menu,
  MenuItem,
  InputLabel,
  Select,
  Button,
  Checkbox,
  FormControlLabel,
  SelectChangeEvent,
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

// LOCAL
import { codeStyleThemes } from '../const';
import { useState } from 'react';
import {
  BoxSettingsAction,
  BoxSettingsActionsEnum,
  BoxSettingsMenuStateInterface,
} from './BoxSettingsMenuStateReducer';
import { findCodeStyleTheme } from '../utils';

interface BoxSettingsMenuPropsInterface {
  boxSettingsState: BoxSettingsMenuStateInterface;
  boxSettingsDispatch: React.Dispatch<BoxSettingsAction>;
}

export const BoxSettingsMenu = ({
  boxSettingsState,
  boxSettingsDispatch,
}: BoxSettingsMenuPropsInterface) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const closeSettings = () => {
    setAnchorEl(null);
  };

  const handleFontSizeChange = (delta: number): void => {
    boxSettingsDispatch({
      type: BoxSettingsActionsEnum.setFontSize,
      payload: boxSettingsState.fontSize + delta,
    });
  };

  const handleWrapContentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    boxSettingsDispatch({
      type: BoxSettingsActionsEnum.setWrapContent,
      payload: event.target.checked,
    });
  };

  const onSelectCodeStyleTheme = (event: SelectChangeEvent<string>) => {
    const styleSelected = findCodeStyleTheme(
      codeStyleThemes,
      event.target.value
    );
    if (styleSelected) {
      boxSettingsDispatch({
        type: BoxSettingsActionsEnum.setCurrentTheme,
        payload: styleSelected,
      });
    }
    closeSettings();
  };
  const openSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton onClick={openSettings}>
        <SettingsIcon />
      </IconButton>
      <Menu
        id="settings-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeSettings}
      >
        <MenuItem onClick={(e) => e.stopPropagation()}>
          <InputLabel id="theme-selector-label">Select Theme:</InputLabel>
          <Select
            labelId="theme-selector-label"
            id="theme-selector"
            onChange={onSelectCodeStyleTheme}
            onClick={(e) => {
              e.stopPropagation();
            }}
            value={boxSettingsState.currentTheme.name}
            label="Select Theme:"
          >
            {codeStyleThemes.map((codeStyle) => (
              <MenuItem key={codeStyle.name} value={codeStyle.name}>
                {codeStyle.name}
              </MenuItem>
            ))}
          </Select>
        </MenuItem>
        <MenuItem>
          Font Size
          <Button onClick={() => handleFontSizeChange(-1)}>-</Button>
          {boxSettingsState.fontSize}
          <Button onClick={() => handleFontSizeChange(1)}>+</Button>
        </MenuItem>
        {/* <MenuItem>
          Width
          <Button onClick={() => handleWidthChange(-10)}>-</Button>
          {boxSettingsState.width}
          <Button onClick={() => handleWidthChange(10)}>+</Button>
        </MenuItem>
        <MenuItem>
          Height
          <Button onClick={() => handleHeightChange(-10)}>-</Button>
          {boxSettingsState.height}
          <Button onClick={() => handleHeightChange(10)}>+</Button>
        </MenuItem> */}
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                checked={boxSettingsState.wrapContent}
                onChange={handleWrapContentChange}
              />
            }
            label="Wrap Content"
          />
        </MenuItem>
      </Menu>
    </>
  );
};
