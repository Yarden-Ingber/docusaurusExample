# ProxySettings class
An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.
To set a proxy server, create an object of this type and pass it to the [setProxy](./eyes#setproxy-method) method. 
 ### Import statement 
``` 
import com.applitools.eyes.ProxySettings;
 
 ``` 
### Constructor 
### ProxySettings method
This is the constructor for the [ProxySettings](./proxysettings) class.
To initiate the use of a proxy server, create a [ProxySettings](./proxysettings) object with this constructor and then pass the object to the [setProxy](./eyes#setproxy-method) method.

#### Syntax 
 ``` 
ProxySettings proxySettings = new ProxySettings(uri, port, username, password);

ProxySettings proxySettings = new ProxySettings(uri, port);

ProxySettings proxySettings = new ProxySettings(uri, username, password);

ProxySettings proxySettings = new ProxySettings(uri);

ProxySettings proxySettings = new ProxySettings();
 ``` 

 #### Parameters 
 ###### uri 
  
 Type:String 
  
 The proxy's server URI. 
  
  ###### port 
  
 Type:int 
  
 The proxy's port (default 80). 
  
  ###### username 
  
 Type:String 
  
 The username to be sent to the proxy (default null). 
  
  ###### password 
  
 Type:String 
  
 The password to be sent to the proxy (default null). 
  
 #### Return value 
Type: [ProxySettings](./proxysettings) 
### getPassword method
The value returned by this method is the proxy password set when the object was created.

#### Syntax 
 ``` 
String value = proxySettings.getPassword();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getPort method
The value returned by this method is the proxy port set when the object was created.

#### Syntax 
 ``` 
int value = proxySettings.getPort();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getUri method
The value returned by this method is the proxy URI set when the object was created.

#### Syntax 
 ``` 
String value = proxySettings.getUri();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getUsername method
The value returned by this method is the proxy username set when the object was created.

#### Syntax 
 ``` 
String value = proxySettings.getUsername();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String