
# Vue Notification & Alert Package

A lightweight Vue & Vite notification and alert package that utilizes Pinia for state management. This package provides an easy way to display notifications and alerts in your Vue applications.

Live Demo: https://mehranamanollah2049.github.io/vue3-toast-alert/

## Features

- Easy to integrate with your Vue projects
- Simple toast notifications
- Uses Pinia for state management
- Lightweight CSS styling

## Installation

To install the package, run the following command:

```
npm install vue3-toast-alert
```

## Usage

### 1. Setup Pinia

If you haven't already set up Pinia in your Vue application, do so by following these steps:

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
```

### 2. Use NotificationContainer

In your App.vue, import and use the `NotificationContainer` component to manage notifications:

```javascript
<script setup>
import { NotificationContainer } from 'vue3-toast-alert'
</script>

<template>
  <NotificationContainer />
</template>
```

### 3. Using Toast Function

To display a toast notification, import the `toast` function and call it wherever you need to show a notification:

```javascript
import { toast } from 'vue3-toast-alert'

// Example usage
toast('Your alert message','type:success,error,warning','timer: 5')
```

## Customization

```javascript
<NotificationContainer :is-dark-mode="true" :ltr="true" />
```
You can customize the appearance of notifications by modifying the CSS file included in the package. The default styles can be found in the `style.css` file.

## Example

Here’s a quick example of how to integrate the notification system into your application:

```javascript
<template>
    <NotificationContainer />
    <button @click="showToast">Show Toast</button>
</template>

<script setup>
import { NotificationContainer, toast } from 'vue3-toast-alert'

let showToast = () => {
  // create a success type toast
  toast('Hello from the toast function!')
}
</script>
```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions or improvements.

## Author

Mehran Amanollah