import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          // Existing translations...
          // Gallery translations
          all: 'All',
          haircut: 'Haircuts',
          beard: 'Beard',
          shave: 'Shave',
          'Classic Fade': 'Classic Fade',
          'Beard Grooming': 'Beard Grooming',
          'Modern Crop': 'Modern Crop',
          'Hot Towel Shave': 'Hot Towel Shave',
          'Textured Quiff': 'Textured Quiff',
          'Beard Styling': 'Beard Styling'
        }
      },
      he: {
        translation: {
          // Existing translations...
          // Gallery translations
          all: 'הכל',
          haircut: 'תספורות',
          beard: 'זקן',
          shave: 'גילוח',
          'Classic Fade': 'פייד קלאסי',
          'Beard Grooming': 'טיפוח זקן',
          'Modern Crop': 'קראפ מודרני',
          'Hot Towel Shave': 'גילוח במגבת חמה',
          'Textured Quiff': 'קווף מרקם',
          'Beard Styling': 'עיצוב זקן'
        }
      },
      ar: {
        translation: {
          // Existing translations...
          // Gallery translations
          all: 'الكل',
          haircut: 'قصات الشعر',
          beard: 'اللحية',
          shave: 'حلاقة',
          'Classic Fade': 'فيد كلاسيكي',
          'Beard Grooming': 'تهذيب اللحية',
          'Modern Crop': 'قصة عصرية',
          'Hot Towel Shave': 'حلاقة بالمنشفة الساخنة',
          'Textured Quiff': 'قصة كويف',
          'Beard Styling': 'تصفيف اللحية'
        }
      }
    }
  });

export default i18n;