## Оглавление

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
### 2.1.2 Инициализация гита
```
echo "# <project_name>" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main // переименовываем ветку из "master" в "main"
git remote add origin <сюда_ставить_адрес_репозитория_куда_склонировать_готовую_финальную_сборку>
git push -u origin main
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
#### 2.1.3.2 Инициализация и настройка линтера
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
Задействовать линтер - прописать в файле *.eslint.rc* или *.eslintrc.json*
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
Зачем он нужен, когда есть линтер?
- **prettier** заточен под форматирование и делает это намного лучше, чем линтер
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

//@TODO dmitshash@yandex.ru: описать в Readme.md
