# PropertyDataPlain class
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](./configuration#addproperty-method) method, [Configuration.setProperties](./configuration#setproperties-method) method or [Configuration.properties](./configuration#properties-property) property.


 
 ### name property
Set the property name.

#### Syntax 
 ``` 
obj = { name: value_string };
 ``` 
 
 Type:string 
The name of the property. 
 ### value property
Set the property value.

#### Syntax 
 ``` 
obj = { value: value_string };
 ``` 
 
 Type:string 
The value of the property.