import React, { useRef, useEffect } from 'react';
import { Actions } from 'react-native-router-flux';
import Competence from "./Competence";
import Experience from "./Experience";
import Formation from "./Formation";
import Other from "./Other";
import { SimpleAnimation } from 'react-native-simple-animations';
import { Card, Title, Paragraph } from 'react-native-paper';

import {
    Image,
    Animated,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import img from '../resources/Ali.jpg';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim,
            }}
        >
            {props.children}
        </Animated.View>
    );
}

const Profil = () => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: '#1c429a', height: 250 }}>
                <LinearGradient
                    colors={['#44b8af', 'transparent']}
                    style={styles.background}
                />
                <SimpleAnimation delay={100} duration={5000} fade staticType='zoom'>
                    <Image source={img} style={styles.photo} />
                </SimpleAnimation>
            </View>

            <FadeInView >
                <View>
                    <Text style={styles.title}>ALI OUAIBI</Text>
                </View>

                <View style={styles.aboutContainer}>
                        <Card>
                        <Card.Content>
                        <Title>Bonjour,</Title>
                        <Paragraph>Aujourd'hui, je suis Développeur en formation chez Web@cadémie by Epitech. Passionné par la réalisation et le développement de projets web, je me suis tout
                            naturellement tourné vers la formation chez Epitech pour ensuite démarrer ma carrière en tant
                            que développeur web. À la web@cadèmie by EPITECH depuis novembre 2019, de nombreux projets réalisés tout
                            aussi bien seul qu’en équipe. J’ai pu acquérir l’autonomie, l’esprit d’initiative, l’esprit d’équipe. J’ai
                            du faire preuve de rigueur, de patience pour mener à bien les projets qui m’ont été confiés en
                            respectant un planning. Fort de ma passion pour ce domaine, je suis très investi dans mon travail
                            et je prends plaisir à l’exercer.
                        </Paragraph>
                        </Card.Content>
                        </Card>
                </View>
            </FadeInView> 

            <View style={styles.popup}>
                <Competence />
                <Experience />
                <Formation />
                <Other />
            </View>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => Actions.accueil()}>
                <Text style={styles.submitButtonText}> Accueil </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 260,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        
        fontWeight: "bold"
    }, aboutContainer: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 350,
    }, submitButton: {
        backgroundColor: '#7b7369',
        padding: 10,
        margin: 15,
        height: 40,
        width: 75,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    }, submitButtonText: {
        color: 'white'
    }, photo: {
        borderRadius: 120,
        width: 120,
        height: 200,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
    }, popup: {
        display: 'flex'
    }
});


export default Profil