import React, {useState} from 'react';
import { View, TextInput, Text } from 'react-native';
import { SendButton } from '../SendButton';

import { styles } from './styles';

export function SearchBar() {
    const [input, setInput] = useState<string>('');

    function handleSend() {
        console.log(input);
        setInput('');
    }

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Insira um username..."
                onChangeText={input => setInput(input)}
                value={input}
            />
            <SendButton onPress={handleSend}/>
        </View>
    );
}