import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image } from "react-native";
import React from "react";
import colors from "../../styles/colors";

  export default ({
    placeholder,
    value = '',
    onChangeText = () => {},
    keyboard,
    maxLength,
    
  }) => {
    return (
        <>
      <View style={[styles.container]}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboard}
                maxLength={maxLength}
                placeholderTextColor={ colors.Black }
                style={[styles.input, styles.lightLabel ]}
            />
      </View>
      </>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 24,
        alignItems: "center",
        paddingBottom:12,
        marginTop:12,
        borderBottomWidth:1,
        borderBottomColor:colors.DARK_GREY

    },
    input: {
        fontSize: 16,  
        flex:1 
    },
    

    lightLabel:{ 
        color:colors.Black
    },
    darkLabel:{ 
        color:colors.White
    }
  });