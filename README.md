# Event-manager
A simple custom events publish-subscribe library for JavaScript

# Usage
Include the lib.js in your `<script>` tag in html. Once included, you can use `eventManager` directly to work. 

```javascript
eventManager.subscribe('useradded', function(event) {
  console.log('The data from the event::', event);
});


var data = {
    name: 'Shabiq Hazarika',
    age: 26,
    dob: '23/02/1991'
}
eventManager.publish('useradded', data);
```
