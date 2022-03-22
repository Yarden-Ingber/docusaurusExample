# VisualLocatorSettings class

Use the methods of this class to extend visual locators created using [VisualLocator](./visuallocator) by chaining them to each other using a fluent style API.
After you call one of the methods of [VisualLocator](./visuallocator-method) you can call methods in this class to add more locator names and to specify how many regions to return to [Eyes.locate](./eyes#locate-method). 
 ### Import statement 
``` 
import com.applitools.eyes.locators.VisualLocatorSettings;
 
 ``` 
 
### all method
To return all graphic instances defined by each locator, add this method to the chain of fluent [VisualLocatorSettings](./visuallocatorsettings) method calls.

#### Syntax 
 ``` 
List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
Map<String, List<Region>> locRegions4 = eyes.locate(VisualLocator.names(names_A).all());   
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings-method). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#names-method) to add more locator names, and [first](#first-method) or [all](#) to define if you want only the first instance of each locator or all the locators found.
        
 ####  Remarks
        
 The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.
 
 #### Example  
The example below includes two calls to the method [Eyes.locate](./eyes#locate-method). These calls illustrate two ways to specify the visual locators and two ways to specify how many locators to return.

Two ways of specifying visual locators are:

*   Pass a locator string to the method [name](#name-method).
*   Pass a list of strings to the method [names](#names-method).

You can call these methods multiple times to specify multiple locators names or multiple lists of locator names.

To specify how many regions to return per locator, append one of the following methods:

*   To retrieve a maximum of one region for each locator append a call to [first](#first-method).
*   To retrieve all regions for all locators append a call to ([all](#)).

Java

    //return a zero or one locator for each of the three locators defined as parameters to name()
    Map<String, List<Region>> locRegions8 = eyes.locate(
        VisualLocator.name("locator_a")
                     .name("locator_b")
                     .name("locator_c")
                     .first()); 
           
    //return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    List<String> locatorList1 = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
    List<String> locatorList2 = Arrays.asList(new String[]{"locator_2a", "locator_2b", "locator_2c"});
    Map<String, List<Region>> locRegions9 = eyes.locate(
        VisualLocator.names(locatorList1)
                     .names(locatorList2)
                     .name("another locator")
                     .all());
    //loop through all the locators and click on the center of their region
    locRegions7.forEach((locator,regions)-> {
        for (Region region : regions) {
            click(region.getLeft()+region.getWidth()/2, region.getTop()+region.getHeight()/2);
        }
    });

//... 
### first method
To return only one graphic instance defined by each locator, add this method to the chain of fluent [VisualLocatorSettings](./visuallocatorsettings) method calls.
This is the default setting.

#### Syntax 
 ``` 
List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
Map<String, List<Region>> locRegions5 = eyes.locate(VisualLocator.names(names_A).first()); 
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings-method). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#names-method) to add more locator names, and [first](#) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.
        
 ####  Remarks
        
 The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.
 
### name method
Use this method to specify a single visual locator name.

#### Syntax 
 ``` 
Map<String, List<Region>> locRegions7 = eyes.locate(VisualLocator.name("locator_b").name("locator_a")); 
 ``` 

 #### Parameters 
 ###### name 
  
 Type:String 
  
 The name of the locator. 
  
 #### Return value 
Type: [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings-method). You can chain additional calls to methods of this class in a fluent style, including [name](#-method) or [names](#names-method) to add more locator names, and [first](#first-method) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.
        
 ####  Remarks
        
 The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.

### names method
Use this method to specify a list of visual locator names.

#### Syntax 
 ``` 
List<String> names_A = Arrays.asList(new String[]{"locator_1a", "locator_1b", "locator_1c"});
List<String> names_B = Arrays.asList(new String[]{"locator_2a", "locator_2b", "locator_2c"});
Map<String, List<Region>> locRegions6 = eyes.locate(VisualLocator.names(names_A).names(names_B)); 
 ``` 

 #### Parameters 
 ###### names 
  
 Type: `List<String>` 
  
 A list of locator names. 
  
 #### Return value 
Type: [VisualLocatorSettings](./visuallocatorsettings)

The method returns an object of type [VisualLocatorSettings](./visuallocatorsettings-method). You can chain additional calls to methods of this class in a fluent style, including [name](#name-method) or [names](#) to add more locator names, and [first](#first-method) or [all](#all-method) to define if you want only the first instance of each locator or all the locators found.
        
 ####  Remarks
        
 The article [Visual locators](https://applitools.com/docs/features/visual-locators.html) describes in detail how to associate locator names with graphic images and how to search for instances of the graphic in the browser viewport. The example below is a briefer description of how to search for instances of the locator graphics.
 