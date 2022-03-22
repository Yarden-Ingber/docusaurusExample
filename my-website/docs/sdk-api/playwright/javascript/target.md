# Target class
This class provides methods that are used to
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
 
 Selector

Used to identify an HTML element defined as string|{selector:string;type:string}.
        
 ####  Parameters 
 ###### context 
  
 Type:{ 
       frame: ElementHandle | Selector | string | number; 
       scrollRootElement?: ElementHandle | Selector; 
     };  
  ######  
 A literal object that defines parameters for this call: 
  
 frame\_ele 
  
 Type:ElementHandle 
  ######  
 The element that contains the frame to be checked. 
  
 An element object whose bounding rectangle defines the frame to check. 
  
 scrollRootElement\_ele 
  ######  
 Type:ElementHandle \[Optional\] 
  
 Normally, Eyes will select the most appropriate element to scroll to execute the [fully](./checksettings#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly. 
  
 An element that should be scrolled to access the frame to be checked. 
  ######  
 scrollRootElement\_sel 
  
 Type:Selector \[Optional\] 
  
 Normally, Eyes will select the most appropriate element to scroll to execute the [fully](./checksettings#fully-method) method. You can use the [scrollRootElement](./checksettings#scrollrootelement-method) method to specify the element to scroll explicitly. 
  ######  
 A selector to an element that should be scrolled to access the frame to be checked. 
  
 #### Type definitions 
  
 Selector 
  ######  
 Used to identify an HTML element defined as string|{selector:string;type:string}. 
  
 frame\_sel 
  
 Type:Selector 
  ######  
 The element that contains the frame to be checked. 
  
 A selector to an element object whose bounding rectangle defines the frame to check. 
  
 #### Type definitions 
  ######  
 Selector 
  
 Used to identify an HTML element defined as string|{selector:string;type:string}. 
  
 frame\_str 
  ######  
 Type:string 
  
 The element that contains the frame to be checked. 
  
 The name or id of the required frame. 
  ######  
 frame\_num 
  
 Type:number 
  
 The element that contains the frame to be checked. 
  ######  
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
  
 Type:ElementHandle 
  
  ###### The region to be checked. 
  
 An element object whose bounding rectangle defines the area to check. 
  
 region\_sel 
  
  ###### Type:Selector 
  
 The region to be checked. 
  
 A selector to an element object whose bounding rectangle defines the area to check. 
  
  ###### Type definitions 
  
 Selector 
  
 Used to identify an HTML element defined as string|{selector:string;type:string}. 
  
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