# List Batch Results
Lists the results of all the tests (sessions) in a batch.

## Request
```
GET /batches/{batchId}?[start=<start-date>][&end=<end-date>][&statsOnly=true/false]
```
### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| batchId   | string | path   | The batch ID or pointer ID.
| start     | date   | query  | *Optional* The beginning date and time for the search range.
| end       | date   | query  | *Optional* The end date and time for the search range.
| statsOnly | bool   | query  | *Optional* If `true` returns only the statistics summary, without the results list.

The `start` and `end` dates are optional with the following logic:

* If both are absent, all tests in the batch are returned.
* If both are specified, all tests in the inclusive range are returned.
* If only “start” is specified, all tests since the specified start date are returned (inclusive).
* If only “end” is specified, all tests until the specified end date are returned (inclusive).

You can think of it as if all tests in the batch are collected, then filtered by the start date if present, then filtered again by the end date if present.

## Response Example
```json
{
  "statistics": {
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

## cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches/<some-batch-id>"
```