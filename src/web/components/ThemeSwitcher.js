import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

export default function ThemeSwitcher(props) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () => createMuiTheme({
      unstable_strictMode: true,
      palette: {
        type: prefersDarkMode ? 'dark' : 'light',
      },
      typography: {
        fontFamily: `'Open Sans', 'Noto Sans SC', Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif`,
      },
      overrides: {
        MuiIconButton: {
          root: {
            padding: 4,
            borderRadius: '4px',
            '& .MuiTouchRipple-root': {
              borderRadius: '4px',
            },
            '& .MuiTouchRipple-child': {
              borderRadius: '4px',
            },
          },
        },
        MuiMenuItem: {
          root: {
            '&:hover': {
              backgroundColor: '#006eff',
              color: '#ffffff',
            },
            '&$selected': {
              backgroundColor: '#006eff',
              color: '#ffffff',
              '&:hover': {
                backgroundColor: '#006eff',
                color: '#ffffff',
              },
            },
          },
        },
      },
      custom: {
        background: {
          noteList: prefersDarkMode ? '#2a2a2a' : 'rgb(245, 245, 245)',
          about: prefersDarkMode ? '#2a2a2a' : '#ffffff',
          noteListActive: prefersDarkMode ? '#333333' : '#fff',
          content: prefersDarkMode ? '#333333' : '#fff',
          contentGreen: 'rgb(237, 249, 240)',
          contentYellow: 'rgb(255, 248, 222)',
          sideDrawer: prefersDarkMode ? '#121212' : '#333333',
          sidebarSelected: prefersDarkMode ? '#232323' : 'rgba(255,255,255,0.08)',
          sidebarItemHover: prefersDarkMode ? '#232323' : '#2a2a2a',
          menuItemHover: '#006eff',
          loginButton: prefersDarkMode ? '#f0f0f0' : '#333333',
          loginButtonHover: prefersDarkMode ? '#ffffff' : '#121212',
          login: prefersDarkMode ? '#101115' : '#fafafa',
          closeButtonHover: '#e82100',
          normalButtonHover: prefersDarkMode ? '#4a4a4a' : '#eaeaea',
          platformButton: '#f0f0f0',
          platformButtonHover: '#d8d8d8',
        },
        color: {
          textHighlight: '#e82100',
          drawerText: prefersDarkMode ? '#d8d8d8' : '#ffffff',
          drawerTitle: '#aaa',
          noteTitle: prefersDarkMode ? '#d8d8d8' : '#333333',
          noteDate: prefersDarkMode ? '#555555' : '#aaaaaa',
          noteAbstract: prefersDarkMode ? '#d8d8d8' : '#333333',
          noteTypeButton: prefersDarkMode ? '#d8d8d8' : '#333333',
          matchedText: '#aaaaaa',
          menuItemHover: '#ffffff',
          activeStarIcon: '#FDDD10',
          defaultStarIcon: prefersDarkMode ? '#d8d8d8' : '#50575F',
          sidebarIcon: prefersDarkMode ? '#d8d8d8' : '#333333',
          hr: prefersDarkMode ? '#404040' : '#d8d8d8',
          contentToolIcon: '#aaaaaa',
          contentToolIconHover: prefersDarkMode ? '#ffffff' : '#333333',
          dialogButton: prefersDarkMode ? '#ffffff' : '#333333',
          dialogText: '#aaaaaa',
          dialogTextHover: prefersDarkMode ? '#ffffff' : '#333333',
          loginButton: prefersDarkMode ? '#333333' : '#ffffff',
          liteSelectBorder: '#d8d8d8',
          logoName: prefersDarkMode ? '#f0f0f0' : '#333333',
          forgetPasswordButton: '#448aff',
          windowBarTool: prefersDarkMode ? '#ffffff' : '#333333',
          windowBarLogo: '#f0f0f0',
          closeButtonHover: '#ffffff',
          normalButtonHover: prefersDarkMode ? '#ffffff' : '#333333',
          platformButton: '#333333',
          // lite input
          liteInputNormalBorder: '#d8d8d8',
          liteInputFocusBorder: '#006eff',
          liteInputErrorBorder: '#e82100',
        },
      },
    }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
}

ThemeSwitcher.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,
};
