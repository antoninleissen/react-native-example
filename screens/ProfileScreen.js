import React from 'react';
import { View,Image, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>   
            <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Georges Bitakwire</Text>
            </View>
            </View>
        </View>
    );
}
export default ProfileScreen;

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0a0f4c",
        height:200,
      },
      avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 5,
        borderColor: "white",
        marginBottom:10,
        alignSelf:'baseline',
        position: 'absolute',
        marginTop: 130
      },
      name:{
        fontSize:22,
        color:"#0a0f4c",
        fontWeight:'600',
      },
      body:{
        marginTop:40,
      },
      bodyContent: {
        flex: 1,
        alignItems: 'baseline',
        padding:30,
      },
})