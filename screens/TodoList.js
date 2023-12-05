import { useState } from 'react';
import { Alert, Button, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import { StyleSheet, Text, View, StatusBar, Platform, Image, FlatList } from 'react-native';

export function TodoList() {
    const [text, setText] = useState("");
    const [List, setList] = useState(["church ", 80]);


    function displayUpdate() {
        const newTime = new Date().getUTCSeconds();
        return `${text} added ${newTime} seconds ago`
    }

     function AddItem() {
        setList((prev) => [...prev, { text: text, date: new Date().getTime() }]);
        //ToastAndroid.show("Item has been added sucessfully", ToastAndroid.SHORT)
        Alert.alert("Add Item", "Item has been added successfully", [{text: "Done", onPress: () => console.log("Have a nice day, dear customer")}])
    }

    // function deleteItem() {
    //     let input;
    //     const updateList = List.filter((item) => item.List !== input);
    //     setList(updateList);
    //     ToastAndroid.show("All items have been deleted", ToastAndroid.SHORT)
    // }

    function deleteAll(id) {
        const newList = List.filter(item => item.date !== id);
        setList(newList);
    }


    return (
        <SafeAreaView style={{ flex: 1}}>
            <View style={styles.container}>
                <Text style= {styles.header}>
                        Todo List Display
                </Text>
                <TextInput placeholder='Enter your name'
                    style={styles.input}
                    placeholderTextColor={"green"}
                    //onchange
                    //onChangeText={(inp) => {console.log(inp)}}
                    onChangeText={(inp) => { setText(inp)}}
                />

                
                <Text style = {{marginTop: 5}}>{ text}</Text>
                {/* <TouchableOpacity onPress={(AddItem) => {setText()}} */}
                <TouchableOpacity onPress={AddItem}
                    style={{
                    backgroundColor: "green",
                    borderRadius: 40, 
                    padding: 10,
                    alignItems: "center",
                    width: 100,
                    marginLeft: 100,
                }}>

                    <Text style={{color: "white", fontWeight: "bold"}}>Add to List</Text>
                </TouchableOpacity>
                {/* {
                    List.map(item => {
                        return <Text Key={item.date}>{ item.text}</Text>
                    })        
                } */}
                <FlatList
                    style={{ flex: 1,}}
                    data={List}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.renderView}>
                                <Text>{item.text}</Text>
                                <View style={styles.row}>
                                    <Text>
                                        28/11/23
                                    </Text>
                                    <TouchableOpacity style={styles.btn} onPress={() => (deleteAll(item.date))}>
                                        <Text style={{color: "white"}}> Delete</Text>
                                    </TouchableOpacity>
                               </View>

                            </View>
                        )
                    }}
                    key={(item) => item.date}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : null,
        backgroundColor: "#ffffff",
    },
    header: {
        fontSize: 25,
        color: "green",
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        fontSize: 16,
        marginTop: 20,
    },
    renderView: {
        borderColor: "green",
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: 5,
    },
    btn: {
        backgroundColor: "#ed2929",
        padding: 4,
        borderRadius: 50,
        paddingHorizontal: 13,

    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})

