const experiences = [
    {
       name: 'brynn',
       description: '',
       image: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
   ]
const 
import React from 'react';
import { View,Image, Text, SafeAreaView, StyleSheet, Linking } from 'react-native';
import { Icon, SocialIcon, Card } from 'react-native-elements'


const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>   
            <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Georges Bitakwire</Text>
            </View>
            </View>
        </View>
        <View style={styles.userInfoSection}>
            <View style={styles.row}>
                <Icon name="place" color="#0a0f4c"/>
                <Text style={{marginLeft: 10}}>Achères, France</Text>
            </View>
            <View style={styles.row}>
                <Icon name="phone" color="#0a0f4c"/>
                <Text style={{marginLeft: 10}}>06 10 89 68 46</Text>
            </View>
            <View style={styles.row}>
                <Icon name="email" color="#0a0f4c"/>
                <Text style={{marginLeft: 10}}>georges.bitakwire@epitech.eu</Text>
            </View>
            <View style={styles.row}>
                <SocialIcon type="github" onPress={() => {Linking.openURL('https://github.com/GeorgesBob')}}/>
                <SocialIcon type="linkedin" onPress= {() => {Linking.openURL('https://www.linkedin.com/in/bitakwire/')}} />
            </View>
        </View>
        </SafeAreaView>
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
        marginTop: 130,
      },
      name:{
        fontSize:22,
        color:"black",
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
      userInfoSection: {
          paddingHorizontal: 30,
          marginBottom: 25,
      },
      row: {
          flexDirection: 'row',
          marginBottom: 10,
      },
})