import * as Sentry from '@sentry/vue';

export default defineNuxtPlugin(({ vueApp }) => {
  // vueApp.config.errorHandler = undefined;
  Sentry.init({
    app: vueApp,
    dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  });
});
