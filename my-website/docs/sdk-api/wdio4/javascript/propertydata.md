# PropertyData class
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](./configuration#addproperty-method) method, [Configuration.setProperties](./configuration#setproperties-method) method or [Configuration.properties](./configuration#properties-property) property.
### Constructor 
### PropertyData method
Use this constructor to create a PropertyData object.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.addProperty](./eyes#addproperty-method) method, [Configuration.addProperty](./configuration#addproperty-method) method, [Configuration.setProperties](./configuration#setproperties-method) method or [Configuration.properties](./configuration#properties-property) property.

#### Syntax 
 ``` 
let obj = new PropertyData(property);

let obj = new PropertyData(name, value);
 ``` 

 #### Parameters 

###### property 
  
 Type:[PropertyDataPlain](./propertydataplain) 
  
 [PropertyDataPlain](./propertydataplain) 
  
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
obj.name = value;
value = obj.name;
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
obj.value = value;
value = obj.value;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### setName method
Set the property name.

#### Syntax 
 ``` 
obj.setName(name);
obj.name = value;
value = obj.name;
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the property. 
  
 #### Return value 
Type: void 
### setValue method
Set the property value.

#### Syntax 
 ``` 
obj.setValue(value);
obj.value = value;
value = obj.value;
 ``` 

 #### Parameters 
 ###### value 
  
 Type:string 
  
 The value of the property. 
  
 #### Return value 
Type: void
  
