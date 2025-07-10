import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '', // ẩn chữ 'index'
          tabBarStyle: { display: 'none' }, // ẩn thanh tab dưới
        }}
      />
    </Tabs>
  );
}