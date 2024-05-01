import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'
const Index = () => {
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light" />
            <Image className="h-full w-full absolute" source={require('../assets/images/welcome.jpg')} />

            <LinearGradient
                colors={['transparent', '#010101']}
                style={{ width: wp(100), height: hp(70) }}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 0.8 }}
                className="flex justify-end pb-12 spac-y-8"
            >
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        Best <Text className="color-rose-500">Workouts</Text>
                    </Text>
                    <Text style={{ fontSize: hp(5) }} className="text-white font-bold tracking-wide">
                        For you
                    </Text>
                </Animated.View>

                <Animated.View entering={FadeInDown.delay(300).springify()}>
                    <TouchableOpacity
                        style={{ height: hp(7), width: wp(80) }}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{ fontSize: hp(3) }} className="text-white font-bold tracking-widest">Get Started</Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>

        </View>
    );
}

const styles = StyleSheet.create({})

export default Index;
