import { StyleSheet, ViewStyle } from 'react-native'
import { PrimaryColors } from '../../styles/Colors'
import { bodyRegular } from '../../styles/Fonts'
import { mediumSize } from '../../styles/Size'
import { smallSpace } from '../../styles/Spacing'

type ButtonStyleType = {
  buttonContainer: ViewStyle
  button: ViewStyle
  searchInput: ViewStyle
  disabledButton: ViewStyle
  disabledLabel: ViewStyle
  buttonLabel: ViewStyle
  spinner: ViewStyle
}

export default StyleSheet.create<ButtonStyleType>({
  buttonContainer: {
    flex: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  searchInput: { borderColor: PrimaryColors.LightGray, borderWidth: 1, padding: smallSpace, width: '80%' },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: mediumSize,
    borderRadius: 4,
    minHeight: 56,
  },
  disabledButton: {
    backgroundColor: PrimaryColors.LightGray,
  },
  disabledLabel: {
    color: PrimaryColors.Black,
  },
  buttonLabel: {
    ...bodyRegular,
    color: PrimaryColors.White,
  },
  spinner: {
    color: PrimaryColors.White,
    marginRight: 8,
  },
})
