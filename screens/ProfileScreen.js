
import React from 'react';
import { View, Image, Text, Pressable, SafeAreaView, StyleSheet, Linking, ScrollView, Button, Modal } from 'react-native';
import { Icon, SocialIcon, Card } from 'react-native-elements'

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
    description: "Le futur de l'informatique. Le meilleur de l'innovation.",
    images: 'https://media-exp1.licdn.com/dms/image/C560BAQEogO0_6QTmdg/company-logo_200_200/0/1594123399589?e=1619049600&v=beta&t=yG3ikHGqCliH4Hcu-1Bnnhe6FZtqut6yEUuBvpYlP-c',
  },
  {
    name: 'Lycée Jules Ferry',
    description: 'BTS services informatiques aux organisations',
    images: 'https://lh3.googleusercontent.com/proxy/9YRgDOaO0Us09HWgcU9p0QGoGzfUqegX6X5fW_AvagWxsiFs9IfRvwqfFKf6o4L2lk3oVpXKPFNssY7bAkXQyDLIJd-wjetp5ZbMkUOg6aRyfqXt6D2mJI8qvF0SNDoqygXP4duoznn3dD6WtQTrpb4FA0qgSn33elsftA',
  },
  {
    name: 'Lycée Jules Ferry',
    description: "BAC Systèmes d'information de gestion",
    images: 'https://lh3.googleusercontent.com/proxy/9YRgDOaO0Us09HWgcU9p0QGoGzfUqegX6X5fW_AvagWxsiFs9IfRvwqfFKf6o4L2lk3oVpXKPFNssY7bAkXQyDLIJd-wjetp5ZbMkUOg6aRyfqXt6D2mJI8qvF0SNDoqygXP4duoznn3dD6WtQTrpb4FA0qgSn33elsftA',
  },
]

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#191970", }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C5603AQEQjBcw33rJcw/profile-displayphoto-shrink_400_400/0/1597071710679?e=1616630400&v=beta&t=liGhMaFJAybF8fmSl96hnWj1GTRHi4Kf63D9cC6X0Ow' }} />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Georges Bitakwire</Text>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <Pressable style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 205)'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
              <Icon name="place" color="black" onPress={() => { Linking.openURL('https://www.google.com/maps/place/Ach%C3%A8res-Ville/@48.9701977,2.0775146,17z/data=!3m1!4b1!4m5!3m4!1s0x47e68a4479550027:0xe741029a32dbb129!8m2!3d48.9701977!4d2.0775146') }} />
              <Text style={{ marginLeft: 10 }} onPress={() => { Linking.openURL('https://www.google.com/maps/place/Ach%C3%A8res-Ville/@48.9701977,2.0775146,17z/data=!3m1!4b1!4m5!3m4!1s0x47e68a4479550027:0xe741029a32dbb129!8m2!3d48.9701977!4d2.0775146') }}>Achères, France</Text>
            </Pressable>
          </View>
          <View style={styles.row}>
            <Icon name="phone" color="white" />
            <Text style={{ marginLeft: 10, color: "white" }}>06 10 89 68 46</Text>
          </View>
          <View style={styles.row}>
            <Icon name="email" color="white" />
            <Text style={{ marginLeft: 10, color: "white" }}>georges.bitakwire@epitech.eu</Text>
          </View>
          <View style={styles.row}>
            <Pressable style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
              <SocialIcon type="github" onPress={() => { Linking.openURL('https://github.com/GeorgesBob') }} />
            </Pressable>
            <Text>  </Text>
            <Pressable style={({ pressed }) => [
              {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
              },
              styles.wrapperCustom
            ]}>
              <SocialIcon type="linkedin" onPress={() => { Linking.openURL('https://www.linkedin.com/in/bitakwire/') }} />
            </Pressable>
          </View>
        </View>
        <View>
          <View style={styles.rowIcon}>
            <Icon reverse
              name='ios-football'
              type='ionicon'
              color='blue'
              size={45}
            />
            <Icon reverse
              name='ios-film'
              type='ionicon'
              color='black'
              size={45} />

            <Icon reverse
              name='ios-american-football'
              type='ionicon'
              color='brown'
              size={45} 
              />
          </View>
          <Card containerStyle={{ borderRadius: 25 }}>
            <Card.Title>EXPERIENCES</Card.Title>
            <Card.Divider />
            {
              experiences.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"
                      source={{ uri: u.images }}
                    />
                    <Text style={styles.nameCard}>{u.name}</Text>
                    <Text style={styles.description}>{u.description}</Text>
                    <Text></Text>
                  </View>

                );
              })
            }
          </Card>
          <Card containerStyle={{ borderRadius: 25 }}>
            <Card.Title>FORMATIONS</Card.Title>
            <Card.Divider />
            {
              school.map((u, i) => {
                return (
                  <View key={i} style={styles.user}>
                    <Image
                      style={styles.image}
                      resizeMode="cover"

                      source={{ uri: u.images }}
                    />
                    <Text style={styles.nameCard}>{u.name}</Text>
                    <Text style={styles.description}>{u.description}</Text>
                    <Text></Text>
                  </View>
                );
              })
            }
          </Card>
          <Text></Text>
          <Button title=" Veuillez Cliquez ici pour en savoir plus"></Button>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: "white",
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'baseline',
    padding: 30,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rowIcon: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  nameCard: {
    fontSize: 22,
    color: "black",
    fontWeight: '600',
    marginTop: 0,
    marginLeft: 90,
    position: "absolute",
  },
  description: {
    fontSize: 14,
    color: "grey",
    fontWeight: '600',
    marginTop: 29,
    marginLeft: 90,
    position: "absolute",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
    borderWidth: 5,
    alignSelf: 'baseline',
  },
  imageHob: {
    width: 50,
    height: 50,
    borderRadius: 6,
    borderWidth: 5,
    flexDirection: 'row'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    flexDirection: 'row'
  },
})