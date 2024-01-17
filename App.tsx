import * as React from 'react';
import { Text, View, TextInput, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import EmailCard from './lib/src/EmailCard';


function MailScreen() {
  return (
    <View style={{ flexDirection: "column", flex: 1, backgroundColor: "#fff" }}>
      <View style={{
        flexDirection: "row",
        margin: 15, 
        alignItems: "center", 
        justifyContent: "space-around", 
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 8,
        backgroundColor: 'white'
      }}>
        <Octicons name="three-bars" size={30} color="grey" />
        <Image resizeMode="center" style={{ marginLeft: 10, height: 25, width: 25 }} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" }} />

        <TextInput style={{ marginLeft: -10, fontSize: 15 }} placeholder="Search in emails" />
        <Image resizeMode="center" style={{ marginLeft: 25, height: 50, width: 50, borderRadius: 5 }} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YN6c1eYF2UHcOt3x6xyubxJkmwdMCsREgDIn5CcxP2mkgf-xQsQVQBaYYlelEBWwcyk&usqp=CAU" }} />

      </View>

      <Text style={{ marginLeft: 15, color: "grey", fontWeight: "bold" }}>PRIMARY</Text>

      <ScrollView>

        <EmailCard title="Harish Is Here" type="bold" date="12 jun" subtitle="I am software engineer" desc="" letter="H" color="#0097e6" />
        <EmailCard title="React-Native" type="bold" date="11 jun" subtitle="Here you learn web app" desc="" letter="R" color="#e84118" />
        <EmailCard title="ReactJs" type="bold" date="10 jun" subtitle="How to make an web app in reactjs" desc="" letter="R" color="#273c75" />
        <EmailCard title="Android" subtitle="How to work in android studio" date="08 jun" desc="" letter="A" color="#8e44ad" />
        <EmailCard title="Flutter" subtitle="Flutter is Best ?" date="07 jun" desc="" letter="F" color="#f6b93b" />
        <EmailCard title="Like Ans Share" subtitle="Need your Support" date="05 jun" desc="" letter="L" color="#1dd1a1" />
        <EmailCard title="Database" subtitle="What is Database ?" desc="" date="04 jun" letter="D" color="blue" />
        <EmailCard title="Database" subtitle="What is Database ?" desc="" date="04 jun" letter="D" color="blue" />
        <EmailCard title="Database" subtitle="What is Database ?" desc="" date="04 jun" letter="D" color="blue" />
        <EmailCard title="Database" subtitle="What is Database ?" desc="" date="04 jun" letter="D" color="blue" />
        <EmailCard title="Database" subtitle="What is Database ?" desc="" date="04 jun" letter="D" color="blue" />

      </ScrollView>



    </View>
  );
}

function MeetScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", flexDirection: "column", backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center" }}>Hello Developers</Text>
    </View>
  );
}










const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator


        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Mail') {
              iconName = focused
                ? 'mail'
                : 'mail-outline';
            } else if (route.name === 'Meet') {
              iconName = focused ? 'videocam' : 'videocam-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={26} color={color} />;
          },

        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',

          labelStyle: {
            marginTop: -10,
            marginBottom: 5,
            fontSize: 14,

          },
          style: {
            height: 58,
            borderTopColor: "#fff",

          },
        }

        }

      >


        <Tab.Screen name="Mail" component={MailScreen} options={{ tabBarBadge: "99+", headerShown: false}} />
        <Tab.Screen name="Meet" component={MeetScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}