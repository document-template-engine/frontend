# Священная книга frontend-разработчиков для деплоя всей среды React (CRA)

## Оглавление

- [1 Описание](#1-%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5)
  - [1.1 О проекте](#11-%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B5)
  - [1.2 Технологии и инструменты](#12-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B)
  - [1.3 Авторы](#13-%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D1%8B)
- [2 Установка](#2-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
  - [2.1 Вариант №1](#21-%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82-1)
    - [2.1.1 Развертывание (деплой) среды React и создание структуры папок](#211-%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D1%80%D1%82%D1%8B%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D1%81%D1%80%D0%B5%D0%B4%D1%8B-react-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D1%8B-%D0%BF%D0%B0%D0%BF%D0%BE%D0%BA)
    - [2.1.2 Инициализация гита](#212-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B3%D0%B8%D1%82%D0%B0)
    - [2.1.3 Настройки линтинга и форматирования](#213-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8-%D0%BB%D0%B8%D0%BD%D1%82%D0%B8%D0%BD%D0%B3%D0%B0-%D0%B8-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
      - [2.1.3.1 Инициализация и настройка .editorconfig](#2131-%D0%B8%D0%BD%D0%B8%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-editorconfig)
      - [2.1.3.2 Установка и настройка линтера](#2132-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%BB%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0)
      - [2.1.3.3 Установка и настройка инструмента форматирования - prettier](#2133-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F---prettier)
      - [2.1.3.4 Установка и настройка husky и lint-staged для линтинга перед комитом](#2134-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-husky-%D0%B8-lint-staged-%D0%B4%D0%BB%D1%8F-%D0%BB%D0%B8%D0%BD%D1%82%D0%B8%D0%BD%D0%B3%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%B4-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%BE%D0%BC)
    - [2.1.4 Настройки единого формата комитов - comitizen](#214-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8-%D0%B5%D0%B4%D0%B8%D0%BD%D0%BE%D0%B3%D0%BE-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B0-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%BE%D0%B2---commitizen)
    - [2.1.5 Установка и настройка препроцессора CSS - SASS](#215-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D0%BF%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%B0-css---sass)
    - [2.1.6 Установка и настройка Storybook](#216-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-storybook)
      - [2.1.6.1 Установка Storybook](#2161-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-storybook)
      - [2.1.6.2 Интеграция Storybook с SASS](#2162-%D0%B8%D0%BD%D1%82%D0%B5%D0%B3%D1%80%D0%B0%D1%86%D0%B8%D1%8F-storybook-%D1%81-sass)
    - [2.1.7 Установка и настройка утилиты gh-pages](#217-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B8-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0-%D1%83%D1%82%D0%B8%D0%BB%D0%B8%D1%82%D1%8B-gh-pages)
      - [2.1.7.1 Установка](#2171-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
      - [2.1.7.2 Настройка](#2172-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B0)
  - [2.2 Вариант №2](#22-%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82-2)
    - [2.2.1 Проверка установленной версии node.js](#221-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B0-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8-nodejs)
    - [2.2.2 Обновление node.js](#222-%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-nodejs)
    - [2.2.3 Клонирование всего репозитория и установка зависимостей](#223-%D0%BA%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2%D1%81%D0%B5%D0%B3%D0%BE-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B8-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9)
    - [2.2.4 Клонирование определенной ветки репозитория и установка зависимостей](#224-%D0%BA%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9-%D0%B2%D0%B5%D1%82%D0%BA%D0%B8-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B8-%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9)
- [3 Работа со средой React-CRA](#3-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0-%D1%81%D0%BE-%D1%81%D1%80%D0%B5%D0%B4%D0%BE%D0%B9-react-cra)
  - [3.1 Доступные сценарии запуска проекта](#31-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%BD%D1%8B%D0%B5-%D1%81%D1%86%D0%B5%D0%BD%D0%B0%D1%80%D0%B8%D0%B8-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0)
    - [3.1.1 Режим разработки](#311-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8)
    - [3.1.2 Режим тестирования](#312-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
    - [3.1.3 Режим сборки](#313-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8)
    - [3.1.4 Режим "eject" - извлечение](#314-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC-eject---%D0%B8%D0%B7%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
    - [3.1.5 Запуск проверок линтера](#315-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BE%D0%BA-%D0%BB%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0)
    - [3.1.6 Запуск исправлений линтера](#316-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BB%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B0)
    - [3.1.7 Запуск форматирования кода](#317-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D0%BE%D0%B4%D0%B0)
    - [3.1.8 Запуск инструмента commitizen](#318-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0-commitizen)
    - [3.1.9 Запуск Storybook в режиме разработки](#319-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-storybook-%D0%B2-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC%D0%B5-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8)
    - [3.1.10 Запуск Storybook в режиме сборки](#3110-%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA-storybook-%D0%B2-%D1%80%D0%B5%D0%B6%D0%B8%D0%BC%D0%B5-%D1%81%D0%B1%D0%BE%D1%80%D0%BA%D0%B8)
    - [3.1.11 Деплой проекта - gh-pages](#3111-%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0---gh-pages)
  - [3.2 Возможные проблемы при работе и способы их устранения](#32-%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%D0%BF%D1%80%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B5-%D0%B8-%D1%81%D0%BF%D0%BE%D1%81%D0%BE%D0%B1%D1%8B-%D0%B8%D1%85-%D1%83%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F)
    - [3.2.1 Возможные проблемы при выполнении комита](#321-%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%D0%BF%D1%80%D0%B8-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8-%D0%BA%D0%BE%D0%BC%D0%B8%D1%82%D0%B0)
    - [3.2.2 Возможные проблемы при выполнении команды sass](#322-%D0%B2%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%D0%BF%D1%80%D0%B8-%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B8-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-sass)
- [4 Дополнительно](#4-%D0%B4%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE)
  - [4.1 Особенности командной работы с Git-ом](#41-%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-git-%D0%BE%D0%BC)
    - [4.1.1 Краткое описание веток в репозитории](#411-%D0%BA%D1%80%D0%B0%D1%82%D0%BA%D0%BE%D0%B5-%D0%BE%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D0%B2-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B8)
      - [4.1.1.1 Main (Master)](#4111-main-master)
      - [4.1.1.2 Develop](#4112-develop)
      - [4.1.1.3 Feature](#4113-feature)
      - [4.1.1.4 Fix](#4114-fix)
    - [4.1.2 Процесс командной работы с Git-ом](#412-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B-%D1%81-git-%D0%BE%D0%BC)

//@TODO dmitshash@yandex.ru: сделать оглавление

## 1 Описание

### 1.1 О проекте

Мастерская Яндекс практикума по поднятию навыков работы с React, Storybook, препроцессором CSS - SASS. Фронтенд часть проекта для работы с шаблонами документов.

### 1.2 Технологии и инструменты

React v.18.2, Storybook v.7.4.6, SASS v.1.69.2, Prettier v.3.0.3, Lint-staged v.14.0.1, Husky v.8, Gh-pages v.6, ESLint v.8.51, Commitizen v.4.3

### 1.3 Авторы

Шашков Дмитрий, Явьян Михаил, Леонова Екатерина, Чепурина Елизавета, Давыденков Иван, Костюкова Екатерина


### 2.2 Вариант №2

**Развертывание готового (уже собранного) проекта у себя из общего репозитория**

#### 2.2.1 Проверка установленной версии node.js

Проверяйте версию установленной среды node.js, рекомендую всем устанавливать 18 версию (она считается стабильной) и смотрите, чтобы не было больших различий между вашей текущей версией и рекомендуемой, для избежания конфликтов версий:

```
node -v
```

#### 2.2.2 Обновление node.js

Для обновления версии node.js cледуйте инструкциям, находящимся по ссылке ниже:

[Как обновить node.js](https://infosharing.net/bez-rubriki/kak-obnovit-node-js-do-poslednej-versii-linux-windows-i-macos/)

или выполните следующие команды в терминале:

```
npm cache clean -f // очистить кэш менеждера пакетов npm
npm install -g n // установить модуль "n", нужен для установки node.js
sudo n 18 // установка 18ой версии node.js
```

#### 2.2.3 Клонирование всего репозитория и установка зависимостей

```
git clone  git@github.com:document-template-engine/frontend.git
```

В корне проекта (где файлы конфигурации), выполните:

```
npm install
```

#### 2.2.4 Клонирование определенной ветки репозитория и установка зависимостей

```
git clone --single-branch -b develop-react-environment git@github.com:document-template-engine/frontend.git
```

В корне проекта (где файлы конфигурации), выполните:

```
npm install
```

## 3 Работа со средой React-CRA

### 3.1 Доступные сценарии запуска проекта

В директории проекта вы можете запустить:

#### 3.1.1 Режим разработки

```
npm run start
```

Запускает приложение в режиме разработки. Открытывает [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в вашем браузере.

Страница перезагрузится, когда вы внесете изменения. Вы также можете увидеть ошибки линтера в консоли.

#### 3.1.2 Режим тестирования

```
npm run test
```

Запускает программу тестирования в режиме интерактивного просмотра. Смотрите раздел о [выполнении тестов](https://facebook.github.io/create-react-app/docs/running-tests) для получения дополнительной информации.

#### 3.1.3 Режим сборки

```
npm run build
```

Создает готовое приложение для производства в папке `build`. Корректно объединяет React в производственном режиме и оптимизирует сборку для достижения наилучшей производительности.

Сборка сокращена, а имена файлов содержат хэши. Ваше приложение готово к развертыванию!

Смотрите раздел о [развертывании](https://facebook.github.io/create-react-app/docs/deployment) для получения дополнительной информации.

#### 3.1.4 Режим "eject" - извлечение

```
npm run eject
```

**Примечание: это односторонняя операция. Как только вы выполните "eject", вы не сможете вернуться назад!**

Если вас не устраивает инструмент сборки и выбор конфигурации, вы можете "eject" его в любое время. Эта команда удалит однозначную зависимость сборки из вашего проекта.

Вместо этого скопируются все конфигурационные файлы и переходные зависимости (webpack, Babel, ESLint и т.д.) Прямо в ваш проект, чтобы у вас был полный контроль над ними. Все команды, кроме "извлечь", по-прежнему будут работать, но они будут указывать на скопированные скрипты, чтобы вы могли их настроить. С этого момента вы будете действовать на свой страх и риск.

Вряд ли вам когда-либо потребуется использовать "eject". Разработанный набор функций вполне подходит для небольших и средних деплоев, поэтому нет необходимости использовать эту функцию. Однако мы понимаем, что этот инструмент был бы бесполезен, если бы вы не могли настроить его, когда будете к этому готовы.

#### 3.1.5 Запуск проверок линтера

_"eslint . --ext .js,.jsx ."_

```
npm run lint
```

#### 3.1.6 Запуск исправлений линтера

_"npm run lint -- --fix"_

```
npm run lint-fix
```

#### 3.1.7 Запуск форматирования кода

_"prettier . --write"_

```
npm run format
```

#### 3.1.8 Запуск инструмента commitizen

Для поддержания единного формата комитов в команде, рекомендуется делать комиты через него
_"cz"_

```
npm run cz-commit
```

#### 3.1.9 Запуск Storybook в режиме разработки

_"storybook dev -p 6006"_

```
npm run storybook
```

#### 3.1.10 Запуск Storybook в режиме сборки

_"storybook build"_

```
npm run build-storybook
```

#### 3.1.11 Деплой проекта - gh-pages

Развертывает проект на страницах Github - gh-pages

_"gh-pages -d <path_to_deploy_folder>"_

```
npm run gh-deploy
```

### 3.2 Возможные проблемы при работе и способы их устранения

#### 3.2.1 Возможные проблемы при выполнении комита

**!!!ВАЖНО!!!**

**Настроена авто-система пре-комит обработки кода, код форматируется prettier-ом и проверяется линтером, если код не проходит проверку, то комит не происходит.**

**Весь код попадает в stash гита и пропадает из редактора и папки проекта**

**Чтоб его оттуда вытащить, надо воспоьзоваться командами:**

Для того, чтобы вывести список всех процессов, сохраненных в стеше

```
git stash list
```

В консоле появится список всех сохраненных процессов в стеше, строка _automatic lint staged backup_ указывает на тот процесс, индекс от которого мы ищем

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

#### 3.2.2 Возможные проблемы при выполнении команды sass

Если консоль не запускает команду sass, нужно попробовать команду npx sass

## 4 Дополнительно

### 4.1 Особенности командной работы с Git-ом

#### 4.1.1 Краткое описание веток в репозитории

##### 4.1.1.1 Main (Master)

Главная ветка продакшна, в нее не пушим никогда, в нее сливаются только пулл-реквесты из ветки develop!!!

##### 4.1.1.2 Develop

Основная рабочая ветка, в нее тоже ничего не пушим (за исключением, когда изменение какое то совсем не значительное, например readme поправить), в нее сливаются и отпочковываются feature - ветки. Сливаются пулл-реквестами.

##### 4.1.1.3 Feature

Эти ветки разработчики создают себе сами на основании задачи, которую делают.(примеры ниже)

##### 4.1.1.4 Fix

Ветка для исправления ошибок

#### 4.1.2 Процесс командной работы с Git-ом

##### 4.1.2.1 Копирование проекта

```
git clone <path_to_project.git>
```

##### 4.1.2.2 Переход в ветку develop

```
git switch develop
```

##### 4.1.2.3 Подтягивание последних изменений

```
git pull origin develop
```

##### 4.1.2.4 Cоздаем свою ветку feature или fix на основе develop (находясь в ветке develop)

```
git checkout -b feature/<название_компонента_с_которым_будем_работать>
```

##### 4.1.2.5 Правила работы в своей ветке

Каждый день, когда начинаем работать, в своей ветке делаем

```
git pull --rebase origin develop
```

чтобы ветка была актуальной. И, самое главное,

**!!! ту-же команду ребейза сделать, когда работа над фичей окончена и от своей ветки нужно сделать пулл-реквест в девелоп. !!!**

Тогда все конфликты веток если они есть будут только на локальной машине, которые легко поправить. Пулл-реквесты желательно апрувить или реджектить сразу, чтоб они долго не висели, иначе, велика вероятность, что в этот период времени прилетят очередные изменения в ветку _develop_, которые затем, при апруве, будут затерты зависшим пул-реквестом.

##### 4.1.2.6 Слияние своей ветки в ветку develop

Пушим свою отребейзаную ветку и создаем от нее пулл-реквест в девелоп!

**!!! Этот момент надо контролировать, по умолчанию гит предлагает ветку мастер. !!!**

##### 4.1.2.7 Апрувы и ревью пулл-реквеста

Справа в интерфейсе гит хаба выбираем ревьюерами всех ребят команды. Пока не будет апрувов от всей команды (или большинства) никаких слияний веток не делаем!!
