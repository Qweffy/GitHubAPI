import { ViewStyle } from 'react-native'

export type ButtonInputProps = {
  isLoading?: boolean
}

export type ButtonFunctionProps = {}

export type ButtonOwnProps = {
  mainColor?: string
  disabled?: boolean
  label: string
  containerStyles?: ViewStyle
  buttonStyles?: ViewStyle
  labelStyles?: ViewStyle
  onPress: (() => {}) | (() => void)
}

export type ButtonProps = ButtonInputProps & ButtonFunctionProps & ButtonOwnProps
