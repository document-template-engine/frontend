# API Reference

## Templates

- ### Создание документа/черновика для авторизованных пользователей

```
   POST /api/documents/
```

##### Headers

```json
{
  "Content-Type": "application/json",
  "Authorization": "Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794",
},
```

#### В теле запроса необходимо передать валидную информацию по заполненным полям

- template : айди шаблона
- completed : false - черновик, true - документа
- document_fields : массив объектов полей
- value: значение поля
- field: айди поля

```json
{
	"description": "string",
	"template": "number",
	"completed": "boolean",
	"document_fields": "{value:string, field:number}[]"
}
```

#### Пример

```json
{
	"description": "doc1",
	"template": 1,
	"completed": true,
	"document_fields": [
		{
			"value": "66 Непоседы",
			"field": 1
		},
		{
			"value": "Ивановой Ирине Петровне",
			"field": 2
		},
		{
			"value": "Иванова Ивана Ивановича",
			"field": 3
		},
		{
			"value": "город, улица, номер квартиры",
			"field": 4
		},
		{
			"value": "Сидоровым Данилой Игоревичем",
			"field": 5
		},
		{
			"value": "№3",
			"field": 6
		},
		{
			"value": "01.11.2023",
			"field": 7
		},
		{
			"value": "20.11.2023",
			"field": 8
		},
		{
			"value": "30.10.2023",
			"field": 9
		}
	]
}
```

### Пример ответа

id - необходим для дальнейших запросов на получение нужного документа

```json
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

- ### Для получения DOCX/PDF файла

id - айди из запроса выше

#### DOCX

```
  GET /api/documents/{id}/download_document/
```

#### PDF

```
  GET /api/documents/{id}/download_pdf/
```

##### Headers

```json
{
  "Content-Type": "application/json",
  "Authorization": "Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794",
},
```

### Пример ответа

Ответ будет содержать файл, который невозможно прочесть - только скачать

- ### Работа с избранным

##### Headers

```json
{
  "Content-Type": "application/json",
  "Authorization": "Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794",
},
```

#### Body должен быть пуст

#### Добавить в избранное

```
POST /templates/{template_id}/favorite/
```

#### Удалить из избранного

```
DELETE /templates/{template_id}/favorite/
```

### Получение всех черновиков пользователя (авторизованного)

```
GET /api/documents/draft/
```

##### Headers

```json
{
  "Content-Type": "application/json",
  "Authorization": "Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794",
},
```

#### Body должен быть пуст

### Получение всех недавних документов пользователя (авторизованного)

```
GET /api/documents/history/
```

##### Headers

```json
{
  "Content-Type": "application/json",
  "Authorization": "Token d10e0e0018f81633f27f1cdc3f0ca37094b1b794",
},
```

#### Body должен быть пуст
