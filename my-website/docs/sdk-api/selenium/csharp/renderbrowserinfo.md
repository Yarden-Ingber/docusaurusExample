# RenderBrowserInfo class
This class is used to provide information as to how a test was rendered using the Ultrafast Grid.


 
 ### BaselineEnvName property
Returns the baseline environment used for this browser configuration, or null if not defined.

#### Syntax 
 ``` 
string value = obj.BaselineEnvName;
 ``` 
 
 Type:string 
 ### BrowserType property
Returns the browser defined for this browser configuration, or null if not defined.

#### Syntax 
 ``` 
BrowserType value = obj.BrowserType;
 ``` 
 
 Type:[BrowserType](./browsertype) 
 ### DesktopBrowserInfo property
If this is a [DesktopBrowserInfo](./desktopbrowserinfo) configuration returns the information.

#### Syntax 
 ``` 
DesktopBrowserInfo value = obj.DesktopBrowserInfo;
 ``` 
 
 Type:[DesktopBrowserInfo](./desktopbrowserinfo) 
 ### EmulationInfo property
Returns information about the Browser emulation if defined for this browser configuration, or null if not defined.

#### Syntax 
 ``` 
EmulationBaseInfo value = obj.EmulationInfo;
 ``` 
 
 Type:EmulationBaseInfo

 #### Remarks 
Cast this value to [ChromeEmulationInfo](./chromeemulationinfo-method), and then you can access the device name and screen orientation using the [DeviceName](./chromeemulationinfo#getdevicename-property) property and [ScreenOrientation](./chromeemulationinfo#getscreenorientation-property) property. 
 ### Height property
Returns the height of the viewport defined for this browser configuration.

#### Syntax 
 ``` 
int value = obj.Height;
 ``` 
 
 Type:int 
 ### IosDeviceInfo property
If this is a [IosDeviceInfo](./iosdeviceinfo) configuration returns the information.

#### Syntax 
 ``` 
IosDeviceInfo value = obj.IosDeviceInfo;
 ``` 
 
 Type:[IosDeviceInfo](./iosdeviceinfo) 
 ### Platform property
Returns the platform on which the this browser configuration was run.

#### Syntax 
 ``` 
string value = obj.Platform;
 ``` 
 
 Type:string 
 ### Width property
Returns the width of the viewport defined for this browser configuration.

#### Syntax 
 ``` 
int value = obj.Width;
 ``` 
 
 Type:int