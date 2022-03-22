# DesktopBrowserInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoints by rendering them on a particular desktop browser.
 
 ### Import statement 
``` 
from applitools.selenium import DesktopBrowserInfo
 
 ``` 

### Constructor 
### DesktopBrowserInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by rendering the image on a particular desktop browser.

#### Syntax 
 ``` 
obj = DesktopBrowserInfo(width, height, browser_type, baseline_env_name)

obj = DesktopBrowserInfo(width, height, browser_type)

obj = DesktopBrowserInfo(width, height)
 ``` 

 #### Parameters 
 ###### width 
  
 Type:int 
  
 The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail. 
  
  ###### height 
  
 Type:int 
  
 The height of the browser viewport for this target. There is no height limit. 
  
  ###### browser\_type 
  
 Type:[BrowserType](./browsertype) \[Optional : default = BrowserType.CHROME \] 
  
 The browser type, a value from the set of supported devices defined by the type [BrowserType](./browsertype). 
  
  ###### baseline\_env\_name 
  
 Type:Text \[Optional : default = None \] 
  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
 #### Return value 
Type: None

 
 ### platform property
Use this property to retrieve and set the platform on which the UltrafastGrid rendered this test.

#### Syntax 
 ``` 
value = obj.platform
 ``` 
 
 Type:Text