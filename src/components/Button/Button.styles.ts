import { StyleSheet, ViewStyle } from 'react-native'
import { PrimaryColors } from '../../styles/Colors'
import { bodyRegular } from '../../styles/Fonts'
import { mediumSize } from '../../styles/Size'

type ButtonStyleType = {
  buttonContainer: ViewStyle
  button: ViewStyle
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
