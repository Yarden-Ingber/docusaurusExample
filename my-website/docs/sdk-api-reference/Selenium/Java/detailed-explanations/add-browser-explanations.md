# AddBrowser
Request that the checkpoint be rendered by the Ultrafast Grid using a particular target desktop or mobile device browser.

The following types of targets can be specified by passing different types of parameters:

* Desktop browser: The page is rendered using a desktop browser you specify. The set of supported browsers is defined by the enum `BrowserType`. To request a browser from this list pass a `DesktopBrowserInfo` object, as shown for parameter desktopBrowserInfo below. You can also request a browser directly using the browserType parameter as shown below.
* Emulated mobile device: The page is rendered using Chrome device emulation. The set of supported devices is defined by the enum `DeviceName`. To request a device from this list pass a `ChromeEmulationInfo` object, as shown for parameter chromeEmulationInfo below.
* Simulated iOS mobile device: The page is rendered using a Safari browser running on a mobile device simulator. The set of supported devices is defined by the enum `IosDeviceName`. To request a device from this list pass an `IosDeviceInfo` object, as shown for parameter iosDeviceInfo below.
When requesting a Desktop browser you also specify the required viewport size. When specifying a mobile device the viewport size is based on the device screen size, and you simply specify if you want to render using portrait (vertical) or landscape (horizontal) screen orientation.

You may define multiple targets with different browsers/devices and viewports/orientations by calling this method as many times as required. Eyes will produce a test results for each such configuration. Alternatively, pass a list of browsers and devices to the method `addBrowsers`.

## Syntax

```java
Configuration configval = config.addBrowser(desktopBrowserInfo);

Configuration configval = config.addBrowser(chromeEmulationInfo);

Configuration configval = config.addBrowser(iosDeviceInfo);

Configuration configval = config.addBrowser(width, height, browserType, baselineEnvName);

Configuration configval = config.addBrowser(width, height, browserType);
```

## Parameters
desktopBrowserInfo<br/>
Type: `DesktopBrowserInfo`<br/>
Which desktop browser type and viewport size to use.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(new DesktopBrowserInfo(viewPortWidth, viewPortHeight, BrowserType.EDGE_CHROMIUM)) 
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

chromeEmulationInfo<br/>
Type: `ChromeEmulationInfo`<br/>
Which mobile device to emulate and its vertical or horizontal orientation.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(new ChromeEmulationInfo(DeviceName.Galaxy_S5, ScreenOrientation.LANDSCAPE)) 
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

iosDeviceInfo<br/>
Type: `IosDeviceInfo`<br/>
Defines the mobile device to be simulated and its vertical or horizontal orientation.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(new IosDeviceInfo(IosDeviceName.iPhone_11, ScreenOrientation.PORTRAIT)) 
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

width<br/>
Type: `int`<br/>
The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

Use this in conjunction with the browserType parameter.

height<br/>
Type: `int`<br/>
The height of the browser viewport for this target. There is no height limit.

Use this in conjunction with the browserType parameter.

browserType<br/>
Type: `BrowserType`<br/>
The type of browser for this target.

```java
/* test suite setup */  
    suiteConfig = new Configuration() 
        .addBrowser(viewPortWidth, viewPortHeight, BrowserType.CHROME)  
/* ... other configurations */  ; 
    /*
     * Assign the configuration to all newly created Eyes instances
     */
    eyes = new Eyes(runner);
    eyes.setConfiguration(suiteConfig);
```

baselineEnvName<br/>
Type: `String`<br/>
The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

Use this in conjunction with the browserType parameter.

## Return value
Type: `Configuration`<br/>
The value returned is the object that called the method. This allows you to use a fluent style to call the `setXXXX` methods of the `Configuration` class.

## Remarks
By default, the entire page is rendered. The viewport width and height parameters impact the baseline that is chosen, unless the baseline environment configuration or parameter has been provided. The viewport passed to the `Eyes.open` method does not impact the baseline used, but could impact the page layout if the page has any viewport size-sensitive factors such as HTML, CSS or Javascript.