let moduleLoader = function (options) {
  const defaults = {
    loadImmediately: true,
    moduleDataAttr: "data-module",
  };
  let settings;

  function init() {
    settings = Object.assign({}, defaults, options);

    if (settings.loadImmediately) {
      const elsWithModules = Array.from(
        document.querySelectorAll(`[${settings.moduleDataAttr}]`)
      );
      loadModules(elsWithModules);
    }
  }

  function loadModules(els) {
    els.forEach((el) => {
      const module = el.getAttribute(settings.moduleDataAttr);

      const props = {
        containerElement: el,
      };

      import(
        /* webpackChunkName: "module" */

        `./${module}`
      )
        .then(({ default: _ }) => {
          const module = _;
          module(props);
        })
        .catch((error) => "An error occurred while loading the component");
    });
  }

  init();

  return {
    load: loadModules,
  };
};

export default moduleLoader();
