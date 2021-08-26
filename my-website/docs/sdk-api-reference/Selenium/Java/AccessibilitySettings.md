# AccessibilitySettings
A class that is used to set up accessibility validation.

## AccessibilitySettings
Create an object that is used to set up accessibility validation.

Toset upaccessibility validation pass an object of this type to the [Configuration.setAccessibilityValidation](./Configuration#setaccessibilityvalidation) method.

#### Syntax

```java
AccessibilitySettings obj = new AccessibilitySettings(level, guidelinesVersion);
```

#### Parameters
level<br/>
Type: [AccessibilityLevel](./AccessibilityLevel)<br/>
The required accessibility level.

guidelinesVersion<br/>
Type: [AccessibilityGuidelinesVersion](./AccessibilityGuidelinesVersion)<br/>
The required accessibility guide version.

#### Return value
Type: [AccessibilitySettings](./AccessibilitySettings)

## getGuidelinesVersion
Use this method to retrieve the required accessibility guide version.

#### Syntax

```java
AccessibilityGuidelinesVersion value = obj.getGuidelinesVersion();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [AccessibilityGuidelinesVersion](./AccessibilityGuidelinesVersion)

## getLevel
Use this method to retrieve the required accessibility level.

#### Syntax

```java
AccessibilityLevel value = obj.getLevel();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: [AccessibilityLevel](./AccessibilityLevel)