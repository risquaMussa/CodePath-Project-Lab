# Web Development Project 4 - *Risqua Mussa*

Submitted by: **Week 5: Project 4 - Veni Vici!**

This web app: **API call responses should appear random to the user, with each click of the button generating a seemingly new result. While repeat results are allowed, they should not be frequent, implying the use of an API with a reasonably large dataset.**

Time spent: **15** hours spent in total

## Required Features

The following **required** functionality is completed: 

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The type of attribute displayed for each image should be consistent across API calls (i.e. if you are using a cat API, and display the color, breed, and age in response to an initial API call, subsequent button clicks should also result in the color, breed, and age being displayed)
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - A single result of an API call is displayed at a time 
  - Displayed attributes should match the displayed image (i.e., if showing a picture of a Siamese cat and the attribute breed, the displayed breed should be 'Siamese' not 'Ragdoll' or another breed that doesn't match)
  - There is at least one image per API call
- [x] **API call response results should appear random to the user**
  - Clicking on the API call button should generate a seemingly random new result each time
  - Note: Repeat results are permitted but the API used should have a reasonably large amount of data and repeats should not be frequent
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban **list**
  - At least one attribute for each API result should be clickable
  - Clicking on a clickable attribute not on the ban list, should imnmediately add it to the ban list 
  - Clicking on an attribute in the ban list should immediately remove it from the ban list 
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - Clicking on the API call button should not result in any image/attributes with attribute values in the ban list being displayed (ex. Using a cat API, if the ban list includes the value 'Siberian' for the breed attribute, clicking on the Discover button should never result in a Siberian cat being displayed)
  - Note: More attribute values on the ban list may result in a higher frequency of repeat results
  -  [x] _To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes_


The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list
- [x] Users can see a stored history of their previously displayed  results from this session
  - A dedicated section of the application displays all the previous images/attributes seen before
  - Each time the API call button is clicked, the history updates with the newest API result

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
<div>
    <a href="https://www.loom.com/share/ac41be56c7294d48be0967bf9ddffd40">
     </a>
    <a href="https://www.loom.com/share/ac41be56c7294d48be0967bf9ddffd40">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/ac41be56c7294d48be0967bf9ddffd40-32e1f46473a7f1d2-full-play.gif">
    </a>
  </div>


<div style="position: relative; padding-bottom: 56.25%; height: 0;"><iframe src="https://www.loom.com/embed/ac41be56c7294d48be0967bf9ddffd40?sid=33a793a8-1bab-43a3-a198-ed75e85c7e72" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>


<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
Autofill

;
