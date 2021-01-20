const experiences = [
  {
     name: 'Imagine-app',
     description: "Développement d'applications mobiles avec react-native",
     images: 'https://lh3.googleusercontent.com/b1ThhGONw2TavEamr2APMRt5fQJfMTSClYyXGYDFEKvQ_41mFXlaKNafRiIn9ZgEdJ9VoivywpSntOkQJXz7'
  },
  {
      name: 'Com on Cloud',
      description: "Conception d'un site web pour la fédération française de fitness",
      images: 'https://www.wanacorp.fr/wp-content/uploads/2016/06/com-on-cloud.jpg'
   },
   {
      name: 'Majestique Diffusion',
      description: "Conception d'un site web de E-commerce",
      images: 'https://files.sbcdnsb.com/images/zjxca7nv65mo/businesses/1595336894/d5a8aae14e951b0ed0ff20151218-1063531-1hd7ik2.png'
   },
 ]
const school = [
  {
      name: 'Epitech',
      description: '',
      images: '', 
  },
  {
      name: 'Lycée Jules Ferry',
      description: '',
      images: '', 
  },
  {
      name: 'Lycée Jules Ferry',
      description: '',
      images: '', 
  },
]
import React from 'react';
import { View, Image, Text, Button, SafeAreaView, StyleSheet, Linking, ScrollView } from 'react-native';
import { Icon, SocialIcon, Card, Divider} from 'react-native-elements'


const ProfileScreen = ({navigation}) => {
    return (
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
            <View style={styles.header}></View>
            <Image style={styles.avatar} source={{uri: 'https://media-exp1.licdn.com/dms/image/C5603AQEQjBcw33rJcw/profile-displayphoto-shrink_400_400/0/1597071710679?e=1616630400&v=beta&t=liGhMaFJAybF8fmSl96hnWj1GTRHi4Kf63D9cC6X0Ow'}}/>   
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
       <Card>
        <Card.Title>EXPERIENCES</Card.Title>
        <Card.Divider/>
        {
          experiences.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  
                  source={{ uri: u.images }}
                />
                <Text style={styles.name2}>{u.name}</Text>
                <Text style={styles.description}>{u.description}</Text>
                <Text></Text>
              </View>
              
            );
          })
        }
      </Card>
      <Card>
        <Card.Title>FORMATION</Card.Title>
        <Card.Divider/>
        {
          school.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  
                  source={{ uri: u.images }}
                />
                <Text style={styles.name2}>{u.name}</Text>
                <Text style={styles.description}>{u.description}</Text>
                <Text></Text>
              </View>
              
            );
          })
        }
      </Card>
      </ScrollView>  
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
      name2: {
        fontSize:22,
        color:"black",
        fontWeight:'600',
        marginTop: 0,
        marginLeft: 90,
        position: "absolute",
      },
      description: {
        fontSize:14,
        color:"grey",
        fontWeight:'600',
        marginTop: 25,
        marginLeft: 90,
        position: "absolute",
      },
      image: {
        width: 50, 
        height: 50,
        borderRadius: 6,
        borderWidth: 5,
        alignSelf:'baseline',
      },
})