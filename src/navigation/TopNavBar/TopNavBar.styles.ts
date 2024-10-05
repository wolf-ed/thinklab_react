/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const TopNavBarStyled = styled('div')<{
  isFixed?: boolean;
}>(({ isFixed }) => ({
  flexGrow: 1,
  position: isFixed ? 'fixed' : 'relative',
  top: isFixed ? 0 : undefined,
  left: isFixed ? 0 : undefined,
  right: isFixed ? 0 : undefined,
  width: isFixed ? '100%' : undefined,
  zIndex: isFixed ? 10 : 1,
  '.linksWithoutdefault': {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 'normal',
  },
  '.isActive': {
    borderBottom: '1px solid #3f51b5',
  },
}));

export const AppNameStyled = styled('div')({
  fontSize: '1.5rem',
  fontWeight: '700',
  height: '100%',
  textAlign: 'center',
});
