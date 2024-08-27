import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contacts from './src/screens/Contacts';
import AddContacts from './src/screens/AddContacts';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts}
        options={{title: "Contatos"}}  />
        <Stack.Screen name="AddContacts" component={AddContacts}
        options={{title: "Novo Contato"}}  />
      </Stack.Navigator>
   </NavigationContainer> 
  );
}