# API Reference



## Создание документа/черновика для авторизованных пользователей 

```
   POST /api/documents/
```
##### Headers

```js
{
  'Content-Type': 'application/json',
  Authorization: 'Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794',
},
```
#### В теле запроса необходимо передать валидную информацию по заполненным полям

template : айди шаблона
completed : false - черновик, true - документа
document_fields : массив объектов полей
value: значение поля
field: айди поля

```js
  {
    "description": string,
    "template": number,
    "completed": boolean,
    "document_fields" : {value:string, field:number}[]
  }
```
#### Пример
```js
 {
      "description": "doc1",
      "template": 1,
      "completed": true,
      "document_fields": [
        {
          "value": "66",
          "field": 1
        },
        {
          "value": "Непоседы",
          "field": 2
        },
        {
          "value": "Ивановой Ирине Петровне",
          "field": 3
        },
        {
          "value": "Иванова Ивана Ивановича",
          "field": 4
        },
        {
          "value": "город, улица, номер квартиры",
          "field": 5
        },
        {
          "value": "Сидоровым Данилой Игоревичем",
          "field": 6
        },
        {
          "value": "№3",
          "field": 7
        },
        {
          "value": "01.11.2023",
          "field": 8
        },
        {
          "value": "20.11.2023",
          "field": 9
        },
        {
          "value": "30.10.2023",
          "field": 10
        }
      ]
}
```
### Пример ответа

id - необходим для дальнейших запросов на получение нужного документа

```http
{
    "id": 2,
    "created": "2023-11-16T17:48:25.415130Z",
    "updated": "2023-11-16T17:48:25.415158Z",
    "completed": true,
    "description": "Данный шаблон необходим для заполнения заявления в детский сад. Заявление может быть составлено в простой письменной форме. Можно доработать шаблон под себя и прописать наиболее важные поля после его скачивания.",
    "template": 1,
    "owner": 9,
    "is_favorited": false
}
```

### Для получения DOCX/PDF файла

id - айди из запроса выше


#### DOCX

```http
  GET /api/documents/{id}/download_document/ 
```

#### PDF
```http
  GET /api/documents/{id}/download_pdf/  
```

##### Headers

```js
{
  'Content-Type': 'application/json',
  Authorization: 'Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794',
},
```
### Пример ответа
Ответ будет содержать файл, который невозможно прочесть - только скачать


