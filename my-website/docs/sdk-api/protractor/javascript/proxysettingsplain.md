# ProxySettingsPlain class
An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.
To set a proxy server, create an object of this type and pass it to the [setProxy](./eyes#setproxy-method) method.
        

 
 ### isHttpOnly property
The value of this property is whether the proxy has been defines as Is HTTP only

#### Syntax 
 ``` 
proxySettings = { isHttpOnly: value_boolean };
 ``` 
 
 Type:boolean 
 ### password property
The value of this property is the proxy password set when the object was created.

#### Syntax 
 ``` 
proxySettings = { password: value_string };
 ``` 
 
 Type:string 
 ### url property
The value of this property is the proxy URI set when the object was created.

#### Syntax 
 ``` 
proxySettings = { url: value_string };
 ``` 
 
 Type:string 
 ### username property
The value of this property is the proxy username set when the object was created.

#### Syntax 
 ``` 
proxySettings = { username: value_string };
 ``` 
 
 Type:string