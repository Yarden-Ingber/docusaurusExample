# DesktopBrowserInfo

Objects of this class are used to configure the Ultrafast Grid to render checkpoints by rendering them on a particular desktop browser.

## DesktopBrowserInfo
Create an object that can be used to configure the Ultrafast Grid to render checkpoints by rendering the image on a particular desktop browser.

#### Syntax

```java
DesktopBrowserInfo obj = new DesktopBrowserInfo(viewportSize, browserType, baselineEnvName);

DesktopBrowserInfo obj = new DesktopBrowserInfo(viewportSize, browserType);

DesktopBrowserInfo obj = new DesktopBrowserInfo(width, height);

DesktopBrowserInfo obj = new DesktopBrowserInfo(width, height, browserType, baselineEnvName);

DesktopBrowserInfo obj = new DesktopBrowserInfo(width, height, browserType);
```

#### Parameters
viewportSize<br/>
Type: [RectangleSize](./RectangleSize)<br/>
The viewport size of the browser, this can impact the layout of the page. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

browserType<br/>
Type: [BrowserType](./RectangleSize)<br/>
The browser type, a value from the set of supported devices defined by the type [BrowserType](./RectangleSize).

baselineEnvName<br/>
Type: `String`<br/>
The name of the baseline environment. If provided, then the viewport, host app (browser), and OS that define the baseline are defined by the baseline environment name and not by the execution environment. The name should already be defined in the Test Manager. If it is not defined, then it will be created based on the execution environment of the first test that uses that name. For more information see [Running cross-environment tests](https://applitools.com/docs/topics/general-concepts/working-withcross-environment-tests.html).

width<br/>
Type: `int`<br/>
The width of the browser viewport for this target. The maximum viewport width for all browsers is 5120. If this limit is exceeded, then execution of the checkpoint will fail.

height<br/>
Type: `int`<br/>
The height of the browser viewport for this target. There is no height limit.

#### Return value
Type: [DesktopBrowserInfo](./DesktopBrowserInfo)

## getRenderBrowserInfo
Use this method to retrieve the configured Browsertype.

#### Syntax

```java
RenderBrowserInfo value = obj.getRenderBrowserInfo();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [RenderBrowserInfo](./RenderBrowserInfo)