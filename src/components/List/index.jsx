import { Image, View, StyleSheet, Text } from "react-native";

export function List(props) {
    return (
        <View style={styles.list}>
                <Image
                    source={{uri: props.cat}}
                    style={{width: 100, height: 100}}
                />
                <View style={styles.text}>
                    <Text style={styles.name}>{props.placeholder}</Text>
                    <Text>{props.local}</Text>
                </View>
        </View>
              
    )
}

const styles = StyleSheet.create({
    list: {
      flexDirection: "row",
      justifyContent: "flex-start"
    },
    name: {
        fontWeight:"bold"
    },
    text: {
        justifyContent:"center"
    }
  });
