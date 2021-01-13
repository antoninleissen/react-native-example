import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";
import Unorderedlist from 'react-native-unordered-list';

const Experience = () => {
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
                        <Text style={styles.titleText}>ENSEIGNEMENT PÉDAGOGIQUE</Text>
                        <View style={styles.list}>
                        <Text style={styles.lieuText}>L'institue ISG PARIS (75)</Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Initier des élèves à la techno react-native</Text></Unorderedlist>
                        </View>
                        <Text style={styles.titleText}>FACTEUR</Text>
                        <View style={styles.list}>
                        <Text style={styles.lieuText}>LA POSTE d’Orsay (91)</Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Trie de courrier et de colis</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Distribution</Text></Unorderedlist>
                        </View>

                        <Text style={styles.titleText}>ASSISTANT MANAGER</Text>
                        <View style={styles.list}>
                        <Text style={styles.lieuText}>Class’ Croute de Fleury-Mérogis (91)</Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Gestion des commandes</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Gestion des livraisons</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Gestion de production</Text></Unorderedlist>
                        </View>

                        <Text style={styles.titleText}>HÔTE DE CAISSE</Text>
                        <View style={styles.list}>
                        <Text style={styles.lieuText}>Carrefour de la Ville du Bois (91)</Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Caissier</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>Station-Service</Text></Unorderedlist>
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
                <Text style={styles.textStyle}>Expérience professionnel</Text>
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
    }
});

export default Experience;