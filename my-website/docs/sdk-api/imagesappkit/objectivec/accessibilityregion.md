# AccessibilityRegionByRectangle class
An object that stores information about an accesibility region.
 
 ### Import statement 
``` 
@import EyesImagesAppKit
 
 ``` 
### Constructor 
### initWithLeft method
Create a region with a defined accessibility region type.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityRegionByRectangle* obj = [[AccessibilityRegionByRectangle alloc] initWithLeft  : left top: top width: width height: height regionType: type   ];
 ``` 
 
 ##### Declaration 
 ``` 
(instancetype)initWithLeft:(NSInteger)left
                         top:(NSInteger)top
                       width:(NSInteger)width
                      height:(NSInteger)height
                  regionType:(AccessibilityRegionType)type 
 ``` 

 #### Parameters 
 ###### left 
  
 Type:NSInteger 
  
 The coordinate of the left edge of a rectangular area whose accessibility is being defined. 
  
  ###### top 
  
 Type:NSInteger 
  
 The coordinate of the top edge of a rectangular area whose accessibility is being defined. 
  
  ###### width 
  
 Type:NSInteger 
  
 The width of the rectangular area whose accessibility is being defined. 
  
  ###### height 
  
 Type:NSInteger 
  
 The height of the rectangular area whose accessibility is being defined. 
  
  ###### type 
  
 Type:[AccessibilityRegionType](./accessibilityregiontype) 
  
 The type of accessibility region defined by the rectanglar area. 
  
 #### Return value 
Type: [AccessibilityRegionByRectangle](./accessibilityregion)\*

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).
        

 
 ### height property
Use this property to retrieve the height of the rectangular area for which accessibility is being defined.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = obj.height
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) NSInteger height 
 ``` 
 
 Type:NSInteger

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### left property
Use this property to retrieve the coordinate of the left edge of the rectangular area for which accessibility is being defined.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = obj.left
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) NSInteger left 
 ``` 
 
 Type:NSInteger

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### region property
Use this property to retrieve the rectangular area for which accessibility is being defined.

#### Syntax 
 ##### Call syntax 
 ``` 
Region* value = obj.region
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) Region *region 
 ``` 
 
 Type:[Region](./region)\*

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### top property
Use this property to retrieve the coordinate of the top edge of a rectangular area for which accessibility is being defined.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = obj.top
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) NSInteger top 
 ``` 
 
 Type:NSInteger

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### type property
Use this property to retrieve the type of accessibility region defined by the rectangle.

#### Syntax 
 ##### Call syntax 
 ``` 
AccessibilityRegionType value = obj.type
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) AccessibilityRegionType type 
 ``` 
 
 Type:[AccessibilityRegionType](./accessibilityregiontype)
        
 ####  Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html). 
 ### width property
Use this property to retrieve the width of the rectangular area for which accessibility is being defined.

#### Syntax 
 ##### Call syntax 
 ``` 
NSInteger value = obj.width
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, assign, nonatomic) NSInteger width 
 ``` 
 
 Type:NSInteger

 #### Remarks 
For more information about the Contrast advisor feature see [Contrast advisor](https://applitools.com/docs/features/contrast-accessibility.html).