import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const _layout = () => {
  return (
    <>
    <StatusBar backgroundColor={Colors.black} />
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='index' />
      </Stack>
    </>
  )
}

export default _layout

const styles = StyleSheet.create({})