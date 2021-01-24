import React from 'react';
import { Image } from 'react-native';

function Logo() {
    return (
        <Image
            style={{width: 60, height: 40}}
            source={{uri:'https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png'}}
        />
    );
}

export default Logo;