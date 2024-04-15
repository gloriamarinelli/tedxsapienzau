import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
i18n
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'it',
    interpolation: {
      escapeValue: false, },
    resources: {
      en: {
        translation: {
            //Navbar elements
            partners: 'Partners',
            team: 'Team',
            blog: 'Blog',
            about_us: 'About us',
            events: 'Events',
            mission_and_vision: 'Mission and Vision',
            location: 'Location',
            language_option: 'EN',
            flag_name: 'EnglishFlag.png',
        }
      },
      it: {
        translation: {
        //Navbar elements
            partners: 'Partners',
            team: 'Team',
            blog: 'Blog',
            about_us: 'Chi siamo',
            events: 'Eventi',
            mission_and_vision: 'Mission and Vision',
            location: 'Location',
            language_option: 'it',
            flag_name: 'ItalianFlag.png',
        }
      }
    }
  });

export default i18n;