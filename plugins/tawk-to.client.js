import TawkMessengerVue from '@tawk.to/tawk-messenger-vue-3';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(TawkMessengerVue, {
    propertyId : '6621a9d91ec1082f04e456b5',
    widgetId : '1hrpnuu5t'  
  });
});