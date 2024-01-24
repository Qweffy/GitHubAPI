import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native'
import { mediumSpace, smallSpace } from '../../styles/Spacing'
import { PrimaryColors } from '../../styles/Colors'

type HomeStyleType = {
  container: ViewStyle
  subContainer: ViewStyle
  searchInput: ViewStyle
  userContainer: ViewStyle
  avatar: ImageStyle
  userInfo: TextStyle
  userName: TextStyle
  hyperlink: TextStyle
  buttonContainer: ViewStyle
}

export default StyleSheet.create<HomeStyleType>({
  container: { flex: 1, marginTop: mediumSpace },
  subContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  searchInput: { borderColor: PrimaryColors.LightGray, borderWidth: 1, padding: smallSpace, width: 200 },
  userContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: PrimaryColors.LightGray,
    width: 300,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
  hyperlink: {
    color: PrimaryColors.CTA,
    textDecorationLine: 'underline',
  },
  buttonContainer: { marginTop: mediumSpace },
})
