import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        //make the app full-screen
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    );
}

const styles = StyleSheet.create({})

export default Layout;
