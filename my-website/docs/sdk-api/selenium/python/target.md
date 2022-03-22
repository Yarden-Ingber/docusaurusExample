# Target class
This class provides methods that are used to define and configure the checkpoint target for methods such as [check\_window](./eyes#checkwindow-method) and [check\_region](./eyes#checkregion-method).
Once you create a [Target](#) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [Target](#) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
from from applitools.selenium import Eyes, Target,from applitools.selenium.visual_grid import VisualGridRunner import Target
 
 ``` 
 
### floating method
Add one more floating region to this target.
When you define a floating region, you define an inner region and offsets outwards from the inner region in all directions to form an outer region. All the pixels of the outer region will be considered as matched if the pixels of the checkpoint inner region match at least one area in the baseline outer region.

#### Syntax 
 ``` 
eyes.check_window('tag',timeout,Target.floating(regions))
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:Union\[[FloatingRegion](./floatingregion),[FloatingRegionByElement](./floatingregionbyelement),[FloatingRegionBySelector](./floatingregionbyselector)\] 
  
 One or more region definitions. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain; each call defines a different floating region. Floating regions may not overlap each other or other types of regions, such as ignore or match level regions. 
### ignore method
Add one or more ignore regions to this target (i.e. areas whose content matches anything).

#### Syntax 
 ``` 
eyes.check_window('tag',timeout,Target.ignore(regions))
 ``` 

 #### Parameters 
 ###### regions 
  
 Type:Union\[[Region](./region),[IgnoreRegionByElement](./ignoreregionbyelement),[IgnoreRegionBySelector](./ignoreregionbyselector)\] 
  
 One or more region definitions. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may call this method multiple times in a given chain.

Ignore regions should not overlap each other or other types of regions such as floating or match level regions. 
### ignore_caret method
Use this method to tell Eyes that for this target it should detect mismatch artifacts caused by a blinking cursor and not report them as mismatches.
If your UI includes a blinking cursor, then sometimes the cursor will be captured in the screenshot, and sometimes it won't be captured. This can lead to spurious mismatch reports. If you call this method, then Eyes will analyze the mismatches and remove artifacts that seem to have been introduced by a blinking cursor.

#### Syntax 
 ``` 
eyes.check_window('tag',timeout,Target.ignore_caret(ignore))
eyes.check_window('tag',timeout,Target.ignore_caret())
 ``` 

 #### Parameters 
 ###### ignore 
  
 Type:bool \[Optional : default = True \] 
  
 If this parameter has a value of true, then Eyes will detect artifacts caused by a blinking cursor and will not report a mismatch for differences caused by these artifacts. If it has a value of , then Eyes will not try to detect artifacts caused by blinking cursors. If no parameter is passed then the default value is true - so the cursor artifacts will be ignored. 
  
 #### Return value 
Type: [Target](./target)

The value returned is the object that called the method. You can use it to call other methods supported by the object class.
        
 ####  Remarks 
You may only call this method once in a given chain. 
### send_dom method
Use this method to set if DOM information should be sent for checkpoints.
The availability of the DOM is necessary for advanced server analysis, for example the RCA feature. See [Root cause analysis](https://applitools.com/docs/topics/test-manager/viewers/root-cause-analysis.html) for more information.

#### Syntax 
 ``` 
eyes.check_window('tag',timeout,Target.send_dom(use))
eyes.check_window('tag',timeout,Target.send_dom())
 ``` 

 #### Parameters 
 ###### use 
  
 Type:tbdParamType \[Optional : default = True \] 
  
 A value of True means that DOM information will be sent. A value of False means that DOM information will not be sent. 
  
 #### Return value 
Type:

 #### Remarks 
Sending DOM information is enabed by default, so use this method only if you have to disable it.