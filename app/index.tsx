import {useRouter} from "expo-router";
import {Image, View} from "react-native";
import {Button, Text as TextPaper} from "react-native-paper";

export default function Index() {
    const router = useRouter();
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 40,
                gap: 20,
                backgroundColor: "#20161f",
            }}
        >

            <TextPaper variant="displayLarge" style={{color: "#c59f60", padding: 30, paddingBottom: 0}}>Welcome to our bookstore</TextPaper>
            <TextPaper variant="bodyLarge" style={{color: "#c59f60", padding: 10, paddingTop: 0}}>Find your next favorite book here and enjoy
                reading!</TextPaper>
            <View
                style={{
                    flex: 1,
                    gap: 50,
                }}
            >

                <Button
                    onPress={() => {
                        router.push("/books");
                    }}
                    contentStyle={{
                        height: 60,
                    }}
                    labelStyle={{
                        fontSize: 24,
                        lineHeight: 60,
                    }}
                    mode="contained"
                    style={{backgroundColor: "#db924b"}}
                >
                    Get Started
                </Button>
                <Image
                    source={require("@/assets/books.jpg")}
                    style={{
                        width: 380,
                        height: 250,
                    }}
                />
            </View>

        </View>
    );
}
