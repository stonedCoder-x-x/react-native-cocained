# react-native-cocained O.O
<b>This is your "not another" react native booster.</b>

React native drugged up -> <b>react-native-cocained :dizzy_face: </b>

<b>NOTE - This repo is only for mac and linux based operating systems, on windows this project wont compile and build</b>
 
<b>Supercharge your react native developement with this RN Framework including all the core elements required to setup an app project for ios and android including many many & many features & boilerplates prebuilt.</b>
```html
git clone https://github.com/stonedCoder-x-x/react-native-cocained.git
```

```html
After cloning rename cloned folder to 'React Project structure' and put it in your desktop -> Create a Projects Folder in Your home directory, then cd into cloned folder execute MakeUpStructure.py with python3 MakeUpStructure.py. It will ask for your computer username enter it,  then drop your about to supercharge project folder into terminal (It should be completely empty)
```

```html
It will now copy all the project files to it and link them. It will ask you to name your project leave empty and press enter if you want to define folder name as project name.
```

<b>Now build and run on platforms.Congratulations! :bowtie: </b>


<b>* FEATURES :- :sparkles: </b>
<br />
<ul>
 <li>Navigation - react-native-navigation</li>
  <li>Splash Screen (react-native-splash-screen)</li>
    <li>Firebase notifications setup out of the box :fire:</li>
        <li>Api calls structure with axios :cloud:</li>
                <li>No need to manually switch the ui state if data is loading from the api - wrap your network views in NetworkAwareComponent - Works like magic :sparkles:</li>
                                <li>Fonts setup for android only in ios doesn't work for some reason</li>
                                                                <li>App colors,fonts, are built into seperate files, so changing them will change them thorughout the app :rainbow: - Pretty customizable with all the custom componenets built in </li>
                                                                <li>Custom supercharged components installed and modified :collision: :- </li>
                                                                <ul>
                                                                  <li>Custom button built in loader for api calls and failure animations</>
                                                                  <li>Custom text - including fonts and many customizable props</>
                                                                  <li>Bottom sheet wrapper componnent for ios android - Wrap your componenent in it to show in bottom sheet</>
                                                                  <li>Custom checkbox - Change shape , color & much more.</>
                                                                  <li>Date picker - Date picking was never been this easy just plug this component in you file & done. </li>
                                                                  <li>Dropdown suggestor - Painfull dropdown made easy </>
                                                                  <li>Icons.js - Includes all the react-native-vector-icons libraries </>
                                                                  <li>Loader - In case you want to show it manually somewhere </>
                                                                  <li>NetworkAwareContent - My favorite wrap your network data views in it and pass isApiCall prop to it to automatically switch between loader and view </>
                                                                  <li>Container - My favorite - this should be the roote view of your statefull component . auto manages the ios safeview and manages back buttons on android.</>
                                                                  <li>NoInternetView .. auto checks for connectivity and toggles view This is being used in NetworkAwareContent component  </>
                                                                  <li>ProfilePic for edit profiles and all just pass in pic prop to this and it will handle </>
                                                                  <li>Screen memory - My favorite 2 Auto manages the app state and toggles and navigate the screen accordingly E.x - After login we want to navigate directly to home </>
                                                                  <li>SideDrawerContainer - As the name implies </>
                                                                  <li>TabsContainer - Want tabs in app. Plug this in your js and there you go. </>
                                                                  <li>ZoomableView - Want pinch to zoom on images wrap your ususall image view in it and you r done </>
                                                                  <li>Custom Inputs - Email,Phone number, First name etc blah ba .. with built in validations explore them</>
                                                                  <li>Logo point your logo image in this componenent then use it anywhere where you want to show logo</>
                                                                </ul>
<br />
<b><i>And Many, Many & Many more features :- x-x</i></b>
<br />
<ul>

</ul>
      <li>Methods.js Includes many helper and common functions which coders have to boilerplate & bore themselves.. this is for you to explore.</>
      <li>InputValidations.js includes validation logics for all the inputs this file is being used by custom inputs internally</>
      <li>Constants.js you know the deal</>
      <li>global.js for simple app level global params</>
      <li><b>Screens</b> Login, Dashboard only for simplicity sake </>
      <li><b>Social Logins</b> FB,Google,Twitter,Linkedin install their libraries unfortunatly they r just ui component buttons </>
      <li>BackHandlerSingleton - Manages back buttons on android . its being used in container.js</>
      <li>InputsNullChecker - Mainly used while registeration to check all inputs are filled or not just pass in you input values object and it return anyEmptyInputs array... explore!</>
      <li>PushNotfication - Manages token generation and events of notification for both ios android. . </>
      <li>TakePhoto - Just import this and use its function to capture photos. on ios, android. </>
      <li>AsyncStorageHandler - Eased up asyncstorage supports json objects ,arrays -- no need to parse or handle manually anything. </>
      
</ul>
<br />
<b>I think i left something which i cant remember .. well this is like 1+ yrs of work.. & i am sure you haven't read all the things above... ->  explore on your own to avail the superpowers :bow: :metal: :muscle: </b>
<br />

Components usages coming soon till then you can open up this components flesh and gain some info about the usage.

<b>START FROM THE APP.JS -> APPROOT.JS TO BEGIN </b>




