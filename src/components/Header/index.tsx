import { View, Image, TextInput, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '../../theme'
import logoImage from '../../assets/logo.png'

type HeaderProps = {
  task: string;
  inputRef: React.RefObject<TextInput>;
  onChangeText: (task: string) => void;
  onPress: () => void;
}

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Image source={logoImage} />
        <View style={styles.form}>
          <TextInput
            style={[
              styles.input,
              inputRef.current?.isFocused()
                ? styles.inputBorder
                : null,
            ]}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={theme.colors.base.gray300}
            value={task}
            onChangeText={onChangeText}
            ref={inputRef}
            autoCorrect={false}
            onSubmitEditing={onPress}
            returnKeyType="done"
          />
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <MaterialCommunityIcons
                name="plus-circle-outline"
                size={22}
                color={theme.colors.base.gray100}
            />
          </TouchableOpacity>
      </View>
    </View>
  )
}