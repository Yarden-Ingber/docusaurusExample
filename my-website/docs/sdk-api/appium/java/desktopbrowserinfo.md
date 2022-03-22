# DesktopBrowserInfo class
Objects of this class are used to configure the Ultrafast Grid to render checkpoints by rendering them on a particular desktop browser.
 
 ### Import statement 
``` 
import com.applitools.eyes.visualgrid.model.DesktopBrowserInfo;
 
 ``` 
### Constructor 
### DesktopBrowserInfo method
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by rendering the image on a particular desktop browser.

#### Syntax 
 ``` 
DesktopBrowserInfo obj = new DesktopBrowserInfo(viewportSize, browserType, baselineEnvName);

DesktopBrowserInfo obj = new DesktopBrowserInfo(viewportSize, browserType);

DesktopBrowserInfo obj = new DesktopBrowserInfo(width, height);

DesktopBrowserInfo obj = new DesktopBrowserInfo(width, height, browserType, baselineEnvName);

DesktopBrowserInfo obj = new DesktopBrowserInfo(width, height, browserType);
 ``` 

 #### Parameters 
 ###### viewportSize 
  
 Type:[RectangleSize](./rectanglesize) 
  
 The viewport size of the browser, this can impact the layout of the page. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail. 
  
  ###### browserType 
  
 Type:[BrowserType](./browsertype) 
  
 The browser type, a value from the set of supported devices defined by the type [BrowserType](./browsertype). 
  
  ###### baselineEnvName 
  
 Type:String 
  
 The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html). 
  
  ###### width 
  
 Type:int 
  
 The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail. 
  
  ###### height 
  
 Type:int 
  
 The height of the browser viewport for this target. There is no height limit. 
  
 #### Return value 
Type: [DesktopBrowserInfo](./desktopbrowserinfo) 
### getRenderBrowserInfo method
Use this method to retrieve the configured Browsertype.

#### Syntax 
 ``` 
RenderBrowserInfo value = obj.getRenderBrowserInfo();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [RenderBrowserInfo](./renderbrowserinfo)