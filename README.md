## Оглавление

//@TODO dmitshash@yandex.ru: сделать оглавление

## Описание
### О проекте
Мастерская Яндекс практикума по поднятию навыков работы с React, Storybook, прпроцессором CSS - SASS

### Технологии

//@TODO dmitshash@yandex.ru: описать технологии

### Авторы

//@TODO dmitshash@yandex.ru: перечислить участников

## Установка
Вариант №1 - выполняет один человек, который разворачивает всю структуру, со всеми зависимостями

Вариант №2 - все остальные
### Вариант №1 - развертывание (деплой) проекта у себя, в отдельной папке (она не пушится в общий репозиторий)
1. В папке, где собираетесь выполнить деплой, выполните:
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
2. В корневой папке (где находятся файлы конфигурации и гита) дополнительно создайте папку "docs"
3. Инициализируйте гит:
```
echo "# <project_name>" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main // переименовываем ветку из "master" в "main"
git remote add origin <сюда_ставить_адрес_репозитория_куда_склонировать_готовую_финальную_сборку>
git push -u origin main
```

### Вариант №2 - развертывание готового (уже собранного) проекта у себя из общего репозитория
1. Проверяйте версию установленной среды node.js, рекомендую всем устанавливать 18 версию (она считается стабильной) и смотрите, чтобы не было больших различий между вашей текущей версией и рекомендуемой, для избежания конфликтов версий:
```
node -v
```
2. Для обновления версии node.js cледуйте инструкциям, находящимся по ссылке ниже:

[Как обновить node.js](https://infosharing.net/bez-rubriki/kak-obnovit-node-js-do-poslednej-versii-linux-windows-i-macos/)

или выполните следующие команды в терминале:
```
npm cache clean -f // очистить кэш менеждера пакетов npm
npm install -g n // установить модуль "n", нужен для установки node.js
sudo n 18 // установка 18ой версии node.js
```
3. Клонируйте репозиторий:
<указать_команду_и_ветку>
4. Выполните:
```
npm install
```

### Создание структуры папок
Предлагаемая структура папок:
1. Папка для хранения всех проектов мастерской
2. Внутри папка конкретного проекта
3. В папке проекта хранятся файлы конфигурации, гита и то, что распокавал установщик Реакта, никаких дополнительных папок быть не должно. Исключение папка "docs" нужно кому-то создать её в корне, на случай, если документация сильно разрастется
### Клонирование репозитория:
Репозиторий клонируем в папку конкретного проекта

git clone  git@github.com:document-template-engine/frontend.git

### Разворачивание среды React

//@TODO kaleon612@gmail.com; kukucapl@yandex.ru: развернуть платформу у себя локально, дать описание в Readme.md (теория Яндекс Практикума в помощь)

### Настройки линтинга и форматирования

//@TODO krolik14121975@yandex.ru: настроить линтинг и форматирование локально, придерживаться рекомендаций ментора в последовательности установки и конфигурации инструментов, дать описание  в Readme.md (лекция по настройкам Гитхаб для фронта)

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

#### Настройка среды для прохождения туториалов по Storybook
1. Нужен отдельный репозиторий, предлагаю свой, уже создал
2. Будут сложности с установкой шаблонной среды для туториалов - используют yarn, а не npm, думаю побороть можно

//@TODO seyelich@yandex.ru; dmitshash@yandex.ru: Настроить среду для прохождения туториалов по Storybook локально, дать описание в Readme.md

### Установить и настроить gh-pages и дополнительные необходимые инструменты
 
//@TODO dmitshash@yandex.ru: установить и настроить утилиту gh-pages локально, дать описание в Readme.md

### Сценарии запуска React-проекта:

//@TODO dmitshash@yandex.ru: описать в Readme.md
