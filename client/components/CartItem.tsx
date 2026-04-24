import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { CartItemProps } from "@/constants/types";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants";

export default function CartItem({
  item,
  onRemove,
  onUpdateQuantity,
}: CartItemProps) {
  const imageUrl = item.product.images[0];
  return (
    <View className="flex-row mb-4 bg-white p-3 rounded-xl items-center">
      {/* Product Image */}
      <View className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden mr-4">
        <Image
          source={{ uri: imageUrl }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="flex-1 py-1 h-24 justify-between">
        {/* Product Details */}
        <View className="flex-row justify-between items-start">
          <View className="flex-1 mr-2">
            <Text
              className="text-primary font-medium text-sm mb-1"
              numberOfLines={1}
            >
              {item.product.name}
            </Text>
            <Text className="text-secondary text-xs">Size: {item.size}</Text>
          </View>
          <TouchableOpacity onPress={onRemove}>
            <Ionicons name="close-circle-outline" size={22} color="#FF4C3B" />
          </TouchableOpacity>
        </View>

        {/* price and quantity */}

        <View className="flex-row justify-between items-center mt-2">
          <Text>${item.product.price.toFixed(2)}</Text>

          <View className="flex-row items-center bg-surface rounded-full px-2 py-1">
            {/* Remove Item  */}
            <TouchableOpacity
              className="p-1"
              onPress={() =>
                onUpdateQuantity && onUpdateQuantity(item.quantity - 1)
              }
            >
              <Ionicons name="remove" size={16} color={COLORS.primary} />
            </TouchableOpacity>

            <Text className="text-primary font-medium mx-3">
              {item.quantity}
            </Text>

            {/* Add Item */}
            <TouchableOpacity
              className="p-1"
              onPress={() =>
                onUpdateQuantity && onUpdateQuantity(item.quantity - 1)
              }
            >
              <Ionicons name="add" size={16} color={COLORS.primary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
