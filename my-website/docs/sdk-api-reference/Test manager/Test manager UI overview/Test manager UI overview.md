# Test manager UI overview
This page provides a general description of the Eyes Test Manager GUI and its main elements. Many of the pages and editors have a common look and feel, and this page summarizes the basic controls and tools found on many of the pages.

## Navigating between Eyes Test Manager pages
This control is used both to navigate between the main pages of the Test manager, and to display the name of the current page. See [The page navigator](https://applitools.com/docs/topics/test-manager/common/tm-page-navigator.html) for more information.

## Selecting a baseline branch
You will find the Baseline branch selector on pages that show branch-specific information. The branch selector is used to select and display the current branch. When you change the current branch, it will apply to all pages that have a branch navigator. See [Selecting a branch on a page](https://applitools.com/docs/topics/test-manager/common/control-select-branch.html) for more information.

## Tables and grids in the Test manager display
The information on many pages is organized into tables, with rows displaying information such as test results, steps in a test, and baselines.

Some tables have columns that display various attributes of the entities being displayed. Other pages, for example, the Test results batch step view, display many entities (e.g. step thumbnails) in a grid.

Eyes Test Manager provides various tools that allow you to control which information is shown, and how it is shown:
* [Changing the visible columns of a table](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Choosing)
* [Navigating large amounts of table information](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Navigate)
* [Sorting table rows by column type](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Sort)
* [Filtering table rows](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Filter)
* [Grouping table rows by column type](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Group)

### Changing the visible columns of a table
In tables where there are many attributes, by default, not all of the attribute columns are shown. You can control which columns are displayed and which are hidden, as well as the order of columns from left to right, by using the Table customization <img src="/img/table_config.png" alt="Table customization" width="30"/> tool.

When you click the Table customization <img src="/img/table_config.png" alt="Table customization" width="30"/> button, a dialog opens showing all of the available columns. The currently visible columns are selected.

![Table configuration](https://applitools.com/docs/topics/test-manager/common/images/table-column-config.png)

You can display a hidden column (e.g. Options above) by selecting the check box, and you can hide a column by deselecting the checkbox. The displayed table display updates as you do this.

The order of the columns in the table from left to right reflects the order of the items in the dialog from top to bottom. Drag the Move button <img src="/img/move_button.png" alt="Move button" width="15"/> of an attribute to change its position in the list. When you move an attribute to a new position in the list, the table columns are updated and the selected column appears in its new position in the table.

Clicking the Restore default button returns the table to its default state.

Click the <img src="/img/close_button.png" alt="Close button" width="15"/> to close the dialog.

### Navigating large amounts of table information
When Test manager has many rows of information it will only show up to 1000 entities at a time. When more information is available, Test manager provides pagination buttons that allow you to browse the rest of the entities.

![Pagination button](https://applitools.com/docs/topics/test-manager/images/tm-pagination.png)

Most Test Manager operations, such as deleting, assigning, or accepting selected tests results, apply to the information that is currently displayed. When you use the Filter to view only data that meets the selected criteria, Eyes will search all the existing information, and will then display the first 1000 entities that match.

### Sorting table rows by column type
When data is presented in rows with columns of information, you can sort the rows by any column by clicking on the header of that column. Each click will toggle the current order. The sort is only done on the information currently loaded in the browser.

### Filtering table rows <img src="/img/filter_button.png" alt="Filter button" width="20"/>
Many pages that display information allow you to filter the data so that you can view only the data that meets specific criteria. The criteria available for you to choose from depends on the information displayed on the page.

After you click the <img src="/img/filter_button.png" alt="Filter button" width="20"/> button, Eyes Test Manager displays various categories and allows you to select one or more required values for each category. When you click Apply,Eyes Test Manager searches all of the data and displays only the data that matches one of the selected values in all of the selected categories.

The filter is applied to all of the data available to Eyes, not just the currently visible entities. The updated table is filled with the filtered entities up to the maximum number of rows, and then you can use the [pagination buttons](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Navigate) to see other entities.

![Pagination button](https://applitools.com/docs/topics/test-manager/images/tm-pagination.png)

### Grouping table rows by column type <img src="/img/grouping_button.png" alt="Grouping button" width="25"/>
Some pages that display information provide a "group by" control <img src="/img/grouping_button.png" alt="Grouping button" width="25"/>. This allows you to organize the information hierarchically, based on various criteria. For example, you can show test results grouped by browser, and then for each browser you can group test results by operating system.

To define grouping click on <img src="/img/grouping_button.png" alt="Grouping button" width="25"/> to open a dialog with all the groups defined for the current page in the available group column on the left. Click on one or more groups to select them, and then click on <img src="/img/right_arrow.png" alt="Right arrow" width="15"/> to transfer the selected attributes to the Active group column on the right. You can select and transfer as many groups as are available, to form a hierarchy of criteria. Click on <img src="/img/left_arrow.png" alt="Left arrow" width="15"/> to remove a group from the active group. Use the <img src="/img/up_arrow.png" alt="Up arrow" width="20"/> and <img src="/img/down_arrow.png" alt="Down arrow" width="20"/> buttons to change the order of the groups in the active groups column. After you click the Confirm button the information on the page will be updated, and the information on the page will be ordered to reflect your selected group hierarchy. The grouping is only done on the information currently loaded in the browser. If the table has a pagination control then additional information may be found by paging forwards or backwards using the control.

To the left of each group, there are toggle controls that allow you to expand and collapse that group, and at the top of the pane there are controls that display the current grouping and allow you expand or collapse all the groups and to remove the grouping. At the start of each row is a checkbox used to select/deselect that row for some operation. When you click a row which is a node in the tree you select/deselect all the items in that group.

### Select/Deselect all visible table rows <img src="/img/checkbox.png" alt="Checkbox" width="15"/>
On pages that display tables with rows of data, this button allows you to select or deselect all of the visible rows. Click on the checkbox to toggle the current state. Click on the triangle menu icon to choose between selecting all of the visible items or selecting none of them.

For example, on many pages, this feature can be used together with the [Delete selected items](https://applitools.com/docs/topics/test-manager/pages/tm-ui-overview.html#Delete) button (see below) to delete all selected rows.

This button is often used together with the filter tool, to select or deselect rows that have some required attributes.
* To select rows with required attributes, use the filter to set the appropriate attributes, and then select the "All" option from the menu.
* To select all rows apart from those with the required attributes, choose the "All" option from the menu, apply the appropriate filter, choose "None" from the menu, and finally turn the filter off.

Usually, the items being selected also have a checkbox and you can use that to fine tune which items are selected.

### Delete selected items <img src="/img/trash_button.png" alt="Trash button" width="20"/>
On many pages, you can select items and then click on this button to delete them. Depending on the page, you may or may not get a warning dialog before the items are deleted.

#### The step thumbnail
![Step thumbnail](https://applitools.com/docs/topics/test-manager/images/generic-step-thumbnail.png)

You will find this control on several pages and views. A small thumbnail of either the baseline image or the checkpoint image . Other information is also displayed when you hover over a thumbnail:

![Thumbnail hover information](https://applitools.com/docs/topics/test-manager/images/generic-step-thumbnail-full.png)

* A dialog is displayed to the right of the image that provides additional information.
* A menu bar is displayed below the image that offers various features including a menu button .
* You can enlarge the thumbnail image by clicking on it. This will open a viewer or editor that allows you to zoom in on parts of the image and access other page-specific functionality.

### Refresh a page <img src="/img/refresh_button.png" alt="Refresh button" width="20"/>
This button appears on various pages where the information displayed may become out of date as tests run in the background and more information, such as test results, becomes available. The button is animated when more information is available. Clicking on the button refreshes the screen and the latest information is displayed.

### Step timeline control
![Step timeline](https://applitools.com/docs/topics/test-manager/viewers/resources/generic-viewer-timeline.png)

This control is available in various editors that give you access to the steps of a test or baseline. The playback control provides a way to navigate between the steps of a test, and to play them back as an animation. See [Step navigator control](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-editor-timeline-control.html) for more information.

### Select visible layer control
![Visible layer control](https://applitools.com/docs/topics/test-manager/viewers/resources/viewer-show-layers-menu.png)

This control is available in several viewers and editors, and it allows you to control what information is overlaid on the baseline or captured image. You can choose whether to view differences, remarks and issues, regions, and viewport borders. See [Test editor select visible layer](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-select-visible-layers.html) for more information.

### Editor image zoom level
![Image zoom level](https://applitools.com/docs/topics/test-manager/viewers/resources/viewer-zoom-toolbar.png)

This control is available in several viewers and editors, and it allows you to control the zoom level of the baseline or captured image. See [Test editor zoom controls](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-editor-zoom-controls.html) for more information.