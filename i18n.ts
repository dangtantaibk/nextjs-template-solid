// i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Thêm các ngôn ngữ và các file dịch của bạn vào đây
const resources = {
  en: {
    translation: {
      // Định nghĩa các chuỗi dịch cho tiếng Anh ở đây
      welcome: 'Welcome to my app!',
    },
  },
  fr: {
    translation: {
      // Định nghĩa các chuỗi dịch cho tiếng Pháp ở đây
      welcome: 'Bienvenue sur mon application!',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Ngôn ngữ mặc định
  fallbackLng: 'en', // Ngôn ngữ dự phòng nếu ngôn ngữ không được hỗ trợ
  interpolation: {
    escapeValue: false, // Không cần thoát các chuỗi dịch
  },
});

export default i18n;