import React, { useState } from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from "react-native";

const Formation = () => {
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
                        <Text style={styles.titleFormation}>FORMATION DÉVELOPPEUR WEB</Text>
                        <Text style={styles.textFormation}>
                            Web@cadèmie BY EPITECH (Kremlin-Bicêtre) | Nov 2019 - Nov 2021
                            Titre d’Intégrateur – Développeur Web au niveau III (fr) et 5 (eu)
                        </Text>
                        <Text style={styles.titleFormation}>BACCALAURÉAT S.T.I GÉNIE CIVIL</Text>
                        <Text style={styles.textFormation}>
                            Lycée J.P TIMBAUD | Juillet 2011
                        </Text>

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
                <Text style={styles.textStyle}>Formation</Text>
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
    titleFormation: {
        marginBottom: 5,
        textAlign: "center",
        fontWeight: 'bold'
    },
    textFormation: {
        marginBottom: 15,
        textAlign: "center",
    }
});

export default Formation;