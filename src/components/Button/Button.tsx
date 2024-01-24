import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

import { ButtonProps } from './Button.types'
import styles from './Button.styles'
import { PrimaryColors } from '../../styles/Colors'

export const Button = ({
  mainColor = PrimaryColors.CTA,
  disabled = false,
  label,
  containerStyles = {},
  buttonStyles = {},
  labelStyles = {},
  isLoading = false,
  onPress,
}: ButtonProps) => {
  const buttonBackground = { backgroundColor: mainColor }
  const disabledLabel = disabled ? styles.disabledLabel : {}
  const disabledButton = disabled ? styles.disabledButton : {}

  return (
    <View style={[styles.buttonContainer, containerStyles]}>
      <TouchableOpacity
        style={[styles.button, buttonBackground, disabledButton, buttonStyles]}
        onPress={onPress}
        disabled={disabled || isLoading}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={[styles.buttonLabel, disabledLabel, labelStyles]}>{label}</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}
