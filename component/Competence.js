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
import js from '../resources/js.png';
import img from '../resources/php.png';
import sql from '../resources/sql.png';
import mongo from '../resources/mongodb.png';


const Other = () => {
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
                        <Text style={styles.titleText}>COMPÉTENCES</Text>
                        <View style={styles.list}>
                        <Text style={styles.lieuText}> <Image source={img} style={styles.photo} /></Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>LARAVEL</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>SYMFONY</Text></Unorderedlist>
                            <Text style={styles.lieuText}> <Image source={js} style={styles.photo} /></Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>REACT & REACT NATIVE</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>ANGULAR</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>NODEJS</Text></Unorderedlist>
                            <Text style={styles.lieuText}> <Image source={sql} style={styles.photo} /> <Image source={mongo} style={styles.photo1} /></Text>
                            <Unorderedlist bulletUnicode={0x2022}><Text>MONGODB</Text></Unorderedlist>
                            <Unorderedlist bulletUnicode={0x2022}><Text>SQL</Text></Unorderedlist>
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
                <Text style={styles.textStyle}>Compétences</Text>
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
        marginBottom: 2,
        textAlign: "center",
        fontWeight: 'bold'
    },
    lieuText: {
        marginTop: 5,
        marginBottom: 5,
        textAlign: "center",
        fontStyle: 'italic',
        color: '#44b8af'
    },
    list: {
        width: 180,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10,
    }, photo: {
        width: 40,
        height: 40,
    }, photo1: {
        width: 35,
        height: 40,
    }
});

export default Other;