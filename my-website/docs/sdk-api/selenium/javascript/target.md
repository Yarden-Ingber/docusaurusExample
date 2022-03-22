# Target class

This class provides methods that are used to define and configure the target for the [check](./eyes#check-method) method.
Once you create a [Target](#) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [Target](#) class, chaining them one after the other using the '.' operator. 
 ### Require statement 
``` 
const {Target} = require('const EyesSDK = require('eyes.selenium'))');
 
 ``` 
 
### floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ``` 
eyes.check(Target.floating(floatingRegion));
 ``` 

 #### Parameters 
 ###### floatingRegion 
  
 Type: 
  
     FloatingRegion|FloatingElement 
  
  ###### A comma-separated list of FloatingRegion objects or FloatingElement objects. A FloatingRegion is an object defined as follows: 
  
      
     {left: number, top: number, width: number, height: number, 
     maxLeftOffset: number, maxRightOffset: number, maxUpOffset: number, maxDownOffset: number} 
     A FloatingElement is an object defined as follows: 
  ######  
      
     {element: webdriver.WebElement|EyesRemoteWebElement|webdriver.By, 
     maxLeftOffset: number, maxRightOffset: number, maxUpOffset: number, maxDownOffset: number} 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. Create regions using the GeometryUtils.js in eyes.utils. 
### frame method
Configure [check](./eyes#check-method) to match an iframe in a window or another iframe.
You may only address one frame using this method. This may be a nested frame, but you should use the Selenium driver returned by the open() call to navigate to the correct frame.

#### Syntax 
 ``` 
eyes.check(Target.frame(frame));
 ``` 

 #### Parameters 
 ###### frame 
  
 Type: 
  
     EyesRemoteWebElement|webdriver.WebElement|string 
  
  ###### The element that contains the frame to be checked. 
  
 #### Return value 
Type: [Target](./target) 
### fully method
Defines if the screenshot for this target should be extended to contain the entire element or region being checked, even if it extends the borders of the viewport.

#### Syntax 
 ``` 
eyes.check(Target.fully(stitchContent));
 ``` 

 #### Parameters 
 ###### stitchContent 
  
 Type:boolean 
  
 If this parameter has a value of true, then Eyes uses scrolling and stitching to capture the entire page. If it's false, then only the viewport will be captured. If the method is called without a parameter, then the default is true. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
This method overrides the global default or the most recent value set by the [Eyes.setForceFullPageScreenshot](./eyes#setforcefullpagescreenshot-method) method. If stitching is done, then the stitch mode used, [StitchMode.CSS](./stitchmode-method) or [StitchMode.Scroll](./stitchmode-method) is determined by the global default or the value set using, [Eyes.setStitchMode](./eyes#setstitchmode-method) You may only call this method once in a given target. 
### ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.check(Target.ignore(ignoreRegion));
 ``` 

 #### Parameters 
 ###### ignoreRegion 
  
 Type: 
  
     Region|webdriver.WebElement|EyesRemoteWebElement|webdriver.By 
  
  ###### A locator to the region. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions. 
### ignoreCaret method
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ``` 
eyes.check(Target.ignoreCaret(ignoreCaret));
 ``` 

 #### Parameters 
 ###### ignoreCaret 
  
 Type:boolean 
  
 If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. This method overrides the global default setting or the setting chosen explicitly for the current target using [Eyes.setIgnoreCaret](./eyes#setignorecaret-method) method. 
### matchLevel method
Use this method to set the default match level (the type of matching) to use for this target when matching the captured image to the baseline image.

#### Syntax 
 ``` 
eyes.check(Target.matchLevel(matchLevel));
 ``` 

 #### Parameters 
 ###### matchLevel 
  
 Type:[MatchLevel](./matchlevel) 
  
 Available match level values are: 
  
  ###### *   [None](./matchlevel) 
 *   [Strict](./matchlevel) 
 *   [Layout](./matchlevel) 
 *   [Content](./matchlevel) 
 *   [Exact](./matchlevel) 
  
  ###### For a description of these match levels and the different ways to apply them to tests, checkpoints, and regions, see [Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
The value provided here overrides the default match level, or the global value set for this target using [Eyes.setMatchLevel](./eyes#setmatchlevel-method).

For a full description of the affect of each match levels and the different ways to apply them to tests, checkpoints and regions, [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html). 
### region method
Configure [check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.check(Target.region(region, frame));
 ``` 

 #### Parameters 
 ###### region 
  
 Type: 
  
     Region|webdriver.WebElement|EyesRemoteWebElement|webdriver.By 
  
  ###### The region to be checked. 
  
 frame 
  
 Type: 
  
  ######     webdriver.WebElement|EyesRemoteWebElement|string 
  
 A representation of the iframe that encloses the region. Pass null if the region is not in a frame. 
  
 #### Return value 
Type: [Target](./target) 
### timeout method
Defines the timeout to use when acquiring and comparing screenshots for this target.

#### Syntax 
 ``` 
eyes.check(Target.timeout(ms));
 ``` 

 #### Parameters 
 ###### ms 
  
 Type:number 
  
 The timeout to use in milliseconds. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. The timeout value provided here overrides the default value or the value set by [setDefaultMatchTimeout](./eyes#setmatchtimeout-method) for the current target. Passing this method a value of zero disables the timeout mechanism. 
### window method
Configure [check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.check(Target.window());
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [Target](./target)