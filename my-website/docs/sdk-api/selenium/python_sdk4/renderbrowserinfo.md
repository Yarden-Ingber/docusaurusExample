# RenderBrowserInfo class
This class is used to provide information as to how a test was rendered using the Ultrafast Grid.
 
 ### Import statement 
``` 
from applitools.common import RenderBrowserInfo
 
 ``` 


 
 ### browser property
Use this property to retrieve and set the configured Browser.

#### Syntax 
 ``` 
value = obj.browser
 ``` 
 
 Type:Text 
 ### height property
Returns the height of the viewport defined for this browser configuration.

#### Syntax 
 ``` 
value = obj.height
 ``` 
 
 Type:int 
 ### platform property
Returns the platform on which the this browser configuration was run.

#### Syntax 
 ``` 
value = obj.platform
 ``` 
 
 Type:Text 
 ### width property
Returns the width of the viewport defined for this browser configuration.

#### Syntax 
 ``` 
value = obj.width
 ``` 
 
 Type:int 
 ### baseline_env_name property
Returns the baseline environment used for this browser configuration, or None if not defined.

#### Syntax 
 ``` 
obj.baseline_env_name  = value
value = obj.baseline_env_name
 ``` 
 
 Type:Text 
 ### browser_type property
Returns the browser defined for this browser configuration, or None if not defined.

#### Syntax 
 ``` 
obj.browser_type  = value
value = obj.browser_type
 ``` 
 
 Type:[BrowserType](./browsertype) 
 ### emulation_info property
Returns information about the Browser emulation if defined for this browser configuration, or None if not defined.

#### Syntax 
 ``` 
obj.emulation_info  = value
value = obj.emulation_info
 ``` 
 
 Type:EmulationBaseInfo

 #### Remarks 
Cast this value to [ChromeEmulationInfo](./chromeemulationinfo-method), and then you can access the device name and screen orientation using the [device\_name](./chromeemulationinfo#getdevicename-property) property and [screen\_orientation](./chromeemulationinfo#getscreenorientation-property) property.