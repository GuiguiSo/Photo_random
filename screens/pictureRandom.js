import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, CheckBox, ActivityIndicator } from 'react-native';




export default function PictureRandom({ navigation }) {

    const [Number, setNumber] = useState(200);
    const [Blackwhite, setBlackwhite] = useState(false);
    const [Blur, setBlur] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);


    const randomNumber = () => {
        setNumber(Math.floor(Math.random() * 1000));
        console.log(Number)

    }






    return (
        <View style={styles.container}>

            <Text style={styles.textwelcom}>Bonjour et bienvenue : {navigation.getParam('name')}</Text>

            <View style={styles.container_logo}>
                {imageLoaded ? '' : <ActivityIndicator style={styles.load} />}
                <Image
                    style={[Blur ? styles.blurfalse : styles.blurtrue && Blackwhite ? styles.blackwhitefalse : styles.blackwhitetrue, imageLoaded ? styles.logo : '']}
                    source={{ uri: 'https://picsum.photos/id/' + Number + '/200/300' }}
                    onLoad={() => setImageLoaded(true)}
                />
            </View>

            <Button onPress={randomNumber} title='Change image'></Button>

            <View>

                <CheckBox style={styles.checkboxContainer}
                    value={Blur}
                    onValueChange={setBlur}
                    style={styles.checkbox}
                />
            </View>
            <Text>Flouter l'image</Text>
            <View>
                <CheckBox style={styles.checkboxContainer}
                    value={Blackwhite}
                    onValueChange={setBlackwhite}
                    style={styles.checkbox}
                />
                <Text>Noir et blanc</Text>
            </View>



        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textinput: {
        borderColor: 'black'
    },
    logo: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,


    },
    blurfalse: {
        filter: `blur(1px)`


    },
    blurtrue: {
        filter: `blur(0px)`

    },
    blackwhitefalse: {
        filter: `grayscale(100%)`

    },
    blackwhitetrue: {
        filter: `grayscale(0%)`

    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,

    },
    checkbox: {
        alignSelf: "center",
        marginTop: 20,
    },
    textwelcom: {
        marginBottom: 10,
    },
    load: {
        margin: 30,
        justifyContent: 'center'

    }

});
