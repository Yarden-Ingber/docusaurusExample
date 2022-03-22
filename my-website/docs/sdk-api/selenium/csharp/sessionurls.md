# SessionUrls class
An object of this class is returned as part of the information in the [TestResults](./testresults) class. This class provides URIs that can be used in a browser to display the Test Manager batch and test results for this test.


 
 ### Batch property
The value of this property is a URI that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the batch of this test.

#### Syntax 
 ``` 
string urls = sessionurl.Batch;
 ``` 
 
 Type:string 
 ### Session property
The value of this property is a URI, that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the results of this test.

#### Syntax 
 ``` 
string urls = sessionurl.Session;
 ``` 
 
 Type:string