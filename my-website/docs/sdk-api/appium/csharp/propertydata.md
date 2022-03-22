# PropertyData class
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.AddProperty](./eyes#addproperty-method) method.

### Constructor  
### PropertyData method
Use this constructor to create a PropertyData object.
A test property is a user-defined name/value pair that you can associate with a test. You can [view](https://applitools.com/docs/topics/test-manager/viewers/tm-viewer-test-details.html-method) these properties as well as [filter](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-filter.html-method) and [group](https://applitools.com/docs/topics/test-manager/pages/page-test-results/test-results-grouping.html-method) by these properties in the Test Manager. You can set properties using the [Eyes.AddProperty](./eyes#addproperty-method) method.

#### Syntax 
 ``` 
PropertyData obj = new PropertyData(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The name of the property. 
  
  ###### value 
  
 Type:string 
  
 The value of the property. 
  
 #### Return value 
Type: [PropertyData](./propertydata)
        

 
 ### Name property
Set the property name.

#### Syntax 
 ``` 
string value; // give relevant initial value
obj.Name  = value;
value = obj.Name
 ``` 
 
 Type:string 
 ### Value property
Set the property value.

#### Syntax 
 ``` 
string value; // give relevant initial value
obj.Value  = value;
value = obj.Value
 ``` 
 
 Type:string