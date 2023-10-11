# Священная книга frontend-разработчиков для деплоя всей среды React (CRA)
## Оглавление
- [1 Описание](#1-%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5)
  + [1.1 О проекте](#11-%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5)
  + [1.2 Технологии](#12-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8)
  + [1.3 Авторы](#13-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D1%8B)
- [2 Установка](#2-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
  + [2.1 Вариант №1](#21-%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82-1)
    * [2.1.1 Развертывание (деплой) среды React и создание структуры папок](#211-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D1%82%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D1%81%D1%80%D0%B5%D0%B4%D1%8B-react-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B-%D0%BF%D0%B0%D0%BF%D0%BE%D0%BA)
    * [2.1.2 Инициализация гита](#212-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B3%D0%B8%D1%82%D0%B0)
    * [2.1.3 Настройки линтинга и форматирования](#213-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8-%D0%BB%D0%B8%D0%BD%D1%82%D0%B8%D0%BD%D0%B3%D0%B0-%D0%B8-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
      - [2.1.3.1 Инициализация и настройка .editorconfig](#2131-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-editorconfig)
      - [2.1.3.2 Установка и настройка линтера](#2132-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%BB%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0)
      - [2.1.3.3 Установка и настройка инструмента форматирования - prettier](#2133-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F---prettier)
      - [2.1.3.4 Установка и настройка husky и lint-staged для линтинга перед комитом](#2134-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-husky-%D0%B8-lint-staged-%D0%B4%D0%BB%D1%8F-%D0%BB%D0%B8%D0%BD%D1%82%D0%B8%D0%BD%D0%B3%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%BE%D0%BC)
    * [Настройки единого формата комитов - comitizen](#214-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B0-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%BE%D0%B2---comitizen)
  + [2.2 Вариант №2](#22-%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82-2)

//@TODO dmitshash@yandex.ru: сделать оглавление

## 1 Описание
### 1.1 О проекте
Мастерская Яндекс практикума по поднятию навыков работы с React, Storybook, прпроцессором CSS - SASS

### 1.2 Технологии

//@TODO dmitshash@yandex.ru: описать технологии

### 1.3 Авторы

//@TODO dmitshash@yandex.ru: перечислить участников

## 2 Установка
Вариант №1 - выполняет один человек, который разворачивает всю структуру, со всеми зависимостями

Вариант №2 - все остальные
## 2.1 Вариант №1
**Развертывание (деплой) проекта у себя, в отдельной папке (она пушится в общий репозиторий в самом конце, когда вся структура будет готова)**
### 2.1.1 Развертывание (деплой) среды React и создание структуры папок
В папке, где собираетесь выполнить деплой, выполните:
```
npx create-react-app <project_name>
```
При успехе сформируется папка <project_name> - корневая папка проекта. Вся работа с кодом происходит в папке **src**. Остальные файлы, в корневой папке, отвечают за настройку вспомогательных инструментов и библиотек.

Структура папки src следующая:
```
 └── src/
        ├── components/  - в данной папке находятся компоненты проекта.
        │   └──...
        ├── images/      - в данной папке лежат все изображения проекта (растровые + векторные)
        │   └──...
        ├── stories/     - в данной папке находятся компоненты/истории сторибука
        │   └──...
        ├── utils/       - в данной папке находятся константы, обращение к api и прочие утилиты.
        │   └──...
        ├── vendors/     - в данной папке находятся шрифты и normalize.css
        │   └──...
        ├── index.js
        ├── index.scss
        ├── reportWebVitals.js
        └── setupTests.js
```
В корневой папке (где находятся файлы конфигурации и гита) дополнительно создайте папку *"docs"*
### 2.1.2 Инициализация и настройка гита
#### 2.1.2.1 Инициализация гита
```
echo "# <project_name>" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main // переименовываем ветку из "master" в "main"
git remote add origin <сюда_ставить_адрес_репозитория_куда_склонировать_готовую_финальную_сборку>
git push -u origin main
```
#### 2.1.2.2 Настройка гита
Вести в файл *.gitignore* следующую инфромацию
```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# logs
npm-debug.log*
```
### 2.1.3 Настройки линтинга и форматирования
#### 2.1.3.1 Инициализация и настройка .editorconfig
Установите плагин **editorconfig** (если не установлен)

Щелкните в редакторе **VS Code** по папке проекта, выберите **"создать .editorconfig"**

Скопируйте и вставьте туда следующую конфигурацию:
```
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js}]
charset = utf-8
indent_style = tab
indent_size = 2
```
#### 2.1.3.2 Установка и настройка линтера
```
npm init @eslint/config
```
Установка дополнительных конфигураций линтера

Плагин для **ESLint**, который помогает проверять и исправлять импорты в **JavaScript**
```
npm install eslint-plugin-import --save-dev
```
Распространенный набор правил для проверки кода
```
npm install --save-dev eslint-config-airbnb
```
Задействовать конфигурацию **airbnb** - прописать в файле *.eslint.rc* или *.eslintrc.json*
```
"extends": [
  "airbnb",
  "airbnb/hooks"
[
```
В файле конфигурации *package.json* прописать
```
"scripts": {
  ...,
  "lint": "eslint . --ext .js,.jsx .",
  "lint-fix": "npm run lint -- --fix",
  ...
},
```
Установить плагин **ESLint** для **VS Code** (если не установлен), перезапустить **VS Code**
#### 2.1.3.3 Установка и настройка инструмента форматирования - prettier
Зачем нужен, когда есть линтер?

**prettier** заточен под форматирование и делает это намного лучше, чем линтер
```
npm install --save-dev --save-exact prettier
```
Утилита для настройки работы prettier в связке с линтером
```
npm install --save-dev eslint-config-prettier
```
Задействовать **prettier** в связке с линтером - прописать в файле *eslint.rc* или *eslintrc.json*
```
"extends": [
  ...,
  "prettier",
  ...
[
```
В файле конфигурации *package.json* прописать
```
"scripts": {
  ...,
  "format": "prettier . --write",
  ...
},
```
Создать в корне проекта файл *.prettierrc.json*, скопировать туда следующую конфигурацию
```
{
  "tabWidth": 2,
  "useTabs": true,
  "printWidth": 80,
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "endOfLine": "lf"
}
```
#### 2.1.3.4 Установка и настройка husky и lint-staged для линтинга перед комитом
**husky** - создает хуки для запуска разных сценариев по событиям гита (пре/пост-комиты, пре/пост-пуши/пулы и.т.п.)
```
npx husky-init && npm install
```
**lint-staged** - запускает линтер для файлов находящихся у гита в стадии *"staged"*
```
npm install --save-dev lint-staged
```
Прописываем ручками пункт *lint-staged* в *package.json*
```
"lint-staged": {
  "*.{js,jsx}": "npm run lint",
  "*.{js,jsx,css,md,html,json}": "npm run format"
},
```
Заходим в директорию *.husky* редактируем файл *pre-commit*
Удаляем запись *npm test*, прописываем *npx lint-staged*
```
. "$(dirname -- "$0")/_/husky.sh"

- npm test
+ npx lint-staged
```
#### 2.1.3.5 Настройка правил-исключений для линтера
Прописать в файле *eslint.rc* или *eslintrc.json*
```
  ...,
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-unescaped-entities": "off",
    "react/button-has-type": "off"
  },
  ...
```
### 2.1.4 Настройки единого формата комитов - commitizen
Установка **commitizen**
```
npm install --save-dev commitizen
```
Установка **conventional changelog adapter**
```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```
Добавить в *package.json*
```
  ...,
  "scripts": {
    "cz-commit": "cz"
  },
  ...
```
### 2.1.5 Установка и настройка препроцессора CSS - SASS
```
npm install --save-dev sass
```
### 2.1.6 Установка и настройка Storybook
#### 2.1.6.1 Установка Storybook
**!!! ВАЖНО !!!**

**Перед установкой таких комплексных пакетов, как Storybook рекомендую отключать линтер и делать полный commit с описанием всей текущей конфигурации**
```
npx storybook@latest init
```
#### 2.1.6.2 Интеграция Storybook с SASS
**!!! ВАЖНО !!!**

**Этот модуль не установлен, после установки все время выдает *Module build failed (from ./node_modules/postcss-loader/...* *SyntaxError* *button.css Unknown word***

**Ошибку победить пока не удалось**

С помощью пакета @storybook/addon-styling-webpack разработчики могут легко включать таблицы стилей Sass в свои компоненты Storybook

Перед установкой сделайте **commit** изменений, утилита потребует этого при инсталляции

Установка дополнения
```
npx storybook@latest add @storybook/addon-styling-webpack
```
Во время установки нужно будет указать утилите, поддержку каких модулей следует установить, в нашем случае нужно отметить пункт **SASS**
## 2.2 Вариант №2
**Развертывание готового (уже собранного) проекта у себя из общего репозитория**
### 2.2.1 Проверка установленной версии node.js
Проверяйте версию установленной среды node.js, рекомендую всем устанавливать 18 версию (она считается стабильной) и смотрите, чтобы не было больших различий между вашей текущей версией и рекомендуемой, для избежания конфликтов версий:
```
node -v
```
### 2.2.2 Обновление node.js
Для обновления версии node.js cледуйте инструкциям, находящимся по ссылке ниже:

[Как обновить node.js](https://infosharing.net/bez-rubriki/kak-obnovit-node-js-do-poslednej-versii-linux-windows-i-macos/)

или выполните следующие команды в терминале:
```
npm cache clean -f // очистить кэш менеждера пакетов npm
npm install -g n // установить модуль "n", нужен для установки node.js
sudo n 18 // установка 18ой версии node.js
```
### 2.2.3 Клонирование репозитория и установка зависимостей
```
git clone  git@github.com:document-template-engine/frontend.git
```
В корне проекта (где файлы конфигурации), выполните:
```
npm install
```



### Настройка инструмента для комитов
Для поддержания единого формата комитов

//@TODO krolik14121975@yandex.ru: настроить инструмент для комитов локально, дать описание в Readme.md (лекция по настройкам Гитхаб для фронта)

### Установка и настройка препроцессора css - sass

//@TODO seyelich@yandex.ru: установить и настроить препроцессор sass локально, дать описание в Readme. (Есть лекция от ментора, Лиза, если нужно отпишись, дам ссылку)

### Установка и настройка Storybook
#### Установка и настройка Storybook

//@TODO seyelich@yandex.ru; dmitshash@yandex.ru: Установить и настроить Storybook локально, дать описание в Readme.md

#### Установка и настройка плагина для Storybook для работы с препроцессором SASS

//@TODO seyelich@yandex.ru; dmitshash@yandex.ru: Установить и настроить плагин локально, дать описание в Readme.md

#### Настройка дополнительной среды для прохождения туториалов по Storybook
1. Нужен отдельный репозиторий, предлагаю свой, уже создал
2. Будут сложности с установкой шаблонной среды для туториалов - используют yarn, а не npm, думаю побороть можно

//@TODO seyelich@yandex.ru; dmitshash@yandex.ru: Настроить среду для прохождения туториалов по Storybook локально, дать описание в Readme.md

#### Установить и настроить gh-pages и дополнительные необходимые инструменты
 
//@TODO dmitshash@yandex.ru: установить и настроить утилиту gh-pages локально, дать описание в Readme.md

### 3 Сценарии запуска React-проекта:
**!!!ВАЖНО!!!**

**Настроена авто-система пре-комит обработки кода, код форматируется prettier-ом и проверяется линтером, если код не проходит проверку, то комит не происходит.**

**Весь код попадает в stash гита и пропадает из редактора и папки проекта**

**Чтоб его оттуда вытащить, надо воспоьзоваться командами:**

Для того, чтобы вывести список всех процессов, сохраненных в стеше
```
git stash list
```
В консоле появится список всех сохраненных процессов в стеше, строка *automatic lint staged backup* указывает на тот процесс, индекс от которого мы ищем
```
stash{0}: automatic lint staged backup
stash{1}: ...
stash{2} ...
...
```
Дальше указываем индекс того процесса, который хотим вытащить из стеша (этот процесс содержит весь наш код):
```
git stash apply --index stash@{0}
```

<Дать пояснение по sass - если не запускается как sass, запускать через npx - npx sass >

//@TODO dmitshash@yandex.ru: описать в Readme.md
