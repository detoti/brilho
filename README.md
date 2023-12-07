# Brilho ✨
O objetivo deste projeto é desenvolver um aplicativo de caráter social que permita que os usuários resgatem cupons no Centro Velho de São Paulo, esse projeto será desenvolvido durante o Terceiro Semestre do curso Análise e Desenvolvimento de Sistemas do Centro Universitário Belas Artes de São Paulo.

## 🧡 Nosso layout 

![image](https://github.com/detoti/brilho/assets/77704621/f9832952-8f3a-429e-b187-c6d7556428d6)


## ⚙️ Install Dependencies

Para configurar o ambiente na sua máquina se faz necessário o uso do seguinte comando:
```
npm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-cordova` - build cordova app
* 📱 `build-cordova-ios` - build cordova iOS app
* 📱 `cordova-ios` - run dev build cordova iOS app
* 📱 `build-cordova-android` - build cordova Android app
* 📱 `cordova-android` - run dev build cordova Android app

## ✉️ Framework7 CLI Options

O aplicativo Framework7 criado com as seguintes opções:

```
{
  "cwd": "/Users/andretoti/Desktop/Study/brilho-pime",
  "type": [
    "cordova"
  ],
  "name": "Brilho",
  "framework": "react",
  "template": "blank",
  "bundler": "vite",
  "cssPreProcessor": "less",
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkMode": false,
    "iconFonts": false
  },
  "customBuild": true,
  "customBuildConfig": {
    "rtl": false,
    "darkTheme": true,
    "lightTheme": true,
    "themes": [
      "ios",
      "md"
    ],
    "components": [
      "dialog",
      "popup",
      "login-screen",
      "popover",
      "actions",
      "sheet",
      "toast",
      "preloader",
      "progressbar",
      "sortable",
      "swipeout",
      "accordion",
      "contacts-list",
      "virtual-list",
      "list-index",
      "timeline",
      "tabs",
      "panel",
      "card",
      "chip",
      "form",
      "input",
      "checkbox",
      "radio",
      "toggle",
      "range",
      "stepper",
      "smart-select",
      "grid",
      "calendar",
      "picker",
      "infinite-scroll",
      "pull-to-refresh",
      "data-table",
      "fab",
      "searchbar",
      "messages",
      "messagebar",
      "swiper",
      "photo-browser",
      "notification",
      "autocomplete",
      "tooltip",
      "gauge",
      "skeleton",
      "color-picker",
      "treeview",
      "text-editor",
      "area-chart",
      "pie-chart",
      "breadcrumbs",
      "typography"
    ]
  },
  "pkg": "io.framework7.myapp",
  "cordova": {
    "folder": "cordova",
    "platforms": [
      "ios",
      "android"
    ],
    "plugins": [
      "cordova-plugin-statusbar",
      "cordova-plugin-keyboard",
      "cordova-plugin-splashscreen"
    ]
  }
}
```

## Assets

Imagens de origem de ativos (ícones, telas iniciais) localizadas na pasta `assets-src`. Para gerar seus próprios ícones e imagens de tela inicial, você precisará substituir todos os ativos neste diretório por suas próprias imagens (preste atenção ao tamanho e formato da imagem) e executar o seguinte comando no diretório do projeto:

```
framework7 assets
```

Ou inicie a UI onde você poderá alterar ícones e telas iniciais:

```
framework7 assets --ui
```


# 🛠️ Tecnologias 
- Este projeto foi desenvolvido em React e possui conexão com a seguinte api: [Brilho Backend][https://github.com/thaizacn/brilho-python/edit/main/README.md](https://github.com/thaizacn/brilho-python)

# 🎁 Agradecimentos
Esse projeto foi feito com muito amor pela equipe "Café sem Açucar" e poderá ser utilizado como veículo de estudo por qualquer um que, assim como nós, tenha o desejo genuíno por mudar o mundo. Nós conseguimos. Juntos.

⌨️ com ❤️ por Café sem Açúcar ☕ 
