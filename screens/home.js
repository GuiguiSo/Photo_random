import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, Animated } from 'react-native';



export default function Home({ navigation }) {

    const [name, setName] = useState('')
    const [nameerror, setNameerror] = useState(styles.text)

    const errortextinput = () => {
        setNameerror(styles.texterror)
    }

    

    return (

        <View style={styles.container}>
            <View style={styles.container_logo}>
                <Image style={styles.logo} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png' }} />
            </View>

            <View style={styles.container_input}>

                <Text style = {nameerror} > Entre ton nom</Text>
                <TextInput style={styles.textinput} requir onChangeText={(val) => setName(val)} placeholder='Ton nom' placeholderTextColor="#000" ></TextInput>
                <Button onPress={name === '' ? errortextinput : () => navigation.navigate('pictureRandom', { name: name })} title='Envoyer'></Button>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    container_input: {
        alignText: 'center',

    },
    textinput: {
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 50,
        textAlign: 'center',
        marginBottom: 20,


    },
    logo: {
        marginBottom: 50,
        width: 100,
        height: 100,

    },
    texterror: {
        textAlign: 'center',
        paddingBottom: 20,
        color: 'red',
        fontSize: 30,

    },
    text: {
        textAlign: 'center',
        paddingBottom: 20,

    }
});
