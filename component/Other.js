import React, { useState } from "react";
import {
    Image,
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import Unorderedlist from 'react-native-unordered-list';
import img from '../resources/fb.png';

const Competence = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.titleText}>COORDONNÉeS</Text>
                        <View style={styles.list}>
                            <Text style={styles.lieuText}>📧 ali.ouaibi@epitech.eu</Text>
                            <Text style={styles.lieuText}>📱 07 69 22 49 61</Text>

                        </View>

                        <Text style={styles.titleText}>EXTRA-PROFESSIONNEL</Text>
                        <View style={styles.list}>
                            <Text style={styles.lieuText}>Président de l'association caritative d'aide aux personnes démunies UMSF</Text>
                            <Text style={styles.lieuText}><Image source={img} style={styles.photo} /> UnMondeSansFaim</Text>
                        </View>

                        <Text style={styles.titleText}>LOISIRS</Text>
                        <View style={styles.list}>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Football ⚽️</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Salle de fitness 🏋️‍♂️</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Lecture 📚</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Sorties-loisirs 🎭</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Jeux vidéo 🎮</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Cuisine 👨🏼‍🍳</Text></Unorderedlist>
                        </View>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#7b7369" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Fermer</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Info personnelle</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#44b8af",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    titleText: {
        marginBottom: 5,
        textAlign: "center",
        fontWeight: 'bold'
    },
    lieuText: {
        marginBottom: 5,
        textAlign: "center",
    },
    list: {
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15,
    }, photo: {
        width: 30,
        height: 20,
    }
});

export default Competence;