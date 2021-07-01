import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@single-spa/app-mfe1",
  app: () => System.import("@ng-mfe/app-mfe1"),
  activeWhen: (location) => location.pathname.startsWith('/vehicle'),
});

registerApplication({
  name: "@single-spa/app-mfe2",
  app: () => System.import("@ng-mfe/app-mfe2"),
  activeWhen: (location) => location.pathname.startsWith('/driver'),
});

registerApplication({
  name: "@single-spa/app-route",
  app: () => System.import("@ng-mfe/app-route"),
  activeWhen: (location) => location.pathname === '/tasks',
});

start({
  urlRerouteOnly: true,
});
