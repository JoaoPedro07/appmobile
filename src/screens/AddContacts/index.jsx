import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { Alert, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddContacts({ navigation }) {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');

    function alerta(){
        Alert.alert(`${name} tem o telefone ${tel}`);
    }

    return(
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.container}>
                <Text>Nome</Text>
                <TextInput style={styles.input} onChangeText={setName}/>
                <Text>Telefone</Text>
                <TextInput style={styles.input} onChangeText={setTel}/>
            </View>
        </ScrollView>
        <View style={styles.view}>
            <Button title="Salvar" onPress={alerta} />
        </View>
      </SafeAreaView>
     
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10
    },
    input: {
        borderColor: '#333',
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        padding: 8
    }
  });
