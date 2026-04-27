import { View, Text, TouchableOpacity, ScrollView, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants";

const SettingItem = ({
  icon,
  title,
  value,
  type = "arrow",
  onPress,
  onToggle
}: {
  icon: string;
  title: string;
  value?: string;
  type?: "arrow" | "switch";
  onPress?: () => void;
  onToggle?: (val: boolean) => void;
}) => (
  <TouchableOpacity
    className="flex-row items-center justify-between p-4 bg-white border-b border-gray-100"
    onPress={onPress}
    disabled={type === "switch"}
  >
    <View className="flex-row items-center">
      <View className="w-10 h-10 bg-surface rounded-full items-center justify-center mr-4">
        <Ionicons name={icon as any} size={20} color={COLORS.primary} />
      </View>
      <Text className="text-primary font-medium">{title}</Text>
    </View>

    <View className="flex-row items-center">
      {value && <Text className="text-secondary mr-2">{value}</Text>}
      {type === "arrow" ? (
        <Ionicons name="chevron-forward" size={20} color={COLORS.secondary} />
      ) : (
        <Switch
          value={!!value}
          onValueChange={onToggle}
          trackColor={{ false: "#D1D1D1", true: COLORS.primary }}
        />
      )}
    </View>
  </TouchableOpacity>
);

export default function Settings() {
  const router = useRouter();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-surface" edges={["top"]}>
      <View className="flex-row items-center px-4 py-4 bg-white border-b border-gray-100">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text className="text-xl font-bold text-primary">Settings</Text>
      </View>

      <ScrollView className="flex-1">
        <View className="mt-4">
          <Text className="px-4 mb-2 text-secondary font-bold text-xs uppercase tracking-wider">
            Account Settings
          </Text>
          <SettingItem
            icon="person-outline"
            title="Edit Profile"
            onPress={() => {}}
          />
          <SettingItem
            icon="mail-outline"
            title="Marketing Emails"
            type="switch"
            value={marketingEmails ? "on" : ""}
            onToggle={setMarketingEmails}
          />
          <SettingItem
            icon="notifications-outline"
            title="Push Notifications"
            type="switch"
            value={notifications ? "on" : ""}
            onToggle={setNotifications}
          />
          <SettingItem
            icon="lock-closed-outline"
            title="Security & Password"
            onPress={() => {}}
          />
        </View>

        <View className="mt-6">
          <Text className="px-4 mb-2 text-secondary font-bold text-xs uppercase tracking-wider">
            Preferences
          </Text>
          <SettingItem
            icon="moon-outline"
            title="Dark Mode"
            type="switch"
            value={darkMode ? "on" : ""}
            onToggle={setDarkMode}
          />
          <SettingItem
            icon="globe-outline"
            title="Language"
            value="English"
            onPress={() => {}}
          />
          <SettingItem
            icon="cash-outline"
            title="Currency"
            value="USD ($)"
            onPress={() => {}}
          />
        </View>

        <View className="mt-6">
          <Text className="px-4 mb-2 text-secondary font-bold text-xs uppercase tracking-wider">
            Support & Legal
          </Text>
          <SettingItem
            icon="help-circle-outline"
            title="Help Center"
            onPress={() => {}}
          />
          <SettingItem
            icon="shield-outline"
            title="Privacy Policy"
            onPress={() => {}}
          />
          <SettingItem
            icon="document-text-outline"
            title="Terms of Service"
            onPress={() => {}}
          />
        </View>

        <View className="mt-8 mb-10 px-4">
          <TouchableOpacity className="items-center p-4 border border-red-100 rounded-xl">
             <Text className="text-red-500 font-bold">Delete Account</Text>
          </TouchableOpacity>
          <Text className="text-center text-gray-400 text-xs mt-4">
            App Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
