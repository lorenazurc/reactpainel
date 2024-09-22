import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Linking, Alert } from 'react-native';

const MainScreen = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      Alert.alert('Mensagem enviada', message);
      setMessage('');
    } else {
      Alert.alert('Erro', 'Por favor, escreva uma mensagem');
    }
  };

  const handleCall = () => {
    Linking.openURL('tel:2112345678');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escreva sua mensagem aqui"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar Mensagem" onPress={handleSendMessage} />
      <Text style={styles.phoneNumber} onPress={handleCall}>
        Telefone da Portaria: (21) 1234-5678
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  phoneNumber: {
    color: 'blue',
    marginTop: 16,
    textDecorationLine: 'underline',
  },
});

export default MainScreen;
