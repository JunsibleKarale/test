import React = require("react")
import { Text, View } from "react-native"
type Props = {
    children?: React.ReactNode | undefined
}
const TestLib = (props: Props) => {
    return(
        <View style={{flex: 1}}> 
            <Text>Hello</Text>
            {props?.children}
        </View>
    )
}

export default TestLib