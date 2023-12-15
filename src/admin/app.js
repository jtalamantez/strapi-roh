import MenuLogo from './extensions/roh_gold.png'
import AuthLogo from './extensions/roh_gold.png';

export default {
    config: {
        /*
        theme:{
            colors:{
                primary100:"#ebc7b4",
                primary200:"#cea490",
                primary300:"#b0836b",
                primary400:"#9a694f",
                primary500:"#845034",
                primary600:'#78462e',
                primary700:'#683A25',
                buttonPrimary500: '#845034',
                buttonPrimary600: '#78462e',
            }
        },
        */
        auth: {
            logo: AuthLogo,
        },
        menu: {
            logo: MenuLogo
        },
      locales: [
        // 'ar',
        // 'fr',
        // 'cs',
        // 'de',
        // 'dk',
        // 'es',
        // 'he',
        // 'id',
        // 'it',
        // 'ja',
        // 'ko',
        // 'ms',
        // 'nl',
        // 'no',
        // 'pl',
        // 'pt-BR',
        // 'pt',
        // 'ru',
        // 'sk',
        // 'sv',
        // 'th',
        // 'tr',
        // 'uk',
        // 'vi',
        // 'zh-Hans',
        // 'zh',
      ],
      translations: {
        en: {
          'app.components.LeftMenu.navbrand.title': 'Ring On Hook',
          "app.components.LeftMenu.navbrand.workplace": "Backend",
          "Auth.form.welcome.subtitle": "Log in to your account",
          "Auth.form.welcome.title": "",
        }
      },
    },
    
    bootstrap() {
    },
};


