import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#004B8D',
    colorInfo: '#004B8D',
    colorLink: '#004B8D',
    colorLinkHover: '#003366',
    colorTextBase: '#0F172A',
    borderRadius: 8,
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    Button: {
      fontWeight: 600,
      controlHeight: 44,
      borderRadius: 8,
    },
    Card: {
      borderRadiusLG: 14,
    },
    Tabs: {
      inkBarColor: '#C00000',
      itemSelectedColor: '#004B8D',
      itemHoverColor: '#004B8D',
      titleFontSize: 15,
    },
    Input: {
      controlHeight: 44,
      borderRadius: 8,
      activeBorderColor: '#004B8D',
      hoverBorderColor: '#004B8D',
    },
  },
};

export default theme;