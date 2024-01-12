import { View, Text, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';
import { useRef } from 'react';
import { useState } from 'react';

const YouTubePlayer = ({ videoId }) => {
    const videourl = useRef();
    const [videoLink, setVideoLink] = useState({})
 return(
    <Text>
        <Video 
        ref={videourl}
        source={{uri:"https://www.youtube.com/watch?v=2qCmRJz3NOE"}}
        useNativeControls
        resizeMode='contain'
        />
    </Text>
 )
};

export default YouTubePlayer;