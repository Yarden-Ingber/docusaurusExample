# List Batch Statistics

## Request
```
GET /batches?[start=<start-date>][&end=<end-date>][&skipTo=<batchId>]
```
### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| start     | date   | query  | *Optional* The beginning date and time for the search range. Defaults to 30 days back.
| end       | date   | query  | *Optional* The end date and time for the search range. Defaults to the current day.
| skipTo    | string | query  | *Optional* The batch id to continue from. **Please don't use it directly. Use the value of the `Link` response header.**
| pageSize  | int    | query  | *Optional* Sets the maximum items to retrieve. If provided MUST be between 1 and 100. 

## Response Example

### Body
```json
{
  "batches": [
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

### Special Headers
| Name | Description 
| ---- | ----------- 
| Link | If present will look like this: `<https://eyes.applitools.com/api/v1/batches?start=2022-01-06Z&end=2022-02-06&skipTo=02517910649999999999>; rel="next"`


## cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches"
```