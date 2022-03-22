# ProxySettings class
An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.
To set a proxy server, create an object of this type and pass it to the [undefined](undefined) method. 
 ### Import statement 
``` 
from applitools.common import ProxySettings
 
 ``` 
### Constructor 
### ProxySettings method
This is the constructor for the [ProxySettings](./proxysettings) class.
To initiate the use of a proxy server, create a [ProxySettings](./proxysettings) object with this constructor and then pass the object to the [undefined](undefined) method.

#### Syntax 
 ``` 
proxySettings = ProxySettings()
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: None

 
 ### password property
The value of this property is the proxy password set when the object was created.

#### Syntax 
 ``` 
proxySettings.password  = value
value = proxySettings.password
 ``` 
 
 Type:Text 
 ### port property
The value of this property is the proxy port set when the object was created.

#### Syntax 
 ``` 
proxySettings.port  = value
value = proxySettings.port
 ``` 
 
 Type:int 
 ### username property
The value of this property is the proxy username set when the object was created.

#### Syntax 
 ``` 
proxySettings.username  = value
value = proxySettings.username
 ``` 
 
 Type:Text