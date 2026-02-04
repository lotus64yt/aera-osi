import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WelcomeOnboarding() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.topRight}>
        <TouchableOpacity
          onPress={async () => {
            try {
              await AsyncStorage.setItem("hasOnboarded", "true");
            } catch (e) {}
            router.replace("/");
          }}
        >
          <ThemedText type="defaultSemiBold" style={styles.skip}>
            Passer
          </ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.center}>
        <View style={styles.illustrationWrap}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0EXHfRJeea2XtJwjGomo4HXpAjH0wnzACTMX2hlKcWu6z0cW2Xghmjfj3FFI-PrEg3b62zH0eaAiw0liNi1u0zzts2mOGDvynilS9eE00rqz8IiP4vlH5DVb1223jNxcIFRZJLEoVnoIFHeHeNiyoKig69V9-FHtqSqhNlSqWiaYFiKSvIEAXz0TQ7GlvN5OGDQeEd2PxFK3qmUYSHU7uDyV3K1tMn8Hgv085jSSYnzJrBDxmemtJiYmS4mPt6JiYtgxCQC4HZvg",
            }}
            style={styles.image}
            contentFit="contain"
          />
        </View>

        <ThemedText type="title" style={styles.title}>
          Bienvenue dans votre Jardin Connecté
        </ThemedText>
        <ThemedText style={styles.body}>
          Gérez vos potagers à distance et assurez-vous qu'ils ne manquent
          jamais d'eau.
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <View style={styles.indicators}>
          <View style={[styles.indicator, styles.indicatorActive]} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
        </View>

        <Link href="/onboarding/control" asChild>
          <TouchableOpacity style={styles.cta}>
            <ThemedText type="defaultSemiBold">Suivant</ThemedText>
          </TouchableOpacity>
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "space-between" },
  topRight: { alignItems: "flex-end", paddingTop: 8 },
  skip: { color: "#13ec5b", fontSize: 16 },
  center: { alignItems: "center", flex: 1, justifyContent: "center" },
  illustrationWrap: {
    width: 280,
    height: 280,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    marginBottom: 12,
  },
  image: { width: "100%", height: "100%" },
  title: { textAlign: "center", marginTop: 8 },
  body: { textAlign: "center", marginTop: 8, maxWidth: 300, color: "#6b6f6b" },
  footer: { paddingBottom: 24 },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: "#dbe6df",
    marginHorizontal: 4,
  },
  indicatorActive: { width: 24, backgroundColor: "#13ec5b" },
  cta: {
    backgroundColor: "#13ec5b",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
});
