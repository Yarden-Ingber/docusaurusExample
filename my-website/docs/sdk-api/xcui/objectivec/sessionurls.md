# SessionUrls class
An object of this class is returned as part of the information in the [TestResults](./testresults) class. This class provides URIs that can be used in a browser to display the Test Manager batch and test results for this test.
 
 ### Import statement 
``` 
@import EyesXCUI
 
 ``` 


 
 ### batch property
The value of this property is a URI that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the batch of this test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* urls = sessionurl.batch
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *batch 
 ``` 
 
 Type:NSString\* 
 ### session property
The value of this property is a URI, that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the results of this test.

#### Syntax 
 ##### Call syntax 
 ``` 
NSString* urls = sessionurl.session
 ``` 
 
 ##### Declaration 
 ``` 
 (readonly, nonatomic) NSString *session 
 ``` 
 
 Type:NSString\*