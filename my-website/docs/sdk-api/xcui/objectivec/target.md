# Target class
This class provides methods that are used to
Once you create a [XCUICheckSettings](./checksettings) object using one of the factory methods defined by this class, you can configure the checkpoint by calling other methods from the [XCUICheckSettings](./checksettings) class, chaining them one after the other using the '.' operator. 
 ### Import statement 
``` 
@import EyesXCUI
 
 ``` 
 
### element method
Configure [checkWithTag](./eyes#check-method) to verify only the bounding region of an element in the display.

#### Syntax 
 ##### Call syntax 
 ``` 
[eyes checkWithTag:@'Check element' andSettings:[Target element:element]]
 ``` 
 
 ##### Declaration 
 ``` 
(XCUICheckSettings *)element:(XCUIElement *)element 
 ``` 

 #### Parameters 
 ###### element 
  
 Type:XCUIElement\* 
  
 The element for which region should be visually checked. 
  
 #### Return value 
Type: [XCUICheckSettings](./checksettings)\* 
### region method
Configure [checkWithTag](./eyes#check-method) to match a region or element in a window, instead of the entire window.

#### Syntax 
 ##### Call syntax 
 ``` 
XCUICheckSettings* target =  [ Target region  : region   ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(XCUICheckSettings *)region:(Region *)region 
 ``` 

 #### Parameters 
 ###### region 
  
 Type:[Region](./region)\* 
  
 The region to be checked. 
  
 #### Return value 
Type: [XCUICheckSettings](./checksettings)\* 
### window method
Configure [checkWithTag](./eyes#check-method) to match the entire window.

#### Syntax 
 ##### Call syntax 
 ``` 
XCUICheckSettings* target =  [ Target window    ]
;
 ``` 
 
 ##### Declaration 
 ``` 
(XCUICheckSettings *)window 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [XCUICheckSettings](./checksettings)\*