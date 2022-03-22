# Target class
This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [check](./eyes#check-method) method.
Once you create a [EspressoCheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [EspressoCheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
import com.applitools.eyes.android.espresso.fluent.Target;
 
 ``` 
 
### fragment method
Configure [Eyes.check](./eyes#check-method) to match a fragment.

#### Syntax 
 ``` 
eyes.check(Target.fragment())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [EspressoCheckSettings](./checksettings)
        
 ####  Remarks 
The id of the fragment should be provided by the Fluent method [id](./checksettings#id-method)(), for example:

    eyes.check(Target.fragment().id(fragId));

### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](#googlemap-method) or [Target.fragment](#) as well. 
### googleMap method
Configure [Eyes.check](./eyes#check-method) to match a GoogleMap.

#### Syntax 
 ``` 
eyes.check(Target.googleMap().id(mapId);
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [EspressoCheckSettings](./checksettings)
        
 ####  Remarks 
The id of the googlemap should be provided by the Fluent method [id](./checksettings#id-method)(), for example:

    eyes.check(Target.googleMap().id(mapId)If the googleMap is not of the type `SupportMapFragment` then you should also call [isNotSupportGoogleMap](./checksettings#isnotsupportgooglemap-method).

    eyes.check(Target.googleMap().id(mapId).isNotSupportGoogleMap();

### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#region-method), [Target.googleMap](#) or [Target.fragment](#fragment-method) as well. 
### region method
Configure [check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.check(Target.region(region))
eyes.check(Target.region(matcher))
eyes.check(Target.region(view))
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region) 
  
 The region to be checked. 
  
  ###### matcher 
  
 Type:Matcher 
  
 The Matcher types can be any of the following Hamcrest Matchers: ViewMatcher, RootMatcher, LayoutMatcher or PreferenceMatcher 
  
  ###### view 
  
 Type:View 
  
 An instance of the Android view class 
  
 #### Return value 
Type: [EspressoCheckSettings](./checksettings)
        
 ####  Remarks 
### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#window-method) target, but they apply to a [Target.region](#), [Target.googleMap](#googlemap-method) or [Target.fragment](#fragment-method) as well. 
### window method
Configure [check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.check(Target.window())
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [EspressoCheckSettings](./checksettings)
        
 ####  Remarks 
### Handling popups and dialogs

If your checkpoints includes a popup or dialog then the way you create the checkpoint depends on which layers you want to capture as illustrated in the code below:

    
    eyes.check('viewport only', Target.window()); 
    eyes.check('dialog only',Target.window().dialog()); 
    eyes.check('popup only',Target.window().popup());
    eyes.check('viewport and popup or dialog',Target.window().includeAllLayers()); 
    

The example illustrate the behavior with a [Target.window](#) target, but they apply to a [Target.region](#region-method), [Target.googleMap](#googlemap-method) or [Target.fragment](#fragment-method) as well.