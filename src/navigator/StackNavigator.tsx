import { createStackNavigator } from '@react-navigation/stack';
import { InicioScreen } from '../screens/InicioScreen';
import { DivisionScreen } from '../screens/DivisionScreen';

export type RootStackParams = {
    InicioScreen: undefined;
    DivisionScreen: undefined;
}

const Stack = createStackNavigator <RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#F5EEE6' } }}>
      <Stack.Screen name="InicioScreen" options={{ title: 'Inicio' }} component={InicioScreen} />
      <Stack.Screen name="DivisionScreen" options={{ title: 'Operaciones' }} component={DivisionScreen} />
    </Stack.Navigator>
  );
}