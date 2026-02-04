import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function WateringOnboarding() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <ThemedText style={styles.back}>Retour</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.progress}>3 sur 3</ThemedText>
      </View>

      <View style={styles.center}>
        <View style={styles.illustrationWrap}>
          <Image
            source={{
              uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHWa4_JP3lgiqjvIYRGvZYmYn59DNPm8dumqbnNfGSHvdbc24vrzlpS5HdmIKY3TIjwpoBRpu6d3GQBgBK335TXY92kjFwcZEn0JKWzYTHJv0WeYPcwYfvVh-f1ZumkQl3sD--xgMatMDQDImy2CG9cH8OFUjuap-qCZ7rOOjFknnMfFgGc9YTjFCX-Ihn38-BvDMJ-99YdEQzS_f80fxUc34QDmDzo7J3VUGCHdFBUnUhqa4KPUXn2Jso7lB75iejtbPwrxZ2hY",
            }}
            style={styles.image}
            contentFit="cover"
          />
        </View>

        <ThemedText type="title" style={styles.title}>
          Arrosage intelligent & Prévisions
        </ThemedText>
        <ThemedText style={styles.body}>
          Programmez vos cycles ou laissez l'IA ajuster l'arrosage selon la
          météo locale.
        </ThemedText>
      </View>

      <View style={styles.footer}>
        <View style={styles.indicators}>
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={[styles.indicator, styles.indicatorActive]} />
        </View>

        <TouchableOpacity
          style={styles.cta}
          onPress={async () => {
            try {
              await AsyncStorage.setItem("hasOnboarded", "true");
            } catch (e) {}
            router.replace("/");
          }}
        >
          <ThemedText type="defaultSemiBold">Commencer</ThemedText>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "space-between" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
  },
  back: { color: "#111", fontSize: 16 },
  progress: { color: "#6b6f6b" },
  center: { alignItems: "center", flex: 1, justifyContent: "center" },
  illustrationWrap: {
    width: 320,
    height: 320,
    borderRadius: 28,
    overflow: "hidden",
    marginBottom: 12,
  },
  image: { width: "100%", height: "100%" },
  title: { textAlign: "center", marginTop: 8 },
  body: { textAlign: "center", marginTop: 8, maxWidth: 360, color: "#6b6f6b" },
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
