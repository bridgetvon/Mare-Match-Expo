import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { global } from '../styles/global';

const Stallions = ({ navigation }) => {
    const [stallions, setStallions] = useState([
        { "stallions": "Ampere", "registry": "KWPN", "contact": "Willow Hill Equestrian", "location": "VA" },
        { "stallions": "Apiro", "registry": "Bavarian", "contact": "Avalon Equine", "location": "OK" },
        { "stallions": "Beltano", "registry": "AHS", "contact": "Barbara Schmidt; Leatherdale", "location": "KY" },
        { "stallions": "Benidetto", "registry": "AHS", "contact": "Hidden Acres Dressage", "location": "FL" },
        { "stallions": "Bingotti", "registry": "AHS", "contact": "Edgar Schutte, Eurequine", "location": "CA" },
        { "stallions": "Blacktie", "registry": "AHS", "contact": "Avalon Equine", "location": "OK" },
        { "stallions": "C Olivo", "registry": "PRE", "contact": "Hilltop Farm, agent", "location": "MD" },
        { "stallions": "Coer d'Amour", "registry": "AHS", "contact": "High Point Hanoverians", "location": "MD" },
    ])

    const pressHandler = () => {
        navigation.push("Stallion")
    }
    //TODO: pass stallion list as prop from database
    // if (!stallionList.length){
    //     return <Text> No stallions match your criteria. </Text>
    // }
    return (
        <View style={global.container}>
            <FlatList
                data={stallions}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("Stallions", item)}>
                        <Text>{item.stallions}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Stallions;