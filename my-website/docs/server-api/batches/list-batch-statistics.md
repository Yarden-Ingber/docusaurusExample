# List batch statistics

## Request
```
GET /batches?[start=<start-date>][&end=<end-date>][&skipTo=<batchId>]
```
### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| start     | date   | query  | *Optional* The beginning date and time for the search range. Default: 30 days prior to current date.
| end       | date   | query  | *Optional* The end date and time for the search range. Default: current date.
| skipTo    | string | query  | *Optional* Starting batch id. **NOTE: You must use the value of the `Link` response header.**
| pageSize  | int    | query  | *Optional* Maximum number of items to retrieve. Range: between 1 and 100. 

## Response example

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

### Special headers
| Name | Description 
| ---- | ----------- 
| Link | Format (if present): `<https://eyes.applitools.com/api/v1/batches?start=2022-01-06Z&end=2022-02-06&skipTo=02517910649999999999>; rel="next"`


## cURL example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches"
```