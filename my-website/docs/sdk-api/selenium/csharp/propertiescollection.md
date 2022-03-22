# PropertiesCollection class
A collection of key/value pairs.
 
### Add method
Add a key/value property pair to the collection.

#### Syntax 
 ``` 
obj.Add(name, value);
 ``` 

 #### Parameters 
 ###### name 
  
 Type:string 
  
 The property key. 
  
  ###### value 
  
 Type:string 
  
 The property value. 
  
 #### Return value 
Type: void 
### Clear method
Delete all of the key/value pairs in the collection.

#### Syntax 
 ``` 
obj.Clear();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: void 
### GetEnumerator method
Use this method to get get an enumerator to iterate through the collection.

#### Syntax 
 ``` 
IEnumerator<PropertyData> value = obj.GetEnumerator();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: IEnumerator<[PropertyData](./propertydata)\>

This class does not have any properties