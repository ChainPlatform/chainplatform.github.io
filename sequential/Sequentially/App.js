import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import colors from './configs/colors';
import MainNavigator from './Sequentially/MainNavigator';

class App extends Component {
    constructor() {
        super();

        this.state = {
            spinnerVisible: true,
            animation: 'none',
            user_language: null,
            format_language: null,
            primary_color: colors.C125B9A,
            site_infos: null,
            user_info: null,
            overlayColor: colors.white
        };
    }

    UNSAFE_componentWillMount() {

    }

    async componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        const RootStack = createStackNavigator();
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                    <NavigationContainer>
                        <RootStack.Navigator>
                            <RootStack.Screen name="apps" component={MainNavigator} options={{
                                headerTintColor: this.state.primary_color,
                                headerShown: false,
                                headerStyle: { backgroundColor: colors.white }
                            }} />
                        </RootStack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </SafeAreaProvider>
        );
    }
}

export default App;