# Server REST API Reference (v1.0)

## Basic Endpoint
The basic endpoint for all the REST API calls is:
```
https://<cloud_host>/api/v1/
```
so for the public cloud it'll be:

```
https://eyes.applitools.com/api/v1/
```

## Authentication
All the API calls MUST use an API Key to authenticate. The API Key MUST be provided by adding a header named `X-Eyes-Api-Key` that have the value of the API Key.

## Date Format
All the dates and times used in the API SHOULD have the following format, and MUST be compatible with RFC3339:

```
YYYY-MM-DD[THH:mm:ss]Z
```

Examples:

```
2009-06-15T13:45:30Z
2009-06-15Z
```

## Batches

### List Batch Results
Lists the results of all the tests (sessions) in a batch.

#### Request
```
GET /batches/{batchId}?[start=<start-date>][&end=<end-date>][&statsOnly=true/false]
```
##### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| batchId   | string | path   | The Batch's ID or Pointer ID.
| start     | date   | query  | *Optional* The beginning date and time for the search range.
| end       | date   | query  | *Optional* The end date and time for the search range.
| statsOnly | bool   | query  | *Optional* If `true` will only return the statistics summary, without the results list.

The `start` and `end` dates are optional with the following logic:

* If both are absent, all tests in the batch are returned.
* If both are specified, all tests in the inclusive range are returned.
* If only “start” is specified, all tests since the given start date are returned (inclusive).
* If only “end” is specified, all tests until the given end date are returned (inclusive).

You can think of it as if all tests in the batch are collected, then filtered by the start date if present, then filtered again by the end date if present.

#### Response Example
```
{
    "statistics" :{
		"passed": 76,
		"failed": 9,
		"unresolved": 6,
		"new": 38,
		"aborted": 1,
		"empty": 2,
		"total": 132
    },
    "tests": [
		{
			"testId": "e8050cfc-4483-4f26-8e59-6cc5b5590aaa",
			"startTime": "2009-06-15T13:45:30"
			"env": {
				"device": "desktop",
				"os": "windows",
				"app": "chrome",
				"viewport": {
					"width": 1200
					"height": 900
				}
			},
			"status": "passed"
		}, ...
	]
}
```

#### cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches/<some-batch-id>"
```

### List Batch Statistics

#### Request
```
GET /batches?[start=<start-date>][&end=<end-date>][&skipTo=<batchId>]
```
##### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| start     | date   | query  | *Optional* The beginning date and time for the search range. Defaults to 30 days back.
| end       | date   | query  | *Optional* The end date and time for the search range. Defaults to the current day.
| skipTo    | string | query  | *Optional* The batch id to continue from. **Please don't use it directly. Use the value of the `Link` response header.**
| pageSize  | int    | query  | *Optional* Sets the maximum items to retrieve. If provided MUST be between 1 and 100. 

#### Response Example

##### Body
```
{
	"batches":[
		{
			"id": "xxx",
			"pointerId": "yyy",
			"passed": 76,
			"failed": 9,
			"unresolved": 6,
			"new": 38,
			"aborted": 1,
			"empty": 2,
			"total": 132,
			"status": "Passed"
		}, ...
	]
}
```

##### Special Headers
| Name | Description 
| ---- | ----------- 
| Link | If present will look like this: `<https://eyes.applitools.com/api/v1/batches?start=2022-01-06Z&end=2022-02-06&skipTo=02517910649999999999>; rel="next"`


#### cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches"
```