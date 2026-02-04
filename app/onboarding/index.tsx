import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { AppColors } from "@/constants/theme";

const { width } = Dimensions.get("window");

const slides = [
  {
    key: "welcome",
    title: "Bienvenue dans votre Jardin Connecté",
    body: "Gérez vos potagers à distance et assurez-vous qu'ils ne manquent jamais d'eau.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB0EXHfRJeea2XtJwjGomo4HXpAjH0wnzACTMX2hlKcWu6z0cW2Xghmjfj3FFI-PrEg3b62zH0eaAiw0liNi1u0zzts2mOGDvynilS9eE00rqz8IiP4vlH5DVb1223jNxcIFRZJLEoVnoIFHeHeNiyoKig69V9-FHtqSqhNlSqWiaYFiKSvIEAXz0TQ7GlvN5OGDQeEd2PxFK3qmUYSHU7uDyV3K1tMn8Hgv085jSSYnzJrBDxmemtJiYmS4mPt6JiYtgxCQC4HZvg",
  },
  {
    key: "control",
    title: "Un seul réservoir pour tout contrôler",
    body: "Le bloc de contrôle centralise la gestion de l'eau et vous informe quand il est temps de le remplir.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHWa4_JP3lgiqjvIYRGvZYmYn59DNPm8dumqbnNfGSHvdbc24vrzlpS5HdmIKY3TIjwpoBRpu6d3GQBgBK335TXY92kjFwcZEn0JKWzYTHJv0WeYPcwYfvVh-f1ZumkQl3sD--xgMatMDQDImy2CG9cH8OFUjuap-qCZ7rOOjFknnMfFgGc9YTjFCX-Ihn38-BvDMJ-99YdEQzS_f80fxUc34QDmDzo7J3VUGCHdFBUnUhqa4KPUXn2Jso7lB75iejtbPwrxZ2hY",
  },
  {
    key: "watering",
    title: "Arrosage intelligent & Prévisions",
    body: "Programmez vos cycles ou laissez l'IA ajuster l'arrosage selon la météo locale.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHWa4_JP3lgiqjvIYRGvZYmYn59DNPm8dumqbnNfGSHvdbc24vrzlpS5HdmIKY3TIjwpoBRpu6d3GQBgBK335TXY92kjFwcZEn0JKWzYTHJv0WeYPcwYfvVh-f1ZumkQl3sD--xgMatMDQDImy2CG9cH8OFUjuap-qCZ7rOOjFknnMfFgGc9YTjFCX-Ihn38-BvDMJ-99YdEQzS_f80fxUc34QDmDzo7J3VUGCHdFBUnUhqa4KPUXn2Jso7lB75iejtbPwrxZ2hY",
  },
];

export default function OnboardingIndex() {
  const router = useRouter();
  const listRef = useRef<FlatList<any> | null>(null);
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems && viewableItems.length > 0) {
      const idx = viewableItems[0].index ?? 0;
      setIndex(idx);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const goNext = useCallback(() => {
    if (index < slides.length - 1) {
      listRef.current?.scrollToIndex({ index: index + 1, animated: true });
    } else {
      router.replace("/add-hub");
    }
  }, [index, router]);

  const onSkip = useCallback(() => {
    router.replace("/add-hub");
  }, [router]);

  const renderImage = ({ item }: ListRenderItemInfo<(typeof slides)[0]>) => (
    <View style={styles.imageSlide}>
      <View style={styles.illustrationWrap}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          contentFit="contain"
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRight}>
        <TouchableOpacity onPress={onSkip}>
          <ThemedText type="defaultSemiBold" style={styles.skip}>
            Passer
          </ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.center}>
        <FlatList
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          renderItem={renderImage}
          ref={(r) => { listRef.current = r; }}
          onViewableItemsChanged={onViewableItemsChanged}
          viewabilityConfig={viewConfigRef.current}
          contentContainerStyle={{ alignItems: "center" }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          scrollEventThrottle={16}
        />

        <ThemedText type="title" style={styles.title}>
          {slides[index].title}
        </ThemedText>
        <ThemedText style={styles.body}>{slides[index].body}</ThemedText>
      </View>

      <View style={styles.footer}>
        <View style={styles.indicators}>
          {slides.map((_, i) => {
            const inputRange = slides.map((_, idx) => idx * width);
            const widthInterpolate = scrollX.interpolate({
              inputRange,
              outputRange: slides.map((_, idx) => (idx === i ? 24 : 8)),
              extrapolate: "clamp",
            });
            const bgInterpolate = scrollX.interpolate({
              inputRange,
              outputRange: slides.map((_, idx) =>
                idx === i ? "#13ec5b" : "#dbe6df",
              ),
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={i}
                style={[
                  styles.indicator,
                  { width: widthInterpolate, backgroundColor: bgInterpolate },
                ]}
              />
            );
          })}
        </View>

        <TouchableOpacity style={styles.cta} onPress={goNext}>
          <ThemedText type="defaultSemiBold">
            {index === slides.length - 1 ? "Commencer" : "Suivant"}
          </ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppColors.onboardingBackground },
  imageSlide: { width, alignItems: "center", justifyContent: "center" },
  topRight: { alignItems: "flex-end", paddingTop: 8, paddingHorizontal: 16 },
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
  title: { textAlign: "center", marginTop: 24 },
  body: { textAlign: "center", marginTop: 8, maxWidth: 300, color: "#6b6f6b" },
  footer: { paddingBottom: 24, paddingHorizontal: 16 },
  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },
  indicator: { height: 8, borderRadius: 8, marginHorizontal: 4 },
  cta: {
    backgroundColor: "#13ec5b",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
});
