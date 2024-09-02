/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledMainNavigation = styled('div')(() =>
  css({
    flexGrow: 1,
    '.linksWithoutdefault': {
      textDecoration: 'none',
      color: 'inherit',
      fontWeight: 'normal',
    },
    '.isActive': {
      borderBottom: '1px solid #3f51b5',
    },
  })
);

export const AppNameStyled = styled('div')({
  fontSize: '1.5rem',
  fontWeight: '700',
  height: '100%',
  textAlign: 'center',
});
