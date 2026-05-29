import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons} from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";
import { useDrawer } from "@/context/DrawerContext";
import { COLORS } from "@/constants";
import { useClerk } from "@clerk/clerk-expo";

const { width } = Dimensions.get("window");

const DrawerItem = ({
  icon,
  title,
  route,
  isActive,
  onPress,
}: {
  icon: any;
  title: string;
  route?: string;
  isActive?: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`flex-row items-center p-4 rounded-xl mb-1 ${isActive ? "bg-gray-100" : ""}`}
  >
    <View className="w-8">
      {typeof icon === "string" ? (
        <Ionicons
          name={icon as any}
          size={24}
          color={isActive ? COLORS.primary : "#666"}
        />
      ) : (
        icon
      )}
    </View>
    <Text
      className={`ml-4 text-base ${isActive ? "font-bold text-primary" : "text-secondary font-medium"}`}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default function SideDrawer() {
  const { isOpen, closeDrawer } = useDrawer();
  const { user, signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (route: string) => {
    closeDrawer();
    router.push(route as any);
  };

  const menuItems = [
    { title: "Home", icon: "home-outline", route: "/(tabs)" },
    { title: "Shop", icon: "grid-outline", route: "/shop" },
    { title: "My Profile", icon: "person-outline", route: "/(tabs)/profile" },
    { title: "My Cart", icon: "bag-outline", route: "/(tabs)/cart" },
    { title: "Wishlist", icon: "heart-outline", route: "/(tabs)/favorites" },
    { title: "My Orders", icon: "receipt-outline", route: "/orders" },
    { title: "Settings", icon: "settings-outline", route: "/settings" },
  ];

  return (
    <Modal
      visible={isOpen}
      transparent
      animationType="none"
      onRequestClose={closeDrawer}
    >
      <View className="flex-1 flex-row">
        <View
          className="bg-white h-full shadow-2xl"
          style={{ width: width * 0.75 }}
        >
          {/* User Profile Section */}
          <View className="p-6 pt-12 border-b border-gray-100">
            <TouchableOpacity
              onPress={() => !user ? navigateTo("/sign-in") : navigateTo("/(tabs)/profile")}
              className="mb-4"
            >
              <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4">
                {user?.imageUrl ? (
                  <Image source={{ uri: user.imageUrl }} className="w-16 h-16 rounded-full" />
                ) : (
                  <Ionicons name="person" size={32} color="#999" />
                )}
              </View>
              <Text className="text-xl font-bold text-primary">
                {user ? `${user.firstName} ${user.lastName}` : "Login / Sign Up"}
              </Text>
              <Text className="text-secondary text-sm">
                {user ? user.emailAddresses[0].emailAddress : "To access your account"}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Navigation Items */}
          <View className="flex-1 p-4">
            {menuItems.map((item) => (
              <DrawerItem
                key={item.title}
                title={item.title}
                icon={item.icon}
                isActive={pathname === item.route}
                onPress={() => navigateTo(item.route)}
              />
            ))}

            <View className="mt-auto border-t border-gray-100 pt-4">
              {user ? (
                <DrawerItem
                  title="Logout"
                  icon="log-out-outline"
                  onPress={async () => {
                    await signOut();
                    closeDrawer();
                    router.replace("/sign-in");
                  }}
                />
              ) : (
                <DrawerItem
                  title="Login"
                  icon="log-in-outline"
                  onPress={() => navigateTo("/sign-in")}
                />
              )}
            </View>
          </View>
        </View>

        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View className="flex-1 bg-black/50" />
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}
