import React from 'react';
import { View, Pressable, ScrollView, StatusBar, Text, TextInput, Modal } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import colors from '../configs/colors';
import styles from '../configs/styles';
import datas from './datas';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            refreshing: false,
            primary_color: colors.C125B9A,
            data_list: datas.data_list,
            keywork: "",
            result_list: null,
            search_keywork: "",
            modalVisible: false
        }
        this.main_scroll_view = React.createRef(null);
        this.sub_scroll_view = React.createRef(null);
    }

    setTitle() {
        this.props.navigation.setOptions({
            title: this.getTitle()
        });
    }

    getTitle() {
        return "Thuật toán tìm kiếm tuần tự";
    }

    UNSAFE_componentWillMount() {
        this.HandleDatasEvent = EventRegister.addEventListener('HandleDatasEvent', datas => {
            this.setState({ data_list: datas, result_list: null, keywork: "", search_keywork: "" });
        });
    }

    componentWillUnmount() {
        EventRegister.removeEventListener(this.HandleDatasEvent);
    }

    componentDidMount() {
        this.setTitle();
    }

    onSearch() {
        if (this.state.keywork == "") {
            this.setState({ modalVisible: true });
            return;
        }
        this.setState({ search_keywork: this.state.keywork });
        let data_list = this.state.data_list;
        let result_list = [];
        if (data_list && typeof data_list == "object" && data_list.length > 0) {
            for (let i = 0; i < data_list.length; i++) {
                const data = data_list[i];
                let result = {};
                result.step = i + 1;
                result.object = data;
                result.found = data == this.state.keywork ? true : false;
                result.endoflist = data_list.length - 1 == i ? true : false;
                let tmp = data == this.state.keywork ? data : "";
                if (data_list.length - 1 == i) {
                    if (data != this.state.keywork) {
                        tmp = "Không có dữ liệu đúng";
                    }
                }
                result.result = tmp;
                result_list.push(result);
                if (result.found) {
                    break;
                }
            }
        }
        this.setState({ result_list: result_list });
    }

    render() {
        return (
            <View style={[{ flex: 1, backgroundColor: colors.C125B9A }]}>
                <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
                <ScrollView
                    ref={this.main_scroll_view}
                    testID={"main_scroll_view"}
                    style={{
                        flexGrow: 1,
                        flexBasis: 0,
                        padding: styles.fs7_5
                    }}
                    scrollEventThrottle={16}
                    overScrollMode="never"
                    scrollEnabled={true}
                    bounces={false}
                    horizontal={false}
                    alwaysBounceHorizontal={false}
                    alwaysBounceVertical={false}
                >
                    <View style={{
                        marginBottom: styles.fs7_5,
                        marginTop: styles.fs15,
                        padding: styles.fs15,
                        paddingTop: styles.fs10,
                        paddingBottom: styles.fs10,
                        alignItems: styles.center,
                        justifyContent: styles.center,
                        borderRadius: styles.s5,
                        flexGrow: 1
                    }}>
                        <Text style={[styles.label, {
                            margin: styles.s0,
                            fontSize: styles.fs20,
                            fontWeight: styles.fw600,
                            color: colors.white,
                            textTransform: styles.uppercase,
                            lineHeight: styles.w150pc,
                            textAlign: styles.center
                        }]}>
                            {"Mô phỏng thuật toán tìm kiếm tuần tự"}
                        </Text>
                    </View>
                    <View style={{
                        padding: styles.fs7_5,
                        marginBottom: styles.fs7_5,
                        marginTop: styles.fs15,
                        flexDirection: styles.flexRow,
                        flexWrap: styles.flexWrap
                    }}>
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
                            this.props.navigation.navigate("Insert", { datas: this.state.data_list });
                        }}>
                            <Text style={[styles.label, { margin: styles.s0, fontSize: styles.fs14, color: colors.white }]}>
                                {"Thêm dữ liệu"}
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{
                        padding: styles.fs7_5,
                        flexDirection: styles.flexRow,
                        flexWrap: styles.flexWrap
                    }}>
                        <View style={{
                            padding: styles.fs15,
                            backgroundColor: colors.C0B8494,
                            alignItems: styles.center,
                            justifyContent: styles.center,
                            flexGrow: 1,
                            borderRadius: styles.fs10,
                            borderTopRightRadius: styles.s0,
                            borderBottomRightRadius: styles.s0,
                        }}>
                            <TextInput
                                style={[styles.textInput, {
                                    marginLeft: styles.s0,
                                    marginRight: styles.s0,
                                    fontSize: styles.fs14,
                                    height: styles.s40,
                                    borderColor: colors.white,
                                    color: colors.white,
                                    width: styles.w100pc
                                }]}
                                placeholder={"Nhập giá trị muốn tìm"}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                autoComplete={false}
                                autoFocus={false}
                                enterKeyHint="done"
                                placeholderTextColor={colors.grey}
                                underlineColorAndroid="transparent"
                                value={this.state.keywork}
                                onChangeText={keywork => this.setState({ keywork: keywork, result_list: null, search_keywork: "" })}
                                maxLength={100}
                            />
                        </View>
                        <Pressable style={{
                            padding: styles.fs15,
                            paddingTop: styles.fs10,
                            paddingLeft: styles.s0,
                            paddingBottom: styles.fs10,
                            backgroundColor: colors.C0B8494,
                            alignItems: styles.center,
                            justifyContent: styles.center,
                            borderRadius: styles.fs10,
                            borderTopLeftRadius: styles.s0,
                            borderBottomLeftRadius: styles.s0,
                        }} onPress={() => { this.onSearch(); }}>
                            <Text style={[styles.label, { margin: styles.s0, fontSize: styles.fs14, color: colors.white }]}>
                                {"Thực hiện"}
                            </Text>
                        </Pressable>
                    </View>
                    <View style={{
                        marginBottom: styles.fs7_5,
                        marginTop: styles.fs7_5,
                        flexDirection: styles.flexRow,
                        flexWrap: styles.flexWrap,
                        justifyContent: styles.spaceBetween
                    }}>
                        <View style={{
                            margin: styles.fs7_5,
                            marginBottom: styles.s0,
                            borderRadius: styles.fs10,
                            overflow: styles.hidden,
                            backgroundColor: colors.C0B8494,
                            flexGrow: 1,
                            maxWidth: styles.s345
                        }}>
                            <View style={[{
                                backgroundColor: colors.C7469B6,
                                padding: styles.fs12,
                                borderBottomWidth: styles.s0_5,
                                borderColor: colors.C125B9A
                            }]}>
                                <Text style={[styles.label, { margin: styles.s0, fontSize: styles.fs14, color: colors.white }]}>
                                    {"Dữ liệu"}
                                </Text>
                            </View>
                            {
                                this.state.data_list != null && this.state.data_list.length > 0 ?
                                    this.state.data_list.map((item, index) => (
                                        <View key={"item_" + index} style={{
                                            backgroundColor: colors.C0B8494,
                                            padding: styles.fs11,
                                            flexDirection: styles.flexRow,
                                            borderBottomWidth: styles.s0_5,
                                            borderColor: colors.C125B9A,
                                        }}>
                                            <View style={{
                                                width: styles.fs20,
                                                borderRightWidth: styles.s0_5,
                                                borderColor: colors.C125B9A,
                                            }}>
                                                <Text style={[styles.label, { margin: styles.s0, fontWeight: styles.fwNormal, fontSize: styles.fs14, color: colors.white }]}>
                                                    {index + 1}
                                                </Text>
                                            </View>
                                            <View style={{ marginLeft: styles.fs10 }}>
                                                <Text style={[styles.label, { margin: styles.s0, fontWeight: styles.fwNormal, fontSize: styles.fs14, color: colors.white }]}>
                                                    {item}
                                                </Text>
                                            </View>
                                        </View>
                                    )) : null
                            }
                        </View>

                        <View style={{
                            margin: styles.fs7_5,
                            marginBottom: styles.s0,
                            borderRadius: styles.fs10,
                            overflow: styles.hidden,
                            backgroundColor: colors.C0D9276,
                            flexGrow: 1
                        }}>
                            <View style={{
                                backgroundColor: colors.C7469B6,
                                padding: styles.fs12,
                                flexDirection: styles.flexRow,
                                borderBottomWidth: styles.s0_5,
                                borderColor: colors.C125B9A,
                            }}>
                                <Text style={[styles.label, {
                                    margin: styles.s0,
                                    marginLeft: styles.fs10,
                                    fontSize: styles.fs14,
                                    color: colors.white
                                }]}>
                                    {"Kết quả"} {this.state.search_keywork != "" ? "[ " + this.state.search_keywork + " ]" : ""}
                                </Text>
                            </View>
                            <View style={{
                                backgroundColor: colors.C7469B6,
                                padding: styles.fs12,
                                flexDirection: styles.flexRow,
                                borderBottomWidth: styles.s0_5,
                                borderColor: colors.C125B9A,
                            }}>
                                <View style={{
                                    width: styles.s60,
                                    width: "10%",
                                    maxWidth: "10%",
                                    borderRightWidth: styles.s0_5,
                                    borderColor: colors.C125B9A,
                                }}>
                                    <Text style={[styles.label, {
                                        margin: styles.s0,
                                        marginLeft: styles.fs10,
                                        marginRight: styles.fs10,
                                        fontSize: styles.fs14,
                                        color: colors.white
                                    }]}>
                                        {"Lần lặp"}
                                    </Text>
                                </View>
                                <View style={{
                                    width: styles.fs20,
                                    borderRightWidth: styles.s0_5,
                                    borderColor: colors.C125B9A,
                                    width: "20%",
                                    maxWidth: "20%",
                                    flexGrow: 1
                                }}>
                                    <Text style={[styles.label, {
                                        margin: styles.s0,
                                        marginLeft: styles.fs10,
                                        marginRight: styles.fs10,
                                        fontSize: styles.fs14,
                                        color: colors.white
                                    }]}>
                                        {"Dữ liệu"}
                                    </Text>
                                </View>
                                <View style={{
                                    width: styles.fs20,
                                    borderRightWidth: styles.s0_5,
                                    borderColor: colors.C125B9A,
                                    width: "25%",
                                    maxWidth: "25%",
                                    flexGrow: 1
                                }}>
                                    <Text style={[styles.label, {
                                        margin: styles.s0,
                                        marginLeft: styles.fs10,
                                        marginRight: styles.fs10,
                                        fontSize: styles.fs14,
                                        color: colors.white
                                    }]}>
                                        {"Có đúng dữ liệu cần tìm không?"}
                                    </Text>
                                </View>
                                <View style={{
                                    marginLeft: styles.fs10,
                                    borderRightWidth: styles.s0_5,
                                    borderColor: colors.C125B9A,
                                    flexGrow: 1,
                                    width: "25%",
                                    maxWidth: "25%",
                                }}>
                                    <Text style={[styles.label, {
                                        margin: styles.s0,
                                        marginLeft: styles.fs10,
                                        marginRight: styles.fs10,
                                        fontSize: styles.fs14,
                                        color: colors.white
                                    }]}>
                                        {"Có đúng là đã hết danh sách không?"}
                                    </Text>
                                </View>
                                <View style={{
                                    marginLeft: styles.fs10,
                                    flexGrow: 1,
                                    width: "20%",
                                    maxWidth: "20%",
                                }}>
                                    <Text style={[styles.label, {
                                        margin: styles.s0,
                                        marginLeft: styles.fs10,
                                        marginRight: styles.fs10,
                                        fontSize: styles.fs14,
                                        color: colors.white
                                    }]}>
                                        {"Đầu ra"}
                                    </Text>
                                </View>
                            </View>
                            {
                                this.state.result_list != null && this.state.result_list.length > 0 ?
                                    this.state.result_list.map((result_item, index) => (
                                        <View style={{
                                            backgroundColor: result_item.found ? colors.CF05A7E : colors.C0D9276,
                                            padding: styles.fs11,
                                            flexDirection: styles.flexRow,
                                            borderBottomWidth: styles.s0_5,
                                            borderColor: colors.C125B9A,
                                        }}>
                                            <View style={{
                                                width: styles.s60,
                                                width: "10%",
                                                maxWidth: "10%",
                                                borderRightWidth: styles.s0_5,
                                                borderColor: colors.C125B9A,
                                            }}>
                                                <Text style={[styles.label, {
                                                    margin: styles.s0,
                                                    marginRight: styles.fs10,
                                                    marginLeft: styles.fs10,
                                                    fontWeight: styles.fwNormal,
                                                    fontSize: styles.fs14,
                                                    color: colors.white
                                                }]}>
                                                    {result_item.step}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: styles.fs20,
                                                borderRightWidth: styles.s0_5,
                                                borderColor: colors.C125B9A,
                                                width: "20%",
                                                maxWidth: "20%",
                                                flexGrow: 1
                                            }}>
                                                <Text style={[styles.label, {
                                                    margin: styles.s0,
                                                    marginRight: styles.fs10,
                                                    marginLeft: styles.fs10,
                                                    fontWeight: styles.fwNormal,
                                                    fontSize: styles.fs14,
                                                    color: colors.white
                                                }]}>
                                                    {result_item.object}
                                                </Text>
                                            </View>
                                            <View style={{
                                                width: styles.fs20,
                                                borderRightWidth: styles.s0_5,
                                                borderColor: colors.C125B9A,
                                                width: "25%",
                                                maxWidth: "25%",
                                                flexGrow: 1
                                            }}>
                                                <Text style={[styles.label, {
                                                    margin: styles.s0,
                                                    marginLeft: styles.fs10,
                                                    marginRight: styles.fs10,
                                                    fontWeight: styles.fwNormal,
                                                    fontSize: styles.fs14,
                                                    color: colors.white
                                                }]}>
                                                    {result_item.found ? "Đúng" : "Sai"}
                                                </Text>
                                            </View>
                                            <View style={{
                                                marginLeft: styles.fs10,
                                                borderRightWidth: styles.s0_5,
                                                borderColor: colors.C125B9A,
                                                flexGrow: 1,
                                                width: "25%",
                                                maxWidth: "25%",
                                            }}>
                                                <Text style={[styles.label, {
                                                    margin: styles.s0,
                                                    marginLeft: styles.fs10,
                                                    marginRight: styles.fs10,
                                                    fontWeight: styles.fwNormal,
                                                    fontSize: styles.fs14,
                                                    color: colors.white
                                                }]}>
                                                    {result_item.endoflist ? "Đúng" : "Sai"}
                                                </Text>
                                            </View>
                                            <View style={{
                                                marginLeft: styles.fs10,
                                                flexGrow: 1,
                                                width: "20%",
                                                maxWidth: "20%",
                                            }}>
                                                <Text style={[styles.label, {
                                                    margin: styles.s0,
                                                    marginLeft: styles.fs10,
                                                    marginRight: styles.fs10,
                                                    fontWeight: styles.fwNormal,
                                                    fontSize: styles.fs14,
                                                    color: colors.white
                                                }]}>
                                                    {result_item.result}
                                                </Text>
                                            </View>
                                        </View>
                                    )) : null
                            }
                        </View>
                    </View>
                    {this.renderModal()}
                </ScrollView>
            </View>
        );
    }

    renderModal() {
        return (<Modal animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.setState({ modalVisible: false }); }}>
            <Pressable onPress={() => { this.setState({ modalVisible: false }); }}
                style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: styles.center }}>
                <Pressable style={{
                    backgroundColor: colors.white,
                    alignSelf: styles.center,
                    overflow: styles.hidden,
                    padding: styles.s0,
                    justifyContent: styles.center,
                    padding: styles.fs15,
                    borderRadius: styles.fs10,
                    width: styles.w92pc,
                    maxWidth: styles.s460
                }}>
                    <View style={{ padding: styles.fs10, flexGrow: 1, width: styles.w100pc, textAlign: styles.center }}>
                        <Text style={{ textAlign: styles.center, fontSize: styles.fs15, fontWeight: styles.fwBold }}>
                            {"Mời bạn nhập giá trị muốn tìm"}
                        </Text>
                    </View>
                    <View style={{
                        marginTop: styles.s30,
                        flexGrow: 1,
                        flexDirection: styles.flexRow,
                        width: styles.w100pc,
                        justifyContent: styles.center,
                    }}>
                        <Pressable style={{
                            flexDirection: styles.flexCol,
                            backgroundColor: colors.red_product,
                            borderRadius: styles.s5,
                            borderWidth: styles.s1,
                            borderColor: colors.red_product,
                            width: styles.s100,
                            textAlign: styles.center
                        }}
                            onPress={() => {
                                this.setState({ modalVisible: false });
                            }}>
                            <Text style={{
                                padding: styles.fs10_5,
                                paddingLeft: styles.fs12,
                                paddingRight: styles.fs12,
                                fontSize: styles.fs13,
                                color: colors.white,
                                textAlign: styles.center,
                                fontWeight: styles.fw500
                            }}>
                                {"Đóng"}
                            </Text>
                        </Pressable>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>);
    }
}