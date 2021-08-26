# ChromeEmulationInfo
Objects of this class are used to configure the Ultrafast Grid to render checkpoints by emulating a device by using Chrome mobile emulation.

## ChromeEmulationInfo
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by emulating a device using Chrome mobile emulation.

Pass an instances of this class to [addBrowser](./Configuration#addbrowser) in order to configure the mobile device defined by the parameters to the method.

#### Syntax

```java
ChromeEmulationInfo obj = new ChromeEmulationInfo(deviceName, screenOrientation);
```

#### Parameters
deviceName<br/>
Type: [DeviceName](./DeviceName)<br/>
The name of the device, a value from the set of devices defined by [DeviceName](./DeviceName).

screenOrientation<br/>
Type: [ScreenOrientation](./ScreenOrientation)<br/>
If the device should be rendered in portrait (vertical) or landscape (horizontal) orientation.

#### Return value
Type: [ChromeEmulationInfo](./ChromeEmulationInfo)

#### Remarks
The viewport width and height used to identify the baseline, is defined implicitly by the screen characteristics of the device.

## getDeviceName
Use this method to retrieve the name of the device.

#### Syntax

```java
String value = obj.getDeviceName();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getScreenOrientation
Use this method to retrieve the secreen orientation (portrait or landscape).

#### Syntax

```java
ScreenOrientation value = obj.getScreenOrientation();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [ScreenOrientation](./ScreenOrientation)

## setDeviceName
Use this method to set the name of the device.

#### Syntax

```java
obj.setDeviceName(deviceName);
```

#### Parameters
deviceName<br/>
Type: [DeviceName](./DeviceName)<br/>
deviceName

#### Return value
Type: `void`

## setScreenOrientation
Use this method to set if the device is portrait or landscape

#### Syntax

```java
obj.setScreenOrientation(screenOrientation);
```

#### Parameters
screenOrientation<br/>
Type: [ScreenOrientation](./ScreenOrientation)<br/>
screenOrientation

#### Return value
Type: `void`