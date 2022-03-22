# VisualLocatorSettings class
Use the fields of this object to defined the locator names and whether all instances should be found or only the first.


 
 ### firstOnly property
To return only one graphic instance defined by each locator, add this field to the settings passed, with a value of true . To return only all the graphic instance defined by each locator, add this field to the settings passed, with a value of false .

#### Syntax 
 ``` 
let names_A = ["locator_1a", "locator_1b", "locator_1c"];
let locRegions5 = await eyes.locate({
  settings: { locatorNames: names_A, firstOnly: true },
});
 ``` 
 
 Type:boolean
 #### Example 
JavaScript

    //return a zero or one locator for each of the three locators defined as parameters to name()
    let locRegions8 = await eyes.locate( {settings : {locatorNames:["locator_a","locator_b","locator_b"],firstOnly:true}});
      
    //return all the locator found for the locators defined in the lists passed to names() or Strings passed to name()                   
    let locRegions9 = await eyes.locate( {settings : {locatorNames:["locator_a","locator_b","locator_b"],firstOnly:false}});
    //loop through all the locators and click on the center of their region
    for (let locator in locRegions9) {
        let regionArray = locRegions9[locator];
        for (let region in regionArray) {
            click(region.x + region.width/2, region.y + region.height/2);
        }
    }; 
 ### locatorNames property
Use this field to specify a list of visual locator names.

#### Syntax 
 ``` 
obj = { locatorNames: [value1_string, value2_string] };
 ``` 
 
 Type:string\[\]