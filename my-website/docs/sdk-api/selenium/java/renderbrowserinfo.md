# RenderBrowserInfo class
This class is used to provide information as to how a test was rendered using the Ultrafast Grid.
 
 ### Import statement 
``` 
import com.applitools.eyes.visualgrid.model.RenderBrowserInfo;
 
 ``` 
 
### getBaselineEnvName method
Returns the baseline environment used for this browser configuration, or null if not defined.

#### Syntax 
 ``` 
String value = obj.getBaselineEnvName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getBrowserType method
Returns the browser defined for this browser configuration, or null if not defined.

#### Syntax 
 ``` 
BrowserType value = obj.getBrowserType();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [BrowserType](./browsertype) 
### getEmulationInfo method
Returns information about the Browser emulation if defined for this browser configuration, or null if not defined.

#### Syntax 
 ``` 
EmulationBaseInfo value = obj.getEmulationInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: EmulationBaseInfo

 #### Remarks 
Cast this value to [ChromeEmulationInfo](./chromeemulationinfo-method), and then you can access the device name and screen orientation using the [getDeviceName](./chromeemulationinfo#getdevicename-method) method and [getScreenOrientation](./chromeemulationinfo#getscreenorientation-method) method. 
### getHeight method
Returns the height of the viewport defined for this browser configuration.

#### Syntax 
 ``` 
int value = obj.getHeight();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int 
### getIosDeviceInfo method
If this is a [IosDeviceInfo](./iosdeviceinfo) configuration returns the information.

#### Syntax 
 ``` 
IosDeviceInfo value = obj.getIosDeviceInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [IosDeviceInfo](./iosdeviceinfo) 
### getPlatform method
Returns the platform on which the this browser configuration was run.

#### Syntax 
 ``` 
String value = obj.getPlatform();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getViewportSize method
Returns the viewport defined for this browser configuration.

#### Syntax 
 ``` 
RectangleSize value = obj.getViewportSize();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RectangleSize](./rectanglesize) 
### getWidth method
Returns the width of the viewport defined for this browser configuration.

#### Syntax 
 ``` 
int value = obj.getWidth();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: int