# ProxySettings class
An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.
To set a proxy server, create an object of this type and pass it to the [setProxy](./eyes#setproxy-method) method. 
 ### Require statement 
``` 
const {ProxySettings} = require('@applitools/eyes-images');
 
 ``` 
### Constructor 
### ProxySettings method
This is the constructor for the [ProxySettings](./proxysettings) class.
To initiate the use of a proxy server, create a [ProxySettings](./proxysettings) object with this constructor and then pass the object to the [setProxy](./eyes#setproxy-method) method.

#### Syntax 
 ``` 
let proxySettings = new ProxySettings(uri, username, password, isHttpOnly);

let proxySettings = new ProxySettings(uri, username, password);

let proxySettings = new ProxySettings(uri, username);

let proxySettings = new ProxySettings(uri);
 ``` 

 #### Parameters 
 ###### uri 
  
 Type: 
  
     string|boolean 
  
  ###### The proxy's server URI. 
  
 username 
  
 Type:string \[Optional\] 
  
  ###### The username to be sent to the proxy (default null). 
  
 password 
  
 Type:string \[Optional\] 
  
  ###### The password to be sent to the proxy (default null). 
  
 isHttpOnly 
  
 Type:boolean \[Optional\] 
  
  ###### A value of true specifies that the SDK should communicate with the server using an http tunnel. Use this if your http proxy blocks https communication. 
  
 #### Return value 
Type: [ProxySettings](./proxysettings) 
### getIsDisabled method
The value returned by this method is true if there is no proxy server.

#### Syntax 
 ``` 
proxySettings.getIsDisabled();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### getIsHttpOnly method
The value returned by this method is whether the proxy has been defines as Is HTTP only

#### Syntax 
 ``` 
proxySettings.getIsHttpOnly();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### getPassword method
The value returned by this method is the proxy password set when the object was created.

#### Syntax 
 ``` 
proxySettings.getPassword();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### getUri method
The value returned by this method is the proxy URI set when the object was created.

#### Syntax 
 ``` 
proxySettings.getUri();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: 
### getUsername method
The value returned by this method is the proxy username set when the object was created.

#### Syntax 
 ``` 
proxySettings.getUsername();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: