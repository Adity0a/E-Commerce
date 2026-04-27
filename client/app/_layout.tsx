import { Stack } from "expo-router";
import "../global.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { DrawerProvider } from "@/context/DrawerContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Toast from "react-native-toast-message";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@/cache";
import SideDrawer from "@/components/SideDrawer";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ClerkProvider tokenCache={tokenCache}>
          <DrawerProvider>
            <CartProvider>
              <WishlistProvider>
                <Stack screenOptions={{ headerShown: false }} />
                <SideDrawer />
                <Toast />
              </WishlistProvider>
            </CartProvider>
          </DrawerProvider>
        </ClerkProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
