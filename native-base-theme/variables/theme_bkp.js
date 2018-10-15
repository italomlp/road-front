// import color from 'color';

import { Platform, Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX = platform === 'ios' && deviceHeight === 812 && deviceWidth === 375;

export default {
  platformStyle,
  platform,
  containerBgColor: '#000',

  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',
  btnUppercaseAndroidText: true,

  badgeBg: '#ED1727',
  badgeColor: '#fff',
  badgePadding: 3,

  btnFontFamily: 'System',
  btnDisabledBg: '#b5b5b5',
  buttonPadding: 6,
  btnPrimaryBg: 'rgba(46,147,60,1)',
  btnPrimaryColor: '#fff',
  btnInfoBg: 'rgba(244,224,77,1)',
  btnInfoColor: '#fff',
  btnSuccessBg: '#5cb85c',
  btnSuccessColor: '#fff',
  btnDangerBg: '#d9534f',
  btnDangerColor: '#fff',
  btnWarningBg: '#f0ad4e',
  btnWarningColor: '#fff',
  btnTextSize: 16.5,
  btnTextSizeLarge: 22.5,
  btnTextSizeSmall: 12,
  borderRadiusLarge: 57,

  iconSizeLarge: 45,
  iconSizeSmall: 18,

  cardDefaultBg: 'rgba(0,0,0,1)',
  cardBorderColor: '#74D85E',
  // cardBorderWidth: 3,
  cardItemPadding: platform === 'ios' ? 10 : 12,

  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 0,
  CheckboxIconSize: 18,
  CheckboxFontSize: 21,
  DefaultFontSize: 17,
  checkboxBgColor: '#039BE5',
  checkboxSize: 20,
  checkboxTickColor: '#fff',

  brandPrimary: 'rgba(116,216,94,1)',
  brandInfo: '#3F57D3',
  brandSuccess: '#2E933C',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandDark: '#000',
  brandLight: 'rgba(221,230,203,1)',

  fontFamily: 'System',
  fontSizeBase: 15,
  fontSizeH1: 27,
  fontSizeH2: 24,
  fontSizeH3: 21,

  footerHeight: 55,
  footerDefaultBg: '#3F51B5',
  footerPaddingBottom: 0,

  tabBarTextColor: '#fff',
  tabBarTextSize: 14,
  activeTab: '#fff',
  sTabBarActiveTextColor: 'rgba(46,147,60,1)',
  tabBarActiveTextColor: '#fff',
  tabActiveBgColor: 'rgba(116,216,94,1)',

  toolbarBtnColor: '#fff',
  toolbarDefaultBg: 'rgba(116,216,94,1)',
  toolbarHeight: 64,
  toolbarSearchIconSize: 20,
  toolbarInputColor: '#fff',
  searchBarHeight: 30,
  searchBarInputHeight: 30,
  toolbarBtnTextColor: '#fff',
  toolbarDefaultBorder: 'rgba(116,216,94,1)',
  iosStatusbar: 'light-content',
  statusBarColor: 'rgba(116,216,94,1)',
  darkenHeader: '#F0F0F0',

  iconFamily: 'Ionicons',
  iconFontSize: 30,
  iconHeaderSize: 29,

  inputFontSize: 17,
  inputBorderColor: 'rgba(221,230,203,1)',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',
  inputHeightBase: 50,
  inputColor: 'rgba(255,255,255,1)',
  inputColorPlaceholder: 'rgba(179,215,184,1)',

  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 20,

  listBg: '#FFF',
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listBtnUnderlayColor: '#DDD',
  listItemPadding: 10,
  listNoteColor: 'rgba(164,164,164,1)',
  listNoteSize: 13,

  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',

  radioBtnSize: 25,
  radioSelectedColorAndroid: 'rgba(46,147,60,1)',
  radioBtnLineHeight: 29,

  segmentBackgroundColor: 'rgba(116,216,94,1)',
  segmentActiveBackgroundColor: '#fff',
  segmentTextColor: '#fff',
  segmentActiveTextColor: 'rgba(116,216,94,1)',
  segmentBorderColor: '#fff',
  segmentBorderColorMain: '#3F51B5',

  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',

  tabDefaultBg: 'rgba(46,147,60,1)',
  topTabBarTextColor: 'rgba(221,230,203,1)',
  topTabBarActiveTextColor: '#fff',
  topTabBarBorderColor: '#fff',
  topTabBarActiveBorderColor: '#fff',

  tabBgColor: '#F8F8F8',
  tabFontSize: 15,

  textColor: 'rgba(255,255,255,1)',
  inverseTextColor: '#fff',
  noteFontSize: 14,
  defaultTextColor: '#000',

  titleFontfamily: 'System',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: '#FFF',
  titleFontColor: '#FFF',

  borderRadiusBase: 2,
  borderWidth: 1,
  contentPadding: 10,
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,
};
