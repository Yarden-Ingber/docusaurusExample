# Server API for usage status

This HTTP API can be used to obtain account usage information from the Eyes server at both the account and team level. This is the same information that is displayed in the [Admin usage page](https://applitools.com/docs/topics/test-manager/pages/page-admin/tm-page-admin-usage.html).

You can use this API if it's use is enabled in your account and if you have an API Key with either account or team admin rights.

### Information available
The following usage information is returned when using this API:

- How many tests are allowed by the account license per month and how many tests were run in practice.
- The maximum instantaneous concurrency allowed by the account license and how much was achieved in practice.
- How many users and viewers are allowed by the account license and how many actually used the system.

The response can include information for both the account and for each team. Account admins can request information for the account and for any of the account teams, but a team admin can only request information for the teams to which they have admin access.

### Using the API
To obtain the usage information from the Eyes server, take the following steps:

1. Send an async HTTP GET request to the following URL:
    
    ```https://{myeyesserver}/api/admin/orgs/{accountId}/usage?apiKey={apiKey}```

    Where:

    ```{myeyesserver}```

    The Eyes server you use when running your tests (eyesapi.applitools.com if you use the public cloud).

    ```{accountId}```

    This is the customer account ID. You can see your account ID on the Admin/Account page. See [The Admin Account view](https://applitools.com/docs/topics/test-manager/pages/page-admin/tm-page-admin-account.html) for more information.

    ```{apiKey}```

    This is a special user API Key used for obtaining information from the server. This is a different API Key to the key you use when running tests. The key value can be created, and it's value obtained on the Admin > API Key view. See [The Admin API Keys view](https://applitools.com/docs/topics/test-manager/pages/page-admin/tm-page-admin-api-keys.html) for details.

2. The response to the GET will return with a 202 (accepted) response code, and the response Location header will contain a report ready URL which should be used to poll for the returned report.

3. Send an HTTP GET request to the report ready URL. If the report is not yet ready, then the response will return a 200 status code. Retry the GET call periodically until a non-200 status code is returned. The 200 response may contain a Location header with an updated report ready URL. The updated URL should be used for subsequent retries.

4. If the response has a 201 status code, then the report is ready and the response Location header will contain a report data URL which should be used to obtain the returned report.

5. Send a GET request to the report data URL. A status code of 200 means that the response body contains the report in JSON form. Other response status codes indicate standard HTTP errors, such as 404 for a bad request, 403 for access denied, and so on.

The returned JSON has the following top level structure:

```
{
   "from": "2020-12-01T00:00:00.0000000+00:00",
   "to": "2020-12-15T23:59:59.9999999+00:00",
   "granularity": "Month",
   "account": {
      "id": "8Cr6kBF6kBkmD5iAohG15sB",
      "name": "On-Premise Eyes",
      "usage": [ {see usage details below} ]
   },
   "teams": [
       {"id": "fy11O5GelVm856YF4q5vlF50AnuRiY5301y1Kj0LjTk110",
        "name": "Team 1",
        "usage":[{see usage details below}]
      },
      { "id": "r8CZxF6kBkmohG15sBD5iA~~",
        "name": "Team 2",
        "usage": [{see usage details below}]     
      } ...
    ]
}
```

The account element provides information about the account. The teams elements is array of objects that provide information on each of the teams. The usage object can contain any of the fields called usage.XXX in the element description in the next section.

### Full example output
Below is a complete example output of the JSON response.

```
{
    "from":"2020-12-01T00:00:00.0000000+00:00",
    "to":"2020-12-16T23:59:59.9999999+00:00",
    "granularity":"Month",
    "account":{
        "id":"123456-xyzz-48b3-8377-70ba953f1f00",
        "name":"Account My Teams",
        "usage":[
            {
                "at":"2020-12-16T08:00:00.0000000+00:00",
                "componentChecks":0,
                "componentChecksLimit":1000,
                "componentConcurrency":0,
                "componentConcurrencyLimit":5,
                "pageChecks":464,
                "pageChecksLimit":0,
                "pageConcurrency":6,
                "pageConcurrencyLimit":5,
                "users":3,
                "usersLimit":0,
                "viewers":0,
                "viewersLimit":0
            }
        ]
      },
    "teams":[
        {
            "id":"123456-efgBFAERuakQw~~",
            "name":"Team A",
            "usage":[
                {
                    "at":"2020-12-16T08:00:00.0000000+00:00",
                    "componentChecks":0,
                    "componentConcurrency":0,
                    "pageChecks":0,
                    "pageConcurrency":0,
                    "users":0,
                    "viewers":0
                }
            ]
        },
        {
            "id":"123456hijOiBdt3yYYw~~",
            "name":"Team A",
            "usage":[
            {
                "at":"2020-12-16T08:00:00.0000000+00:00",
                "componentChecks":0,
                "componentConcurrency":0,
                "pageChecks":0,
                "pageConcurrency":0,
                "users":0,
                "viewers":0}]
        }
    ]
}
```

The fields are defined as follows:

```from```

The starting date and time of the reporting period. By default, this is the first day of the current month.

```to```

The end date and time of the reporting period. By default, this is the last time the information was updated in the current month.

```granularity```

The default report is always Month, meaning that the information in all of the usage elements for both the account and the teams is for a monthly time period.

```id```

This is the internal Eyes identifier of the account or team.

```name```

This is the user defined name of the account or team.

```usage.componentChecks```

The number of [component checkpoints](## "Checkpoints performed by SDKs that aim to test UI components in component galleries such as Storybook") executed in the reported period.This field will only be returned if the account license is an [checkpoints-based license](## "A license that counts the number of  executed checkpoints. This is comparable to the number of steps you see in the Test manager").

```usage.componentChecksLimit```

The maximum number of component checkpoints that may be executed per month.This field will only be returned if the account license is an [checkpoints-based license](## "A license that counts the number of  executed checkpoints. This is comparable to the number of steps you see in the Test manager").

```usage.componentCount```

The number of components verified in the reported period.This field will only be returned if the account license is a [verified pages/components-based license](## "A license that counts the number of verfied pages/components irrespective of the number time the test is run").

```usage.componentCountLimit```

The maximum number of components that may be verified per month.This field will only be returned if the account license is a [verified pages/components-based license](## "A license that counts the number of verfied pages/components irrespective of the number time the test is run").

```usage.componentConcurrency```

The highest concurrency achieved while verifying components in the reported period.

```usage.componentConcurrencyLimit```

The maximum concurrency that is allowed when verifying components. Component usage information is only reported if a [component based SDK](## "An SDK whose checkpoints are usally used to test UI components in component galleries such as Storybook") has been used.

```usage.pageChecks```

The number of [page checkpoints]("## A checkpoint performed by SDKs that aim to test complete application pages. For example, Selenium, Espresso, XCUI, Cypress and Playwright SDKs") executed in the reported period.This field will only be returned if the account license is an [checkpoints-based license](## "A license that counts the number of  executed checkpoints. This is comparable to the number of steps you see in the Test manager").

```usage.pageChecksLimit```

The maximum number of page checkpoints that may be executed per month.This field will only be returned if the account license is an [checkpoints-based license](## "A license that counts the number of  executed checkpoints. This is comparable to the number of steps you see in the Test manager").

```usage.pageCount```

The number of pages verified in the reported period.This field will only be returned if the account license is a [verified pages/components-based license](## "A license that counts the number of verfied pages/components irrespective of the number time the test is run").

```usage.pageCountLimit```

The maximum number of pages that may be verified in the reported period.This field will only be returned if the account license is a [verified pages/components-based license](## "A license that counts the number of verfied pages/components irrespective of the number time the test is run").

```usage.pageConcurrency```

The highest concurrency achieved while verifying pages in the reported period.

```usage.pageConcurrencyLimit```

The maximum concurrency that is allowed when verifying pages.

```usage.users```

The number of [users](## "An Eyes account member with user rights may view and edit information in the Test manager and save  baselines") that have used the system in the reported period.

```usage.usersLimit```

The maximum number of users that may be added to the account.

```usage.viewers```

The number of [viewers](## "An Eyes account  viewer may view information in the Test manager, but may not make changes or save  baselines") that have used the system in the reported period.

```usage.viewersLimit```

The maximum number of viewers that may be added to the account.

```usage.at```

The date and time of the last updated of the reported period.

#### Notes:
1. If a ```usage.xxxxLimit``` fields does not appear in the response, it means that either it does not apply, or that there is not specified limit.

2. usage.componentXXXX fields are only reported if a [component based SDK](## "An SDK whose checkpoints are usally used to test UI components in component galleries such as Storybook") has been used by the account in the reporting period.

### Requesting team information
You can request usage information for only specific teams by appending the request with a query parameter teamIds with a JSON array of IDs for the teams, as shown in the example below:

```
&teamIds=["123456hijOiBdt3yYYw~~","123456-efgBFAERuakQw~~"]
```

You can find the team ID on the Admin/Teams page. See [Managing Eyes account teams](https://applitools.com/docs/topics/test-manager/pages/page-admin/tm-page-admin-teams.html) for details.