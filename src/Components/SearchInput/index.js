import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Animated,
  Dimensions,
  Keyboard,
  Image,
  View,
  ViewPropTypes
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);
const containerHeight = 40;
const middleHeight = 20;

class SearchInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            expanded: false
        };
        const { width } = Dimensions.get('window');
        this.contentWidth = width;
        this.middleWidth = width / 2;

        /**
         * Animated values
         */
        this.iconSearchAnimated = new Animated.Value(this.middleWidth - this.props.searchIconCollapsedMargin);
        this.iconDeleteAnimated = new Animated.Value(0);
        this.inputFocusWidthAnimated = new Animated.Value(this.contentWidth - 10);
        this.inputFocusPlaceholderAnimated = new Animated.Value(this.middleWidth - this.props.placeholderCollapsedMargin);
        this.btnCancelAnimated = new Animated.Value(this.contentWidth);

        /**
         * functions
         */
        this.onFocus = this.onFocus.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.focus = this.focus.bind(this);
        this.expandAnimation = this.expandAnimation.bind(this);
        this.collapseAnimation = this.collapseAnimation.bind(this);
        this.onLayout = this.onLayout.bind(this);

        /**
         * local variables
         */
        this.placeholder = this.props.placeholder || 'Search';
        this.cancelTitle = this.props.cancelTitle || 'Cancel';

        /**
         * Shadow
         */
        this.shadowOpacityAnimated = new Animated.Value(this.props.shadowOpacityCollapsed);
        this.shadowHeight = this.props.shadowOffsetHeightCollapsed;
    }

    onLayout = (event) => {
        const contentWidth = event.nativeEvent.layout.width;
        this.contentWidth = contentWidth;
        this.middleWidth = contentWidth / 2;
    }

    /**
     * onSearch
     * async await
     */
    onSearch = async () => {
        this.props.beforeSearch && await this.props.beforeSearch(this.state.keyword);
        if ( this.props.keyboardShouldPersist === false ) {
            await Keyboard.dismiss();
        }
        this.props.onSearch && await this.props.onSearch(this.state.keyword);
        this.props.afterSearch && await this.props.afterSearch(this.state.keyword);
    }

    /**
     * onChangeText
     * async await
     */
    onChangeText = async (text) => {
        await this.setState({ keyword: text });
        await new Promise((resolve, reject) => {
            Animated.timing(
                this.iconDeleteAnimated,
                {
                    toValue: (text.length > 0) ? 1 : 0,
                    duration: 200
                }
            ).start(() => resolve());
        });
        this.props.onChangeText && await this.props.onChangeText(this.state.keyword);
    }

    /**
     * onFocus
     * async await
     */
    onFocus = async () => {
        this.props.beforeFocus && await this.props.beforeFocus();
        this.refs.input_keyword._component.isFocused && await this.refs.input_keyword._component.focus();
        await this.setState(prevState => {
            return { expanded: !prevState.expanded };
        });
        await this.expandAnimation();
        this.props.onFocus && await this.props.onFocus(this.state.keyword);
        this.props.afterFocus && await this.props.afterFocus();
    }

    /**
     * focus
     * async await
     */
    focus = async (text = '') => {
        await this.setState({ keyword: text });
        await this.refs.input_keyword._component.focus();
    }

    /**
     * onDelete
     * async await
     */
    onDelete = async () => {
        this.props.beforeDelete && await this.props.beforeDelete();
        await new Promise((resolve, reject) => {
            Animated.timing(
                this.iconDeleteAnimated,
                {
                    toValue: 0,
                    duration: 200
                }
            ).start(() => resolve());
        });
        await this.setState({ keyword: '' });
        this.props.onDelete && await this.props.onDelete();
        this.props.afterDelete && await this.props.afterDelete();
    }

    /**
     * onCancel
     * async await
     */
    onCancel = async () => {
        this.props.beforeCancel && await this.props.beforeCancel();
        await this.setState({ keyword: '' });
        await this.setState(prevState => {
            return { expanded: !prevState.expanded };
        });
        await this.collapseAnimation( true );
        this.props.onCancel && await this.props.onCancel();
        this.props.afterCancel && await this.props.afterCancel();
    }

    expandAnimation = () => {
        return new Promise((resolve, reject) => {
            Animated.parallel([
                Animated.timing(
                    this.inputFocusWidthAnimated,
                    {
                        toValue: this.contentWidth - 70,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.btnCancelAnimated,
                    {
                        toValue: 10,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.inputFocusPlaceholderAnimated,
                    {
                        toValue: this.props.placeholderExpandedMargin,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.iconSearchAnimated,
                    {
                        toValue: this.props.searchIconExpandedMargin,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.iconDeleteAnimated,
                    {
                        toValue: (this.state.keyword.length > 0) ? 1 : 0,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.shadowOpacityAnimated,
                    {
                        toValue: this.props.shadowOpacityExpanded,
                        duration: 200
                    }
                ).start(),
            ]);
            this.shadowHeight = this.props.shadowOffsetHeightExpanded;
            resolve();
        });
    }

    collapseAnimation = ( isForceAnim = false ) => {
        return new Promise((resolve, reject) => {
            Animated.parallel([
                ( ( this.props.keyboardShouldPersist === false ) ? Keyboard.dismiss() : null ),
                Animated.timing(
                    this.inputFocusWidthAnimated,
                    {
                        toValue: this.contentWidth - 10,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.btnCancelAnimated,
                    {
                        toValue: this.contentWidth,
                        duration: 200
                    }
                ).start(),
                ( ( this.props.keyboardShouldPersist === false ) ?
                Animated.timing(
                    this.inputFocusPlaceholderAnimated,
                    {
                        toValue: this.middleWidth - this.props.placeholderCollapsedMargin,
                        duration: 200
                    }
                ).start() : null ),
                ( ( this.props.keyboardShouldPersist === false || isForceAnim === true ) ?
                Animated.timing(
                    this.iconSearchAnimated,
                    {
                        toValue: this.middleWidth - this.props.searchIconCollapsedMargin,
                        duration: 200
                    }
                ).start() : null ),
                Animated.timing(
                    this.iconDeleteAnimated,
                    {
                        toValue: 0,
                        duration: 200
                    }
                ).start(),
                Animated.timing(
                    this.shadowOpacityAnimated,
                    {
                        toValue: this.props.shadowOpacityCollapsed,
                        duration: 200
                    }
                ).start(),
            ]);
            this.shadowHeight = this.props.shadowOffsetHeightCollapsed;
            resolve();
        });
    }

    render() {
        return (
            <Animated.View
                ref="searchContainer"
                style={
                    [
                        styles.container,
                        this.props.backgroundColor && { backgroundColor: this.props.backgroundColor }
                    ]}
            >
                <AnimatedTextInput
                    ref="input_keyword"
                    style={[
                        styles.input,
                        this.props.placeholderTextColor && { color: this.props.placeholderTextColor },
                        this.props.inputStyle && this.props.inputStyle,
                        this.props.inputHeight && { height: this.props.inputHeight },
                        this.props.inputBorderRadius && { borderRadius: this.props.inputBorderRadius },
                        {
                            width: this.inputFocusWidthAnimated,
                            paddingLeft: this.inputFocusPlaceholderAnimated
                        },
                        this.props.shadowVisible && {
                            shadowOffset: { width: this.props.shadowOffsetWidth, height: this.shadowHeight },
                            shadowColor: this.props.shadowColor,
                            shadowOpacity: this.shadowOpacityAnimated,
                            shadowRadius: this.props.shadowRadius,
                        },

                    ]}
                    editable={this.props.editable}
                    value={this.state.keyword}
                    onChangeText={this.onChangeText}
                    placeholder={this.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor || styles.placeholderColor}
                    onSubmitEditing={this.onSearch}
                    autoCorrect={false}
                    blurOnSubmit={this.props.blurOnSubmit}
                    returnKeyType={this.props.returnKeyType || 'search'}
                    keyboardType={this.props.keyboardType || 'default'}
                    autoCapitalize={this.props.autoCapitalize}
                    onFocus={this.onFocus}
                    underlineColorAndroid='transparent'
                />
                <TouchableWithoutFeedback onPress={this.onFocus}>
                    {((this.props.iconSearch) ?
                        <Animated.View
                            style={[
                                styles.iconSearch,
                                {left: this.iconSearchAnimated}
                            ]}>
                            {this.props.iconSearch}
                        </Animated.View>
                        :
                        <Animated.View
                          style={[
                            styles.iconSearch,
                            styles.iconSearchDefault,
                            this.props.tintColorSearch && { tintColor: this.props.tintColorSearch },
                            {
                                left: this.iconSearchAnimated,
                            }
                        ]}>
                            <Icon name="search-circle-outline" size={10} color="#4F8EF7" />
                        </Animated.View>
                    )}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.onDelete}>
                    {((this.props.iconDelete) ?
                        <Animated.View
                            style={[
                                styles.iconDelete,
                                this.props.positionRightDelete && { right: this.props.positionRightDelete },
                                { opacity: this.iconDeleteAnimated }
                            ]}>
                            {this.props.iconDelete}
                        </Animated.View>
                        :
                        <Animated.View
                          style={[
                            styles.iconDelete,
                            styles.iconDeleteDefault,
                            this.props.tintColorDelete && { tintColor: this.props.tintColorDelete },
                            this.props.positionRightDelete && { right: this.props.positionRightDelete },
                            { opacity: this.iconDeleteAnimated }
                        ]}>
                          <Icon name="close-circle-outline" size={10} color="#4F8EF7" />
                        </Animated.View>
                    )}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={this.onCancel}>
                    <Animated.View
                        style={[
                            styles.cancelButton,
                            this.props.cancelButtonStyle && this.props.cancelButtonStyle,
                            { left: this.btnCancelAnimated }
                        ]}
                    >
                        <Text style={[
                                  styles.cancelButtonText,
                                  this.props.titleCancelColor && { color: this.props.titleCancelColor },
                                  this.props.cancelButtonStyle && this.props.cancelButtonStyle
                              ]}>
                            {this.cancelTitle}
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </Animated.View>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'grey',
        height: containerHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 5,
    },
    input: {
        height: containerHeight - 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 20,
        borderColor: '#444',
        backgroundColor: '#f7f7f7',
        borderRadius: 5,
        fontSize: 13,
    },
    placeholderColor: 'grey',
    iconSearch: {
        flex: 1,
        position: 'absolute',
        top: middleHeight - 7,
        height: 14,
        width: 14,
    },
    iconSearchDefault: {
        tintColor: 'grey',
    },
    iconDelete: {
        position: 'absolute',
        right: 70,
        top: middleHeight - 7,
        height: 14,
        width: 14,
    },
    iconDeleteDefault: {
        tintColor: 'grey',
    },
    cancelButton: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        width: 60,
        height: 50,
    },
    cancelButtonText: {
        fontSize: 14,
        color: '#fff'
    }
};
/**
 * Props
 */
SearchInput.propTypes = {
    /**
     * onFocus
     * return a Promise
     * beforeFocus, onFocus, afterFocus
     */
    beforeFocus: PropTypes.func,
    onFocus: PropTypes.func,
    afterFocus: PropTypes.func,

    /**
     * onSearch
     * return a Promise
     */
    beforeSearch: PropTypes.func,
    onSearch: PropTypes.func,
    afterSearch: PropTypes.func,

    /**
     * onChangeText
     * return a Promise
     */
    onChangeText: PropTypes.func,

    /**
     * onCancel
     * return a Promise
     */
    beforeCancel: PropTypes.func,
    onCancel: PropTypes.func,
    afterCancel: PropTypes.func,

    /**
     * async await
     * return a Promise
     * beforeDelete, onDelete, afterDelete
     */
    beforeDelete: PropTypes.func,
    onDelete: PropTypes.func,
    afterDelete: PropTypes.func,

    /**
     * styles
     */
    backgroundColor: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    titleCancelColor: PropTypes.string,
    tintColorSearch: PropTypes.string,
    tintColorDelete: PropTypes.string,
    inputStyle: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
        ViewPropTypes.style
    ]),
    cancelButtonStyle: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object
    ]),
    onLayout: PropTypes.func,
    cancelButtonStyle: ViewPropTypes.style,

    /**
     * text input
     */
    placeholder: PropTypes.string,
    cancelTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    iconDelete: PropTypes.object,
    iconSearch: PropTypes.object,
    returnKeyType: PropTypes.string,
    keyboardType: PropTypes.string,
    autoCapitalize: PropTypes.string,
    inputHeight: PropTypes.number,
    inputBorderRadius: PropTypes.number,
    contentWidth: PropTypes.number,
    middleWidth: PropTypes.number,
    editable: PropTypes.bool,
    blurOnSubmit: PropTypes.bool,
    keyboardShouldPersist: PropTypes.bool,

    /**
     * Positioning
     */
    positionRightDelete: PropTypes.number,
    searchIconCollapsedMargin: PropTypes.number,
    searchIconExpandedMargin: PropTypes.number,
    placeholderCollapsedMargin: PropTypes.number,
    placeholderExpandedMargin: PropTypes.number,

    /**
     * Shadow
     */
    shadowOffsetHeightCollapsed: PropTypes.number,
    shadowOffsetHeightExpanded: PropTypes.number,
    shadowOffsetWidth: PropTypes.number,
    shadowColor: PropTypes.string,
    shadowOpacityCollapsed: PropTypes.number,
    shadowOpacityExpanded: PropTypes.number,
    shadowRadius: PropTypes.number,
    shadowVisible: PropTypes.bool,
};

SearchInput.defaultProps = {
    editable: true,
    blurOnSubmit: false,
    keyboardShouldPersist: false,
    searchIconCollapsedMargin: 25,
    searchIconExpandedMargin: 10,
    placeholderCollapsedMargin: 15,
    placeholderExpandedMargin: 20,
    shadowOffsetWidth: 0,
    shadowOffsetHeightCollapsed: 2,
    shadowOffsetHeightExpanded: 4,
    shadowColor: '#000',
    shadowOpacityCollapsed: 0.12,
    shadowOpacityExpanded: 0.24,
    shadowRadius: 4,
    shadowVisible: false,
};

export default SearchInput;