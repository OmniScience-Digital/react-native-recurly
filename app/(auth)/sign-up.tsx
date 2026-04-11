import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Signup = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in">Sign in to Account</Link>
    </View>
  );
};

export default Signup;
