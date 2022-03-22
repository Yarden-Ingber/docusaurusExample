# SessionUrls class
An object of this class is returned as part of the information in the [TestResults](./testresults) class. This class provides URIs that can be used in a browser to display the Test Manager batch and test results for this test.
 
 ### Import statement 
``` 
import com.applitools.eyes.android.common.SessionUrls;
 
 ``` 
 
### getBatch method
The value returned by this method is a URI that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the batch of this test.

#### Syntax 
 ``` 
String urls = sessionurl.getBatch();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String 
### getSession method
The value returned by this method is a URI, that, when opened in a browser, displays the Applitools Test Manager test results page loaded with the results of this test.

#### Syntax 
 ``` 
String urls = sessionurl.getSession();
 ``` 

 #### Parameters 
This method does not take any parameters 
 
 #### Return value 
Type: String