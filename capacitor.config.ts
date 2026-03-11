import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "uk.asherlewis.aimine",
  appName: "ai.mine",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
