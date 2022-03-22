# Feature enum
Enable optional Eyes features by passing values defined by this Enum to [Configuration.setFeatures](./configuration#setfeatures-method). 
###### - NO_SWITCH_WITHOUT_FRAME_CHAIN 
 This option may help in cases where rendering fails because of a clash between the test program's use of the WebDriver to access frames and the SDK's attempt to take a screenshot.

The recommended way to access the Selenium WebDriver is as follows:

    originalWebDriver = new ChromeDriver();
    WebDriver webDriver = eyes.open(originalWebDriver, appName, testName, viewport)
    webDriver.get(url);
    

The code creates a WebDriver instance (originalWebDriver) and passes this to the method [Eyes.open](./eyes#open-method). The method returns a clone of originalWebDriver that the test assigns to the variable webDriver. Thereafter, the program should use webDriver to access Selenium and not originalWebDriver.

This pattern enables Eyes to be aware of changes in the state of the browser, and it can use this information during the screen capture process.

If the test must use the originalWebDriver object and not webDriver, this can cause the screen capture to fail. If this happens, we recommend that you try to eliminate such failures by calling [Configuration.setFeatures](./configuration#setfeatures-method), passing as a parameter the value [Feature.NO\_SWITCH\_WITHOUT\_FRAME\_CHAIN](#). 
 ###### - USE_PREDEFINED_DEVICE_INFO 
 If this feature is set, then Eyes uses internal information regarding mobile devices instead of the information provided by Appium.

Some versions of Appium have inaccurate information, such as screen size and pixel scale ratio, on certain mobile devices. If you have issues with capturing correct images on a mobile device, try calling [Configuration.setFeatures](./configuration#setfeatures-method), passing a value of [Feature.USE\_PREDEFINED\_DEVICE\_INFO](#), for example:

    suiteConfig.setFeatures(Feature.USE_PREDEFINED_DEVICE_INFO)
    This instructs Eyes to use information stored in Eyes about the mobile devices that have been tested and are known to work correctly. 
 