import color from 'color';

import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX = platform === 'ios' && (deviceHeight === 812 || deviceWidth === 812);

export default {
  platformStyle,
  platform,

  // Accordion
  headerStyle: '#edebed',
  iconStyle: '#000',
  contentStyle: '#f5f4f5',
  expandedIconStyle: '#000',
  accordionBorderColor: '#d3d3d3',

  // Android
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: platform === 'ios' ? 3 : 0,

  // Button
  btnFontFamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.textColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.textColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.textColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.textColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return platform === 'ios' ? this.fontSizeBase * 1.1 : this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: '#000',
  get cardBorderColor() {
    return this.brandPrimary;
  },
  cardBorderRadius: 2,
  cardItemPadding: platform === 'ios' ? 10 : 12,

  // CheckBox
  CheckboxRadius: platform === 'ios' ? 13 : 0,
  CheckboxBorderWidth: platform === 'ios' ? 1 : 2,
  CheckboxPaddingLeft: platform === 'ios' ? 4 : 2,
  CheckboxPaddingBottom: platform === 'ios' ? 0 : 5,
  CheckboxIconSize: platform === 'ios' ? 21 : 16,
  CheckboxIconMarginTop: platform === 'ios' ? undefined : 1,
  CheckboxFontSize: platform === 'ios' ? 23 / 0.9 : 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  // Color
  brandPrimary: '#74D85E',
  brandInfo: '#F7E87D',
  brandSuccess: '#5cb85c',
  brandDanger: '#ED6A5A',
  brandWarning: '#F4E04D',
  brandDark: '#2E933C',
  brandLight: '#DDE6CB',

  // Container
  containerBgColor: '#000',

  // Date Picker
  datePickerTextColor: '#000',
  datePickerBg: 'transparent',

  // Font
  DefaultFontSize: 16,
  fontFamily: platform === 'ios' ? 'System' : 'Roboto',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: '#2E933C',
  footerPaddingBottom: 0,

  // FooterTab
  tabBarTextColor: '#fff',
  tabBarTextSize: platform === 'ios' ? 14 : 11,
  activeTab: '#fff',
  sTabBarActiveTextColor: '#2E933C',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: '#74D85E',

  // Header
  toolbarBtnColor: '#fff',
  toolbarDefaultBg: '#74D85E',
  toolbarHeight: platform === 'ios' ? 64 : 56,
  toolbarSearchIconSize: platform === 'ios' ? 20 : 23,
  toolbarInputColor: '#fff',
  searchBarHeight: platform === 'ios' ? 30 : 40,
  searchBarInputHeight: platform === 'ios' ? 30 : 50,
  toolbarBtnTextColor: '#fff',
  toolbarDefaultBorder: '#74D85E',
  iosStatusbar: platform === 'ios' ? 'dark-content' : 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: platform === 'ios' ? 30 : 28,
  iconHeaderSize: platform === 'ios' ? 33 : 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#dde6cb',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return color(this.inputColor)
      .darken(0.2)
      .hex();
  },

  // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: platform === 'ios' ? 20 : 24,
  listItemSelected: platform === 'ios' ? '#74D85E' : '#2E933C',

  // List
  listBg: 'transparent',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: platform === 'ios' ? 10 : 12,
  listNoteColor: '#808080',
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  // Radio Button
  radioBtnSize: platform === 'ios' ? 25 : 23,
  radioSelectedColorAndroid: '#2e933c',
  radioBtnLineHeight: platform === 'ios' ? 29 : 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: '#74d85e',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: '#74d85e',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#74d85e',

  // Spinner
  defaultSpinnerColor: '#74d85e',
  inverseSpinnerColor: '#2e933c',

  // Tab
  tabDefaultBg: '#2e933c',
  topTabBarTextColor: '#dde6cb',
  topTabBarActiveTextColor: '#fff',
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#fff',

  // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  // Text
  textColor: '#fff',
  inverseTextColor: '#000',
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: platform === 'ios' ? 'System' : 'Roboto_medium',
  titleFontSize: platform === 'ios' ? 17 : 19,
  subTitleFontSize: platform === 'ios' ? 11 : 14,
  subtitleColor: '#DDE6CB',
  titleFontColor: '#FFF',

  // Other
  borderRadiusBase: platform === 'ios' ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
