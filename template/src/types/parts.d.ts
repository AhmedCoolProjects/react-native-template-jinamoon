declare module '@app-parts/types' {
  import { ImageSourcePropType } from 'react-native';
  export type HeaderProps = {
    title: string;
    left?: {
      icon?: ImageSourcePropType;
      text?: string;
      onPress?: () => void;
    };
    right?: {
      icon?: ImageSourcePropType;
      text?: string;
      onPress?: () => void;
    };
  };
}
