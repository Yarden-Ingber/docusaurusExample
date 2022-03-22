# VisualGridOption class
An object of this type represents a configuration key/value pair, to be passed to the Ultrafast Grid.
 
 ### Import statement 
``` 
from applitools.common import VisualGridOption
 
 ``` 

### Constructor 
### VisualGridOption method
Create an option key/value pair to pass to the Visual Grid.

#### Syntax 
 ``` 
obj = VisualGridOption(key, value)
 ``` 

 #### Parameters 
 ###### key 
  
 Type:Text 
  
 The option key. 
  
  ###### value 
  
 Type:Any 
  
 The option value. 
  
 #### Return value 
Type: None

 #### Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of False to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of True or False:

*   Setting a value of True instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of False instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.set\_visual\_grid\_options](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.visual\_grid\_options](./checksettings#visualgridoptions-method).
        
 ####  Example 
Pass an object of the type [VisualGridOption](./visualgridoption) to the [Configuration.set\_visual\_grid\_options](./configuration#setvisualgridoptions-method) method to set the default value of an option for an entire test suite or test.

Python

    # test suite setup  
        suite_config = (Configuration()  
            .set_visual_grid_options(VisualGridOption("polyfillAdoptedStyleSheets", True))  
            # ... other configurations    
         )  
        #
        # Assign the configuration to all newly created Eyes instances
        #
        eyes = Eyes(runner)
        eyes.set_configuration(suite_config) 

The option value can be overridden for a given checkpoint using the method [SeleniumCheckSettings.visual\_grid\_options](./checksettings#visualgridoptions-method).

Python

    eyes.check(
        Target.window()
        .visual_grid_options(VisualGridOption("polyfillAdoptedStyleSheets", True)))

.
        

 
 ### key property
Use this property to set and retrieve the Visual Grid option key.

#### Syntax 
 ``` 
obj.key  = value
value = obj.key
 ``` 
 
 Type:Text 
key 
 ### value property
Use this property to set and retrieve the Visual Grid option value.

#### Syntax 
 ``` 
obj.value  = value
value = obj.value
 ``` 
 
 Type:Any 
The option value.