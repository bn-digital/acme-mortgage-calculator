import { ThemeConfig} from "antd/es/config-provider/context";

export const theme : ThemeConfig = {
  components: {
    Button: {
      colorPrimary: "#4169F6",
      colorPrimaryHover: "#1B47E4",
      colorPrimaryActive: "#1B47E4",
      colorPrimaryText: "#FFFFFF",
      colorText: "#4169F6",
      fontSize: 16,
      lineHeight: 1,
      borderRadius: 8,
    },
    Typography: {
      fontSizeHeading1: 32,
      fontSizeHeading2: 24,
      fontSize: 14,
      lineHeightHeading1: 1.25,
      lineHeightHeading2: 1.33,
      colorTextHeading: "#101012",
      colorText: "#4B4C4E",
      colorTextDescription: "#8D8D8F",
      lineHeight: 1.71,
    },
    Input: {
      colorBorder: "#B9B9BA",
      colorTextPlaceholder: "#A0A0A2",
      colorText: "#101012",
      borderRadiusLG: 4,
      fontFamily: "Inter Medium",
    }
  },
  token: {
    colorPrimary: "#4169F6",
    colorBgLayout: "#F9F8FA",
  }
}

