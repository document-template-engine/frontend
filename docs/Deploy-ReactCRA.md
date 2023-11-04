#  Документация для frontend-разработчиков для деплоя всей среды React (CRA) с инструментами
**Установку выполняет один человек, который разворачивает всю структуру, со всеми зависимостями**

**Развертывание (деплой) проекта у себя, в отдельной папке (она пушится в общий репозиторий в самом конце, когда вся структура будет готова)**

## 1 Развертывание (деплой) среды React и создание структуры папок

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

В корневой папке (где находятся файлы конфигурации и гита) дополнительно создайте папку _"docs"_

## 2 Инициализация и настройка гита

### 2.1 Инициализация гита

```
echo "# <project_name>" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main // переименовываем ветку из "master" в "main"
git remote add origin <сюда_ставить_адрес_репозитория_куда_склонировать_готовую_финальную_сборку>
git push -u origin main
```

### 2.2 Настройка гита

Вести в файл _.gitignore_ следующую инфромацию

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

## 3 Настройки линтинга и форматирования

### 3.1 Инициализация и настройка .editorconfig

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

### 3.2 Установка и настройка линтера

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

Задействовать конфигурацию **airbnb** - прописать в файле _.eslint.rc_ или _.eslintrc.json_

```
"extends": [
  "airbnb",
  "airbnb/hooks"
[
```

В файле конфигурации _package.json_ прописать

```
"scripts": {
  ...,
  "lint": "eslint . --ext .js,.jsx .",
  "lint-fix": "npm run lint -- --fix",
  ...
},
```

Установить плагин **ESLint** для **VS Code** (если не установлен), перезапустить **VS Code**

### 3.3 Установка и настройка инструмента форматирования - prettier

Зачем нужен, когда есть линтер?

**prettier** заточен под форматирование и делает это намного лучше, чем линтер

```
npm install --save-dev --save-exact prettier
```

Утилита для настройки работы prettier в связке с линтером

```
npm install --save-dev eslint-config-prettier
```

Задействовать **prettier** в связке с линтером - прописать в файле _eslint.rc_ или _eslintrc.json_

```
"extends": [
  ...,
  "prettier",
  ...
[
```

В файле конфигурации _package.json_ прописать

```
"scripts": {
  ...,
  "format": "prettier . --write",
  ...
},
```

Создать в корне проекта файл _.prettierrc.json_, скопировать туда следующую конфигурацию

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

### 3.4 Установка и настройка husky и lint-staged для линтинга перед комитом

**husky** - создает хуки для запуска разных сценариев по событиям гита (пре/пост-комиты, пре/пост-пуши/пулы и.т.п.)

```
npx husky-init && npm install
```

**lint-staged** - запускает линтер для файлов находящихся у гита в стадии _"staged"_

```
npm install --save-dev lint-staged
```

Прописываем ручками пункт _lint-staged_ в _package.json_

```
"lint-staged": {
  "*.{js,jsx}": "npm run lint",
  "*.{js,jsx,css,md,html,json}": "npm run format"
},
```

Заходим в директорию _.husky_ редактируем файл _pre-commit_
Удаляем запись _npm test_, прописываем _npx lint-staged_

```
. "$(dirname -- "$0")/_/husky.sh"

- npm test
+ npx lint-staged
```

### 3.5 Настройка правил-исключений для линтера

Прописать в файле _eslint.rc_ или _eslintrc.json_

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

## 4 Настройки единого формата комитов - commitizen

Установка **commitizen**

```
npm install --save-dev commitizen
```

Установка **conventional changelog adapter**

```
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

Добавить в _package.json_

```
  ...,
  "scripts": {
    "cz-commit": "cz"
  },
  ...
```

## 5 Установка и настройка препроцессора CSS - SASS

```
npm install --save-dev sass
```

## 6 Установка и настройка Storybook

### 6.1 Установка Storybook

**!!! ВАЖНО !!!**

**Перед установкой таких комплексных пакетов, как Storybook рекомендую отключать линтер и делать полный commit с описанием всей текущей конфигурации**

```
npx storybook@latest init
```

### 6.2 Интеграция Storybook с SASS

**!!! ВАЖНО !!!**

**Этот модуль не установлен, после установки все время выдает _Module build failed (from ./node_modules/postcss-loader/..._ _SyntaxError_ _button.css Unknown word_**

**Ошибку победить пока не удалось**

С помощью пакета @storybook/addon-styling-webpack разработчики могут легко включать таблицы стилей Sass в свои компоненты Storybook

Перед установкой сделайте **commit** изменений, утилита потребует этого при инсталляции

Установка дополнения

```
npx storybook@latest add @storybook/addon-styling-webpack
```

Во время установки нужно будет указать утилите, поддержку каких модулей следует установить, в нашем случае нужно отметить пункт **SASS**

## 7 Установка и настройка утилиты gh-pages

### 7.1 Установка

```
npm install --save-dev gh-pages
```

### 7.2 Настройка

В _package.json_ прописать

```
"scripts": {
  ...,
"gh-deploy": "gh-pages -d <path_to_directory_to_deploy>",
  ...
},
```
