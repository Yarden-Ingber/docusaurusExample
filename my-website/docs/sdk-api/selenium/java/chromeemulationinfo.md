# ChromeEmulationInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.
 
 ### Import statement 
``` 
import com.applitools.eyes.visualgrid.model.ChromeEmulationInfo;
 
 ``` 

### Constructor 
###ChromeEmulationInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by emulating a device using Chrome mobile emulation.
Pass an instances of this class to [addBrowser](./configuration#addbrowser-method) in order to configure the mobile device defined by the parameters to the method.

#### Syntax 
 ``` 
ChromeEmulationInfo obj = new ChromeEmulationInfo(deviceName, screenOrientation);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[DeviceName](./devicename) 
  
 The name of the device, a value from the set of devices defined by [DeviceName](./devicename). 
  
  ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) 
  
 If the device should be rendered in portrait (vertical) or landscape (horizontal) orientation. 
  
 #### Return value 
Type: [ChromeEmulationInfo](./chromeemulationinfo)
        
 ####  Remarks 
The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device. 
### getDeviceName method
Use this method to retrieve the name of the device.

#### Syntax 
 ``` 
String value = obj.getDeviceName();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getScreenOrientation method
Use this method to retrieve the secreen orientation (portrait or landscape).

#### Syntax 
 ``` 
ScreenOrientation value = obj.getScreenOrientation();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [ScreenOrientation](./screenorientation) 
### setDeviceName method
Use this method to set the name of the device.

#### Syntax 
 ``` 
obj.setDeviceName(deviceName);
 ``` 

 #### Parameters 
 ###### deviceName 
  
 Type:[DeviceName](./devicename) 
  
 deviceName 
  
 #### Return value 
Type: void 
### setScreenOrientation method
Use this method to set if the device is portrait or landscape

#### Syntax 
 ``` 
obj.setScreenOrientation(screenOrientation);
 ``` 

 #### Parameters 
 ###### screenOrientation 
  
 Type:[ScreenOrientation](./screenorientation) 
  
 screenOrientation 
  
 #### Return value 
Type: void