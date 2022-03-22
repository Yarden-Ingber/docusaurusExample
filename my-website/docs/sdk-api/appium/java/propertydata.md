# PropertyData class
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method.
 
 ### Import statement 
``` 
import com.applitools.eyes.PropertyData;
 
 ``` 
### Constructor 
 ### PropertyData method
Use this constructor to create a PropertyData object.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method.

#### Syntax 
 ``` 
PropertyData obj = new PropertyData(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The name of the property. 
  
  ###### value 
  
 Type:String 
  
 The value of the property. 
  
 #### Return value 
Type: [PropertyData](./propertydata) 
### getName method
Retrieve the property name.

#### Syntax 
 ``` 
String value = obj.getName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getValue method
Retrieve the property value.

#### Syntax 
 ``` 
String value = obj.getValue();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### setName method
Set the property name.

#### Syntax 
 ``` 
obj.setName(name);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The name of the property. 
  
 #### Return value 
Type: void 
### setValue method
Set the property value.

#### Syntax 
 ``` 
obj.setValue(value);
 ``` 

 #### Parameters 
 ###### value 
  
 Type:String 
  
 The value of the property. 
  
 #### Return value 
Type: void