# JavaScript Tabs

Implemented tab switching in Javascript.

## Demo

![tabs-demo](https://github.com/AndreyLuchko/Tabs/blob/main/file/record4.gif)

## Usage:
- The markup is implemented as follows:
```html
<div class="centered-content">
        <ul class="tabs">
            <li class="tabs-title active">Akali</li>
            <li class="tabs-title">Anivia</li>
            <li class="tabs-title">Draven</li>
            <li class="tabs-title">Garen</li>
            <li class="tabs-title">Katarina</li>
        </ul>
        <ul class="tabs-content">
            <!-- Akali -->
            <li>Your text</li>
            <!-- Anivia -->
            <li>Your text</li>
            <!--Draven -->
            <li>Your text</li>
            <!-- Garen -->
            <li>Your text</li>
            <!-- Katarina -->
            <li>Your text</li>
        
        </ul>
    </div>
``` 
- function has three arguments
```javascript
function tabs (parentSelector, titleSelector, contentSelector) {

    const tabHeader = document.querySelector(parentSelector),
          tabs = document.querySelectorAll(titleSelector), 
          content = document.querySelectorAll(contentSelector); 

    // rest code...
}
```
- text on tabs can change
- tabs can be added and removed



## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Example

[TABS](https://andreyluchko.github.io/Tabs/)