# ProxySettings class
An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.
To set a proxy server, create an object of this type and pass it to the [setProxy](./eyes#setproxy-method) method.

### Constructor  
### ProxySettings method
This is the constructor for the [ProxySettings](./proxysettings) class.
To initiate the use of a proxy server, create a [ProxySettings](./proxysettings) object with this constructor and then pass the object to the [setProxy](./eyes#setproxy-method) method.

#### Syntax 
 ``` 
let proxySettings = new ProxySettings(proxy);

let proxySettings = new ProxySettings(url, username, password, isHttpOnly);

let proxySettings = new ProxySettings(url, username, password);

let proxySettings = new ProxySettings(url, username);

let proxySettings = new ProxySettings(url);
 ``` 

 #### Parameters 
 ###### proxy 
  
 Type:[ProxySettingsPlain](./proxysettingsplain) 
  
 url 
  
   Type:String 
  
 The proxy's server URI. 
  
 ###### username 
  
   Type:String \[Optional\] 
  
 The username to be sent to the proxy (default null). 
  
 ###### password 
  
   Type:String \[Optional\] 
  
 The password to be sent to the proxy (default null). 
  
 ###### isHttpOnly 
  
   Type:boolean \[Optional\] 
  
 A value of true specifies that the SDK should communicate with the server using an http tunnel. Use this if your http proxy blocks https communication. 
  
 #### Return value 
Type: [ProxySettings](./proxysettings) 
### getIsHttpOnly method
The value returned by this method is whether the proxy has been defines as Is HTTP only

#### Syntax 
 ``` 
let value = proxySettings.getIsHttpOnly();
value = proxySettings.getIsHttpOnly;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: boolean 
### getPassword method
The value returned by this method is the proxy password set when the object was created.

#### Syntax 
 ``` 
let value = proxySettings.getPassword();
value = proxySettings.password;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getUri method
The value returned by this method is the proxy URI set when the object was created.

#### Syntax 
 ``` 
let value = proxySettings.getUri();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getUrl method
The value returned by this method is the proxy URI set when the object was created.

#### Syntax 
 ``` 
let value = proxySettings.getUrl();
value = proxySettings.url;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string 
### getUsername method
The value returned by this method is the proxy username set when the object was created.

#### Syntax 
 ``` 
let value = proxySettings.getUsername();
value = proxySettings.username;
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: string