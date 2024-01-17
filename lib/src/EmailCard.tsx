import React = require("react")
import { View, Text } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';


const EmailCard = (props) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>

      <View style={{ flex: 0.2, flexDirection: "column", margin: 5 }}>

        <View style={{
          width: 48,
          height: 48,
          marginLeft: 5,
          justifyContent: "center",
          borderRadius: 60 / 2,
          backgroundColor: props.color,
        }}>
          <Text style={{
            alignSelf: 'center',
            fontWeight: "800",
            color: 'white',
            fontSize: 25,
          }}>{props.letter}</Text>
        </View>
      </View>


      <View style={{ flex: 0.7, flexDirection: "column", margin: 5 }}>
        <Text style={{ fontWeight: props.type, fontSize: 19 }}>{props.title}</Text>
        <Text style={{ fontWeight: props.type, fontSize: 14 }}>{props.subtitle}</Text>
        <Text>Here you Learn App Development</Text>

      </View>

      <View style={{ flex: 0.15, flexDirection: "column", marginRight: 5 }}>

        <Text>{props.date}</Text>
        <Ionicons name="star-outline" style={{ marginLeft: 10, marginTop: 10 }} size={20} color="grey" />
      </View>
    </View>
  )
}

export default EmailCard