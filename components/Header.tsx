import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { HeaderProps } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";
import { useRouter } from "expo-router";

export default function Header({
  title,
  showBack,
  showSearch,
  showCart,
  showMenu,
  showLogo,
}: HeaderProps) {

    const router = useRouter();
    const {itemCount} = {itemCount: 6} // Replace with actual cart item count from state or context

  return (
    <View className="flex-row items-center justify-between px-4 py-3 bg-white relative min-h-[56px]">
      {/* left side */}
      <View className="flex-row items-center z-10">
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} className="mr-3">
            <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}

        {showMenu && (
          <TouchableOpacity className="mr-3">
            <Ionicons name="menu-outline" size={28} color={COLORS.primary} />
          </TouchableOpacity>
        )}
      </View>

      {/* Center - Logo or Title */}
      <View
        className="absolute left-0 right-0 top-0 bottom-0 items-center justify-center"
        pointerEvents="none"
      >
        {showLogo ? (
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 120, height: 30 }}
            resizeMode="contain"
          />
        ) : (
          title && (
            <Text className="text-xl font-bold text-primary">
              {title}
            </Text>
          )
        )}
      </View>

      {/* right side */}
      <View className="flex-row items-center gap-4 z-10">
        {showSearch && (
          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity onPress={()=> router.push('/(tabs)/cart')}>
            <View className="relative">
              <Ionicons name="bag-outline" size={24} color={COLORS.primary} />
              <View className="absolute -top-1 -right-1 bg-accent w-4 h-4 rounded-full items-center justify-center">
                <Text className="text-white text-[10px] font-bold">{itemCount}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
