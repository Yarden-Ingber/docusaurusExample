# SessionUrlsPlain class
An object of this type is returned as part of the information in the [TestResults](./testresults) class. This type provides URIs that can be used in a browser to display the Test Manager batch and test results for this test.


 
 ### batch property
The value of this property is a URI that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the batch of this test.

#### Syntax 
 ``` 
urls = sessionurl.batch;
 ``` 
 
 Type:string 
 ### session property
The value of this property is a URI, that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the results of this test.

#### Syntax 
 ``` 
urls = sessionurl.session;
 ``` 
 
 Type:string