import { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import colors from '../configs/colors';
import styles from '../configs/styles';
import Home from './Home';
import Insert from './Insert';

class MainNavigator extends Component {
    constructor() {
        super();

        this.state = {
            user_info: null,
            site_infos: null,
            user_language: null,
            format_language: null,
            primary_color: colors.C125B9A,
        };
    }

    render() {
        const MainStack = createStackNavigator();
        return (
            <MainStack.Navigator>
                <MainStack.Screen options={{
                    headerShown: false,
                    headerTintColor: this.state.primary_color,
                    headerTitleStyle: { fontSize: styles.fs14 },
                    headerStyle: [{ backgroundColor: colors.white }]
                }} name="Home" component={Home} />
                <MainStack.Group screenOptions={{
                    presentation: 'modal',
                    animationEnabled: true,
                    gestureEnabled: false,
                    headerShown: true,
                    headerTintColor: this.state.primary_color,
                    headerTitleStyle: { fontSize: styles.fs14 },
                    headerStyle: [{ backgroundColor: colors.white }],
                    gestureDirection: 'horizontal',
                    cardStyleInterpolator: ({ current, layouts }) => {
                        return {
                            cardStyle: {
                                transform: [
                                    {
                                        translateX: current.progress.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [layouts.screen.width, 0],
                                        }),
                                    },
                                ],
                            },
                        };
                    },
                }}>
                    <MainStack.Screen name="Insert" component={Insert} />
                </MainStack.Group>
            </MainStack.Navigator>
        );
    }
}
export default MainNavigator;