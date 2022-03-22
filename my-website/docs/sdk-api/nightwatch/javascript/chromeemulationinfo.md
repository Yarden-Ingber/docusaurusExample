# ChromeEmulationInfo class
Objects of this type are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.


### Constructor 
### chromeEmulationInfo property
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by emulating a device using Chrome mobile emulation.
Pass an instances of this class to [addBrowser](./configuration#addbrowser-method) in order to configure the mobile device defined by the parameters to the method.

#### Syntax 
 ``` 
obj = { chromeEmulationInfo: value };
 ``` 
 
 Type: 
 `{ deviceName: | [DeviceName](./devicename) | "BlackBerry Z30" | "Blackberry PlayBook" | "Galaxy A5" | "Galaxy Note 10" | "Galaxy Note 10 Plus" | "Galaxy Note 2" | "Galaxy Note 3" | "Galaxy Note 4" | "Galaxy Note 8" | "Galaxy Note 9" | "Galaxy S10" | "Galaxy S10 Plus" | "Galaxy S3" | "Galaxy S5" | "Galaxy S8" | "Galaxy S8 Plus" | "Galaxy S9" | "Galaxy S9 Plus" | "Kindle Fire HDX" | "LG G6" | "LG Optimus L70" | "Laptop with HiDPI screen" | "Laptop with MDPI screen" | "Laptop with touch" | "Microsoft Lumia 550" | "Microsoft Lumia 950" | "Nexus 10" | "Nexus 4" | "Nexus 5" | "Nexus 5X" | "Nexus 6" | "Nexus 6P" | "Nexus 7" | "Nokia Lumia 520" | "Nokia N9" | "OnePlus 7T" | "OnePlus 7T Pro" | "Pixel 2" | "Pixel 2 XL" | "Pixel 3" | "Pixel 3 XL" | "Pixel 4" | "Pixel 4 XL" | "iPad" | "iPad 6th Gen" | "iPad 7th Gen" | "iPad Air 2" | "iPad Mini" | "iPad Pro" | "iPhone 11" | "iPhone 11 Pro" | "iPhone 11 Pro Max" | "iPhone 4" | "iPhone 5/SE" | "iPhone 6/7/8" | "iPhone 6/7/8 Plus" | "iPhone X" | "iPhone XR" | "iPhone XS" | "iPhone XS Max"; screenOrientation?: [ScreenOrientation](./screenorientation) | "landscape" | "portrait"; };` 


 #### Remarks 
The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.