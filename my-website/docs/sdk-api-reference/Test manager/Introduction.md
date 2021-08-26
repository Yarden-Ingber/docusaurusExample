# Test manager
The Eyes Test Manager is a browser-based tool that gives you access to your visual UI test data and allows you to manage the test results, baselines, and other metadata associated with your tests.

Eyes Test Manager provides tools that allow you to:
* [View the results of your visual UI test runs](https://applitools.com/docs/topics/test-manager/pages/tm-page-test-results.html)
* [Accept or reject differences](https://applitools.com/docs/topics/test-manager/pages/page-test-results/tm-accepting-and-rejecting-steps.html)
* [Annotate steps with comments](https://applitools.com/docs/topics/test-manager/pages/page-test-results/tm-adding-remarks-to-a-test-result.html)
* [Add match level and ignore regions](https://applitools.com/docs/topics/test-manager/viewers/tm-annotating-regions.html)
* [Update the baseline](https://applitools.com/docs/topics/test-manager/pages/page-test-results/tm-update-the-baseline.html)
* [View and manage application and test names](https://applitools.com/docs/topics/test-manager/pages/tm-page-apps-and-tests.html)
* [View and manage baselines and branches](https://applitools.com/docs/topics/test-manager/pages/tm-page-branch-baselines.html)
* [View and manage execution environments](https://applitools.com/docs/topics/test-manager/pages/tm-page-environments.html)
* [Compare and merge baseline branches](https://applitools.com/docs/topics/test-manager/pages/tm-page-compare-merge-branches.html)
* [Manage your account, teams, and users](https://applitools.com/docs/topics/test-manager/pages/tm-page-admin-admin-panel.html)

For a detailed summary of the things you can achieve using Test manager see [Common tasks in the Test manager](https://applitools.com/docs/topics/test-manager/tm-howto-index.html).

## Test manager pages
The Eyes Test Manager UI provides a number of pages. Each page supports a different aspect of your visual UI testing workflow. In the section below, you can read an overview of the functionality provided by each of the top level pages. Click on the page name to see a full description of the page. For a full description of all the available pages and viewers see [Pages and editors overview](https://applitools.com/docs/topics/test-manager/pages/tm-page-overview.html).

The following top-level pages are available:

[Test results](https://applitools.com/docs/topics/test-manager/pages/tm-page-test-results.html)<br/>
This page displays test run results and allows you to determine if and where the baseline should be updated. On this page, you can easily see if a mismatch was found even in a large batch of tests, or tests with many steps. You can view the captured and baseline images, and determine if a baseline image in a step of a particular test should be updated to the image that was captured in the last test run or not. Tools are provided that allow you to annotate the baseline steps by adding issues and remarks and to mark regions that should have a special match sensitivity level. You can assign individual test results to team members to follow up on specific issues.

[Apps & tests](https://applitools.com/docs/topics/test-manager/pages/tm-page-apps-and-tests.html)<br/>
On this page, you can see all the application and test names used in your team's test runs. You can delete or change these names. You can see a list of all the baselines of any application/test pair and can display the history of revisions of any baseline. You can open the test results viewer to see the test results of particular runs.

[Branch baselines](https://applitools.com/docs/topics/test-manager/pages/tm-page-branch-baselines.html)<br/>
This page lists all the baselines of your chosen branch. It allows you to search for a particular test or step, organize the test and step information in various ways, and to see the test metadata and step images. On this page, you can delete baselines or copy them to other branches. You can also see the history of any baseline, compare revisions, and open the test results viewer to a particular run of the baseline.

[Environments](https://applitools.com/docs/topics/test-manager/pages/tm-page-environments.html)<br/>
This page allows you to see all the different [execution environmentst](#! "An execution environment is defined as a triplet of <OS, browser, viewport size>. When a test runs, its' execution environment, is defined by the platform on which the test runs or if run on the Ultrafast Grid, by the configuration of the Ultrafast Grid. A baseline is also associated with an execution environment. By default, the baseline chosen for a test is the baseline that has the same application name, test name, and execution environment as the test.") under which visual UI tests were run by your team. This page also provides a way to assign a name to a specific environment and to rename or delete existing names.

[Compare & merge branches](https://applitools.com/docs/topics/test-manager/pages/tm-page-compare-merge-branches.html)<br/>
This page supports a "branch and then merge" workflow of your baseline. You create a branch by using SDK commands. Then, when you are ready to merge the source branch back into the target branch, this page allows you to compare the branches and display any differences and conflicts between the source and target branches. You can change the source branch annotations by copying annotation from a target step, changing existing annotations, or adding new annotations. Finally, for every difference between the branches, you can specify whether the target baseline should be updated from the source branch or not.

When you have resolved all conflicts, you can request that Eyes finalize the merge.

[Insights](https://applitools.com/docs/topics/test-manager/pages/tm-page-insights.html)<br/>
The Insights page provides you with a number of charts that assist you in tracking the performance and effectiveness of tests and batches that teams execute on your account.

[Admin](https://applitools.com/docs/topics/test-manager/pages/tm-page-admin-admin-panel.html)<br/>
This page provides tools to manage your account, users, and teams. It is only available if you have admin privileges.

## Page navigation
You can navigate to most Test manager pages directly by using the page navigator at the top of the browser page. Just click on the navigator and select the page you require.

![Page navigator](https://applitools.com/docs/topics/test-manager/images/page-navigator-open.png)

The page navigator always shows the name of the current page. Some pages are opened in the context of another page and are not directly accessed from the navigator. In this case the name displayed then reflects the currently opened page and not the page previously selected by the menu.

## Standard UI tools
The Eyes Test Manager provides various tools that help you sort, group, and control the data and images that you see. These tools are available on various pages, and although they don't always provide exactly the same functionality on each page, they do have a common look and feel. You can read an overview of the tools in the [Test manager UI overview](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html).