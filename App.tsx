/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  Text,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Svg, {Rect} from 'react-native-svg';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const svgRef = useRef(null);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const toDataURL = () => {
    const svg = svgRef.current;
    if (svgRef.current) {
      svgRef.current.toDataURL((dataUrl: string) => {
        console.log(dataUrl);
      });
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={{padding: 20}}>
          <Svg
            width={'200'}
            height={'200'}
            viewBox={'0 0 200 200'}
            ref={svgRef}>
            <Rect
              key={'dummy-svg'}
              strokeLinejoin="round"
              strokeLinecap="round"
              x={50}
              y={50}
              width={100}
              height={100}
              fill={'red'}
              opacity={1}
            />
          </Svg>
          <Button title="Call .toDataURL" onPress={toDataURL} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
