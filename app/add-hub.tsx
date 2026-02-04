import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { AppColors } from "@/constants/theme";

export default function AddHubScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.closeButton}
        >
          <ThemedText style={styles.closeIcon}>✕</ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.headerTitle}>Installation</ThemedText>
        <View style={styles.placeholder} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Hub Illustration */}
        <View style={styles.hubContainer}>
          <View style={styles.hubBackground} />
          <View style={styles.hub}>
            {/* Screen */}
            <View style={styles.hubScreen}>
              <View style={styles.screenLine} />
            </View>

            {/* Water Tank */}
            <View style={styles.waterTank}>
              <View style={styles.waterLevel} />
            </View>

            {/* Add Button */}
            <View style={styles.addButton}>
              <ThemedText style={styles.addIcon}>+</ThemedText>
            </View>
          </View>

          {/* Decorative Icons */}
          <View style={styles.decorativeIcons}>
            <ThemedText style={styles.waterDrop}>water_drop</ThemedText>
            <ThemedText style={styles.sensor}>sensors</ThemedText>
          </View>
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
          <ThemedText style={styles.title}>C&apos;est parti !</ThemedText>
          <ThemedText style={styles.description}>
            Commençons par configurer votre Hub de contrôle. Ce réservoir
            central pilotera l&apos;arrosage de tous vos futurs potagers.
          </ThemedText>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.connectButton}>
          <ThemedText style={styles.connectButtonText}>
            Connecter mon bloc de contrôle
          </ThemedText>
          <ThemedText style={styles.connectIcon}>sensors</ThemedText>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.onboardingBackground,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  closeButton: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    fontSize: 24,
    color: AppColors.iconPrimary,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: AppColors.iconSecondary,
  },
  placeholder: {
    width: 48,
    height: 48,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  hubContainer: {
    position: "relative",
    width: 280,
    height: 280,
    alignItems: "center",
    justifyContent: "center",
  },
  hubBackground: {
    position: "absolute",
    width: 280,
    height: 280,
    backgroundColor: AppColors.hubBackground,
    borderRadius: 140,
  },
  hub: {
    position: "relative",
    width: 192,
    height: 256,
    backgroundColor: "#ffffff",
    borderRadius: 24,
    borderWidth: 4,
    borderColor: AppColors.hubBorder,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 16,
    padding: 24,
    alignItems: "center",
  },
  hubScreen: {
    width: "100%",
    height: 32,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginBottom: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  screenLine: {
    width: 48,
    height: 6,
    backgroundColor: AppColors.screenBackground,
    borderRadius: 3,
  },
  waterTank: {
    width: "100%",
    flex: 1,
    backgroundColor: AppColors.waterTankBackground,
    borderRadius: 12,
    marginBottom: 16,
    position: "relative",
    overflow: "hidden",
  },
  waterLevel: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "66%",
    backgroundColor: AppColors.waterLevel,
  },
  addButton: {
    position: "absolute",
    right: -16,
    top: "50%",
    transform: [{ translateY: -28 }],
    width: 56,
    height: 56,
    backgroundColor: AppColors.buttonPrimary,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#13ec5b",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
    borderWidth: 4,
    borderColor: AppColors.onboardingBackground,
  },
  addIcon: {
    fontSize: 32,
    fontWeight: "bold",
    color: AppColors.buttonText,
  },
  decorativeIcons: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  waterDrop: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 36,
    opacity: 0.4,
    color: AppColors.iconPrimary,
    fontFamily: "Material Symbols",
  },
  sensor: {
    position: "absolute",
    bottom: 16,
    right: 0,
    fontSize: 36,
    opacity: 0.4,
    color: "#13ec5b",
    fontFamily: "Material Symbols",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: AppColors.textTitle,
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 38,
  },
  description: {
    fontSize: 16,
    color: AppColors.textSecondary,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 320,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 16,
    alignItems: "center",
  },
  connectButton: {
    width: "100%",
    backgroundColor: AppColors.buttonPrimary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    shadowColor: "#13ec5b",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 24,
  },
  connectButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: AppColors.buttonText,
  },
  connectIcon: {
    fontSize: 24,
    fontFamily: "Material Symbols",
  },
  helpButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  helpIcon: {
    fontSize: 18,
    color: "#6b6f6b",
  },
  helpText: {
    fontSize: 14,
    fontWeight: "600",
    color: AppColors.iconSecondary,
  },
});
