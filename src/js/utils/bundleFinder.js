export const bundleFinder = async (module, props) => {
  const moduleName = module.split("components/")[1];
  let loadedModule;

  switch (moduleName) {
    case "header":
      loadedModule = await import(
        /* webpackChunkName: "[request]-" */ `../${module}`
      );
      break;

    case "alert":
      loadedModule = await import(
        /* webpackChunkName: "[request]-" */ `../${module}`
      );
      break;
  }

  return loadedModule;
};
