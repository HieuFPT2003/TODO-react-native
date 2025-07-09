import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // ✅ Ẩn header ở tất cả tab
      }}
    />
  );
}