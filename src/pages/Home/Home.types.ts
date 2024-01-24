import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { UserSummary } from '../../types/githubAPI.types'

export type RenderItemProps = {
  item: UserSummary
  navigation: NativeStackNavigationProp<any>
}
