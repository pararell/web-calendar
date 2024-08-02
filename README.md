# Web Calendar

Web Calendar is an easy-to-use npm package designed to display a customizable calendar on your web application. It offers a straightforward and flexible solution for adding calendar functionality to your projects.

## Features

- Easy integration with any web application
- Event handling capabilities
- Lightweight and fast

## Installation

To install Web Calendar, use npm:

```bash
npm install web-calendar
```

## Usage

Here is a basic example of how to use Web Calendar in your project:

### HTML

```html
<div id="web-calendar"></div>
```

### JavaScript

```javascript
import WebCalendar from 'web-calendar';

css
import 'web-calendar/css/style.css'; 

// argument is number of months from current one
const calendar = new WebCalendar(12);

// eventListener to click on any day
calendar.addEventListener("dayClicked", (event) => {
  console.log(event.detail);
});
```


## Contributing

We welcome contributions to Web Calendar! If you have suggestions, bug reports, or want to contribute code, please open an issue or submit a pull request on our [GitHub repository](https://github.com/pararell/web-calendar).

## License

Web Calendar is licensed under the [MIT License](LICENSE).

---

Enjoy using Web Calendar! If you have any questions or feedback, feel free to reach out to us.