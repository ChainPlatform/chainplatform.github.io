import { Component, createRef } from 'react';
import { View, Pressable, ScrollView, StatusBar, TextInput, Text } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import colors from '../configs/colors';
import styles from '../configs/styles';
import AddSVG from '../icons/AddSVG';
import TrashSVG from '../icons/TrashSVG';
import datas from './datas';

export default class Insert extends Component {

    constructor(props) {
        super(props);

        this.state = {
            primary_color: colors.C0B8494,
            data_list: datas.data_list
        }
        this.main_scroll_view = createRef(null);
    }

    setTitle() {
        this.props.navigation.setOptions({
            headerLeft: null,
            title: this.getTitle()
        });
    }

    getTitle() {
        return "Thêm dữ liệu";
    }

    componentDidMount() {
        this.setTitle();
        if (this.props.route.params != null && typeof this.props.route.params.datas != "undefined") {
            this.setState({ data_list: this.props.route.params.datas });
        }
    }

    setTarget(data_list, index) {
        let state_data_list = this.state.data_list;
        state_data_list[index] = data_list;
        this.setState({ data_list: state_data_list });
    }

    removeTarget(index) {
        let data_list = this.state.data_list;
        let arrayWithoutH = [];
        if (data_list && typeof data_list == "object" && data_list.length > 0) {
            for (let i = 0; i < data_list.length; i++) {
                if (index !== i) {
                    arrayWithoutH.push(data_list[i]);
                }
            }
        }
        this.setState({ data_list: arrayWithoutH });
    }

    addNewTarget() {
        let data_list = this.state.data_list;
        if (typeof data_list != "object") {
            data_list = [""];
        } else {
            data_list.push("");
        }
        this.setState({ data_list: data_list });
    }

    render() {
        return (
            <View style={[{ flex: 1, backgroundColor: colors.white }]}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <ScrollView
                    ref={this.main_scroll_view}
                    testID={"main_scroll_view"}
                    style={{
                        flexGrow: 1,
                        flexBasis: 0,
                        padding: styles.fs15
                    }}
                    scrollEventThrottle={16}
                    overScrollMode="never"
                    scrollEnabled={true}
                    bounces={false}
                    horizontal={false}
                    alwaysBounceHorizontal={false}
                    alwaysBounceVertical={false}>
                    {
                        this.state.data_list != null && this.state.data_list.length > 0 ?
                            this.state.data_list.map((item, index) => (
                                <View key={"data_list_" + index} style={[{ padding: styles.fs7_5 }, index != 0 ? { paddingTop: styles.s0 } : {}]}>
                                    <View style={{ flexDirection: styles.flexRow }}>
                                        <TextInput
                                            style={[styles.textInput, {
                                                marginLeft: styles.s0,
                                                marginRight: styles.s0,
                                                padding: styles.fs11_5,
                                                borderWidth: styles.s1_5,
                                                borderRightWidth: styles.s0,
                                                fontSize: styles.fs14,
                                                borderTopRightRadius: styles.s0,
                                                borderBottomRightRadius: styles.s0,
                                                borderColor: this.state.primary_color,
                                                flexGrow: 1
                                            }]}
                                            placeholder={"Nhập giá trị"}
                                            autoCorrect={false}
                                            autoCapitalize={'none'}
                                            autoComplete={false}
                                            autoFocus={false}
                                            enterKeyHint="done"
                                            placeholderTextColor={colors.cl33333380}
                                            underlineColorAndroid="transparent"
                                            value={item}
                                            onChangeText={data_list => this.setTarget(data_list, index)}
                                            maxLength={255}
                                        />
                                        <Pressable style={{
                                            flexDirection: styles.flexCol,
                                            backgroundColor: index == 0 ? this.state.primary_color : colors.red_product,
                                            borderRadius: styles.s5,
                                            borderTopLeftRadius: styles.s0,
                                            borderBottomLeftRadius: styles.s0,
                                            textAlign: styles.center,
                                            justifyContent: styles.center,
                                            padding: styles.s6,
                                            paddingLeft: styles.fs9_5,
                                            paddingRight: styles.fs9_5,
                                            alignItems: styles.center
                                        }} onPress={() => { index == 0 ? this.addNewTarget() : this.removeTarget(index); }}>
                                            {
                                                index == 0 ?
                                                    <AddSVG width={styles.fs22} color={colors.white} />
                                                    : <TrashSVG width={styles.fs22} color={colors.white} />
                                            }
                                        </Pressable>
                                    </View>
                                </View>
                            )) : null
                    }
                    <View style={{ padding: styles.fs7_5 }}>
                        <Pressable style={{
                            padding: styles.fs15,
                            paddingTop: styles.fs10,
                            paddingBottom: styles.fs10,
                            backgroundColor: colors.C0B8494,
                            alignItems: styles.center,
                            justifyContent: styles.center,
                            borderRadius: styles.s5,
                            width: styles.s120
                        }} onPress={() => {
                            let data_list = this.state.data_list;
                            let arrayWithoutH = [];
                            if (data_list && typeof data_list == "object" && data_list.length > 0) {
                                for (let i = 0; i < data_list.length; i++) {
                                    if (data_list[i] != "") {
                                        arrayWithoutH.push(data_list[i]);
                                    }
                                }
                            }
                            this.setState({ data_list: arrayWithoutH });
                            EventRegister.emit('HandleDatasEvent', arrayWithoutH);
                            this.props.navigation.pop();
                        }}>
                            <Text style={[styles.label, { margin: styles.s0, fontSize: styles.fs14, color: colors.white }]}>
                                {"Hoàn thành"}
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        );
    }
}