# VisualGridOption class
An object of this type represents a configuration key/value pair, to be passed to the Ultrafast Grid.

### Constructor 
### VisualGridOption method
Create an option key/value pair to pass to the Visual Grid.

#### Syntax 
 ``` 
VisualGridOption obj = new VisualGridOption(key, value);
 ``` 

 #### Parameters 
 ###### key 
  
 Type:string 
  
 The option key. 
  
  ###### value 
  
 Type:object 
  
 The option value. 
  
 #### Return value 
Type: [VisualGridOption](./visualgridoption)
        
 ####  Remarks 
The following configuration key/value pairs are currently supported:

'chromeHeadless'

Normally, the Ultrafast Grid renders its images using Headless Chrome. There are cases where the behavior of Headless Chrome is different from that of regular Chrome browser, and if the baseline was created with a regular Chrome browser, the differences will be found. Set this option to a value of false to instruct the Ultrafast Grid to use a regular Chrome browser instead of the Headless Chrome browser, so as to eliminate differences that arise because of the different types of Chrome browser.

'polyfillAdoptedStyleSheets'

Adopted Stylesheets are a way to create and distribute reusable styles when using a Shadow DOM. Adopted Stylesheets are not supported by all browsers, so their use may cause mismatches when doing cross-browser validation. By default, when the Ultrafast Grid detects that a page being checked uses Adopted Stylesheets, it will not render that checkpoint, the check will fail, and the test will be aborted. In the Test Manager, the test results for that run will have an Aborted status, and the step that failed will have a Missing status.

To enable rendering of checkpoints that include Adopted Stylesheets, and to ensure that the test can complete successfully, you need to explicitly set the Ultrafast Grid option polyfillAdoptedStyleSheets to a value of true or false:

*   Setting a value of true instructs the Ultrafast Grid to polyfill Adopted Stylesheets.
*   Setting a value of false instructs the Ultrafast Grid to render the page without polyfilling Adopted Stylesheets.

You can set this option globally using the method [Configuration.SetVisualGridOptions](./configuration#setvisualgridoptions-method)

You can override the global value for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](./checksettings#visualgridoptions-method).
        
 ####  Example 
Pass an object of the type [VisualGridOption](./visualgridoption) to the [Configuration.SetVisualGridOptions](./configuration#setvisualgridoptions-method) method to set the default value of an option for an entire test suite or test.

C#

    /* test suite setup */  
        suiteConfig = (Configuration) new Configuration() 
            .SetVisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true))   
            /* ... other configurations */  ; 
        /* 
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.SetConfiguration(suiteConfig);

The option value can be overridden for a given checkpoint using the method [SeleniumCheckSettings.VisualGridOptions](./checksettings#visualgridoptions-method).

C#

    eyes.Check(
        Target.Window()
        .VisualGridOptions(new VisualGridOption("polyfillAdoptedStyleSheets", true)));

.
        

 
 ### Key property
Use this property to set and retrieve the Visual Grid option key.

#### Syntax 
 ``` 
string value; // give relevant initial value
obj.Key  = value;
value = obj.Key
 ``` 
 
 Type:string 
 ### Value property
Use this property to set and retrieve the Visual Grid option value.

#### Syntax 
 ``` 
object value; // give relevant initial value
obj.Value  = value;
value = obj.Value
 ``` 
 
 Type:object