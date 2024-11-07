import { View, Text, } from "@/components/Themed";
import { StyleSheet, TextInput, Button, Alert } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    input: {
        height: 40,
        width: '50%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
      },
});
  
export default function SigninPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MyVoca2</Text>
             <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
             <Text style={styles.title}>To use this app, you must sign in.</Text>
            <TextInput
            placeholder="email"
            style={styles.input}></TextInput>
            <TextInput
            placeholder="password"
            style={styles.input}></TextInput>
            <Button 
            title="sign in"
             />
             <Button 
            title="join us"
             />
        </View>
    );
};