import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ITButton = props => {
    const {
        text,
        textStyle,
        containerStyle,
        onPress,
        disabled,
    } = props;

    return (
        <TouchableOpacity
            disabled={disabled}
            style={containerStyle}
            onPress={() => onPress && onPress()}>
            {text ? (
                <Text style={[{ opacity: disabled ? 0.5 : null }, textStyle]}>
                    {text}
                </Text>
            ) : null}
        </TouchableOpacity>
    );

}

export default ITButton;