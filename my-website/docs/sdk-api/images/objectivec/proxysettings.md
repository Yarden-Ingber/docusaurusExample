# AbstractProxySettings class
An object used to set and retrieve the details of the proxy server used to interact with the Eyes server.
To set a proxy server, create an object of this type and pass it to the [proxy](./eyes#setproxy-method) method. 
 ### Import statement 
``` 
@import EyesImages
 
 ``` 
### Constructor 
### initWithUri method
This is the constructor for the [AbstractProxySettings](./proxysettings) class.
To initiate the use of a proxy server, create a [AbstractProxySettings](./proxysettings) object with this constructor and then pass the object to the [proxy](./eyes#setproxy-method) method.

#### Syntax 
 ##### Call syntax 
 ``` 
AbstractProxySettings* proxySettings = [[AbstractProxySettings alloc] initWithUri  : uri port: port username: username password: password   ];

AbstractProxySettings* proxySettings = [[AbstractProxySettings alloc] initWithUri  : uri username: username password: password   ];

AbstractProxySettings* proxySettings = [[AbstractProxySettings alloc] initWithUri  : uri port: port   ];
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)initWithUri:(NSString *)uri port:(NSInteger)port 
 ``` 

 #### Parameters 
 ###### uri 
  
 Type:NSString\* 
  
 The proxy's server URI. 
  
  ###### port 
  
 Type:NSInteger 
  
 The proxy's port (default 80). 
  
  ###### username 
  
 Type:NSString\*\_Nullable 
  
 The username to be sent to the proxy (default nil). 
  
  ###### password 
  
 Type:NSString\*\_Nullable 
  
 The password to be sent to the proxy (default nil). 
  
 #### Return value 
Type: [AbstractProxySettings](./proxysettings)\*

 
 ### password property
The value of this property is the proxy password set when the object was created.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = proxySettings.password
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, copy, nonatomic, nullable) NSString *password 
 ``` 
 
 Type:NSString\* 
 ### port property
The value of this property is the proxy port set when the object was created.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = proxySettings.port
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) NSInteger port 
 ``` 
 
 Type:NSInteger 
 ### uri property
The value of this property is the proxy URI set when the object was created.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = proxySettings.uri
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, copy, nonatomic) NSString *uri 
 ``` 
 
 Type:NSString\* 
 ### username property
The value of this property is the proxy username set when the object was created.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* value = proxySettings.username
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, copy, nonatomic, nullable) NSString *username 
 ``` 
 
 Type:NSString\*