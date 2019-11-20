# SonoNet-Capacitor


## How to use

1. Install via npm:
```
npm install sononet
```

#### Permissions
...

#### Background Modes
...

#### Credentials
We will provide you with the corresponding API key and Location Id. Note: The Location Id is an identifier used to determine a particular location/environment in which beacons can be detected. E.g. Your retail store is equipped with 5 Sonobeacons, thus only those 5 beacons (which are associated to the location) are detected by sononet. Skip adding the Location Id if you do not want to detect only certain Sonobeacons within a single environment.

#### ContentView (optional)
The ContentView is a UI component that controls the display of content using sononet. Basically, the content associated to a beacon is displayed using a web view, whereby individual functions extend and enhance the user experience.
The ContentView also contains a side menu, which can optionally be used to display configured menu items.
You don't need to use the ContentView if you want to handle the display of content by yourself.

Usage: ...


## Inside your app

...
...

Note: SonoNet requires permission to use both microphone and localization. The permission to use Bluetooth is only needed for optimizing localization. Bluetooth functionality should be activated if no Location Id is passed. Check out the demo app for implementation.
