# Target class
This class provides methods that are used to define the top level target (the entire window, region, element, frame, etc.) for the [check](./eyes#check-method) method.
Once you create a [CheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [CheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
### frame method
Configure [check](./eyes#check-method) to match an iframe in a window or another iframe.
Chain several calls to this method to navigate a hierarchical iframe tree. You can also chain a [region](#region-method) method to define that only a region in the frame should be matched and not the entire iframe.

#### Syntax 
 ``` 
eyes.check(Target.frame(context));
eyes.check(Target.frame(frame_ele, scrollRootElement_ele));
eyes.check(Target.frame(frame_ele));
eyes.check(Target.frame(frame_ele, scrollRootElement_sel));

eyes.check(Target.frame(frame_sel, scrollRootElement_ele));
eyes.check(Target.frame(frame_sel));
eyes.check(Target.frame(frame_sel, scrollRootElement_sel));

eyes.check(Target.frame(frame_str, scrollRootElement_ele));
eyes.check(Target.frame(frame_str));
eyes.check(Target.frame(frame_str, scrollRootElement_sel));

eyes.check(Target.frame(frame_num, scrollRootElement_ele));
eyes.check(Target.frame(frame_num));
eyes.check(Target.frame(frame_num, scrollRootElement_sel));
 ``` 
 
 Element

Used to identify an HTML element defined as |Applitools.WebdriverIO.Element|{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}.

Selector

Used to identify an HTML element defined as Applitools.WebdriverIO.Selector|string|By|{selector:string;type:string}.
        
 ####  Parameters 
 ###### context 
  
 Type:{ 
       frame: Element | Selector | string | number; 
       scrollRootElement?: Element | Selector; 
     };  
  ######  
 A literal object that defines parameters for this call: 
  
 #### Type definitions 
  
 Element 
  ######  
 Used to identify an HTML element defined as |Applitools.WebdriverIO.Element|{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}. 
  
 Selector 
  
 Used to identify an HTML element defined as Applitools.WebdriverIO.Selector|string|By|{selector:string;type:string}. 
  ######  
 frame\_ele 
  
 Type:Element 
  
 If this parameter is an integer, then it represent the frame index of the required frame. If it is a string, then it represents the name or id of the required frame. Otherwise, the frame is identifed by the passed By selector or WebElement. 
  ######  
 An element object whose bounding rectangle defines the frame to check. 
  
 #### Type definitions 
  
 Element 
  ######  
 Used to identify an HTML element defined as |Applitools.WebdriverIO.Element|{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}. 
  
 scrollRootElement\_ele 
  
 Type:Element \[Optional\] 
  ######  
 Normally, Eyes will select the most appropriate element to scroll to execute the [fully](./checksettings#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly. 
  
 An element that should be scrolled to access the frame to be checked. 
  
 #### Type definitions 
  ######  
 Element 
  
 Used to identify an HTML element defined as |Applitools.WebdriverIO.Element|{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}. 
  
 scrollRootElement\_sel 
  ######  
 Type:Selector \[Optional\] 
  
 Normally, Eyes will select the most appropriate element to scroll to execute the [fully](./checksettings#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly. 
  
 A selector to an element that should be scrolled to access the frame to be checked. 
  ######  
 #### Type definitions 
  
 Selector 
  
 Used to identify an HTML element defined as Applitools.WebdriverIO.Selector|string|By|{selector:string;type:string}. 
  ######  
 frame\_sel 
  
 Type:Selector 
  
 If this parameter is an integer, then it represent the frame index of the required frame. If it is a string, then it represents the name or id of the required frame. Otherwise, the frame is identifed by the passed By selector or WebElement. 
  ######  
 A selector to an element object whose bounding rectangle defines the frame to check. 
  
 #### Type definitions 
  
 Selector 
  ######  
 Used to identify an HTML element defined as Applitools.WebdriverIO.Selector|string|By|{selector:string;type:string}. 
  
 frame\_str 
  
 Type:string 
  ######  
 If this parameter is an integer, then it represent the frame index of the required frame. If it is a string, then it represents the name or id of the required frame. Otherwise, the frame is identifed by the passed By selector or WebElement. 
  
 The name or id of the required frame. 
  
 frame\_num 
  ######  
 Type:number 
  
 If this parameter is an integer, then it represent the frame index of the required frame. If it is a string, then it represents the name or id of the required frame. Otherwise, the frame is identifed by the passed By selector or WebElement. 
  
 The frame index of the required frame. 
  
 #### Return value 
Type: [CheckSettings](./checksettings) 
### region method
Configure [check](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ``` 
eyes.check(Target.region(region_obj));
eyes.check(Target.region(region_ele));
eyes.check(Target.region(region_sel));
 ``` 
 
 RegionPlain

Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain)
        
 ####  Parameters 
 ###### region\_obj 
  
 Type:RegionPlain 
  
 The region to be checked. 
  
  ###### The region is defined by the literal object RegionPlain. 
  
 #### Type definitions 
  
 RegionPlain 
  
  ###### Used to describe a position and rectangular region in an image. RegionPlain is defined as: [LocationPlain](./locationplain)&[RectangleSizePlain](./rectanglesizeplain) 
  
 region\_ele 
  
 Type:Element 
  
  ###### The region to be checked. 
  
 An element object whose bounding rectangle defines the area to check. 
  
 #### Type definitions 
  
  ###### Element 
  
 Used to identify an HTML element defined as |Applitools.WebdriverIO.Element|{ELEMENT:string}|{'element-6066-11e4-a52e-4f735466cecf':string}. 
  
 region\_sel 
  
  ###### Type:Selector 
  
 The region to be checked. 
  
 A selector to an element object whose bounding rectangle defines the area to check. 
  
  ###### Type definitions 
  
 Selector 
  
 Used to identify an HTML element defined as Applitools.WebdriverIO.Selector|string|By|{selector:string;type:string}. 
  
 #### Return value 
Type: [CheckSettings](./checksettings) 
### window method
Configure [check](./eyes#check-method) to match the entire window.

#### Syntax 
 ``` 
eyes.check(Target.window());
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [CheckSettings](./checksettings)