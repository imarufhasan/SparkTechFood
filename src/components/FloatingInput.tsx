import { View, Text, TextInput } from 'react-native';

interface FloatingInputProps {
  editable?: boolean;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}
export default function FloatingInput({
  editable,
  label,
  value,
  onChangeText,
  secureTextEntry = false,
}: FloatingInputProps) {
  return (
    <View className="mt-6">
      <View className="relative border border-gray-300 rounded-[40px] px-4 py-3">
        <Text className="absolute -top-2 left-[25px] bg-white px-1 font-[500] text-[14px] text-black">
          {label}
        </Text>

        {/* Input */}
        <TextInput
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          placeholder={label}
          className={`text-base ${
            editable ? 'text-black' : 'text-gray-400'
          } h-[40px]`}
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
}
