# PropertyData class
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](./configuration#addproperty-method) method or [Configuration.setProperties](./configuration#setproperties-method) method.
 
 ### Require statement 
``` 
const {PropertyData} = require('@applitools/eyes-images');
 
 ``` 
### Constructor 
### PropertyData method
Use this constructor to create a PropertyData object.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](./configuration#addproperty-method) method or [Configuration.setProperties](./configuration#setproperties-method) method.

#### Syntax 
 ``` 
let obj = new PropertyData(location);

let obj = new PropertyData(name, value);
 ``` 

 #### Parameters 
 ###### location 
  
 Type:[PropertyData](./propertydata) 
  
 Clone a property from an existing property. 
  
  ###### name 
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value of the property. 
  
 #### Return value 
Type: [PropertyData](./propertydata) 
### getName method
Retrieve the property name.

#### Syntax 
 ``` 
let value = obj.getName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getValue method
Retrieve the property value.

#### Syntax 
 ``` 
let value = obj.getValue();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### setName method
Set the property name.

#### Syntax 
 ``` 
obj.setName(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The name of the property. 
  
 #### Return value 
Type: 
### setValue method
Set the property value.

#### Syntax 
 ``` 
obj.setValue(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value of the property. 
  
 #### Return value 
Type:

This class does not have any properties