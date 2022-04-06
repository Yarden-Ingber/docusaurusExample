# List Page Coverage 
Lists the results of sessions page coverage in a batch.

## Request
```
GET /batches/{BatchId}/pagecoverage
```
### Parameters

| Name      | Type   | In     | Description
| --------- | ------ | ------ | ------------------
| batchId   | string | path   | The Batch's ID or Pointer ID.



## Response Example
```json
{
    "TotalNumberOfTestedPages": 5,
    "TotalPageCoveragePercentage": 9.21,
    "EnvironmentsPageCoveragePercentage": [
      {
        "env": {
          "os": "android 10",
          "app": "safari",
          "viewport": {
            "width": 600,
            "height": 800
          }
        },
        "NumberOfTestedPages": 2,
        "PageCoveragePercentage": 0.1
      },
      {
        "env": {
          "os": "windows 10",
          "app": "chrome",
          "viewport": {
            "width": 600,
            "height": 800
          }
        },
        "NumberOfTestedPages": 2,
        "PageCoveragePercentage": 16.77
      },
      {
        "env": {
          "os": "windows 10",
          "app": "iexplore",
          "viewport": {
            "width": 600,
            "height": 800
          }
        },
        "NumberOfTestedPages": 1,
        "PageCoveragePercentage": 12.3
      }
    ]
  }
```

## cURL Example
```
curl -H "X-Eyes-Api-Key: <your-api-key>" -X GET "https://eyes.applitools.com/api/v1/batches/<some-batch-id>/pagecoverage" 
```