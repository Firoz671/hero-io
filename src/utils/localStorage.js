// src/utils/localStorage.js
const INSTALLED_APPS_KEY = 'heroio_installed_apps';

export const getInstalledApps = () => {
  try {
    const apps = localStorage.getItem(INSTALLED_APPS_KEY);
    return apps ? JSON.parse(apps) : [];
  } catch (error) {
    console.error('Error fetching installed apps:', error);
    return [];
  }
};

export const installApp = (app) => {
  try {
    const apps = getInstalledApps();
    if (!apps.find((a) => a.id === app.id)) {
      apps.push(app);
      localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(apps));
      return true;
    }
    return false; // Already installed
  } catch (error) {
    console.error('Error installing app:', error);
    return false;
  }
};

export const uninstallApp = (appId) => {
  try {
    const apps = getInstalledApps();
    const updatedApps = apps.filter((a) => a.id !== appId);
    localStorage.setItem(INSTALLED_APPS_KEY, JSON.stringify(updatedApps));
    return true;
  } catch (error) {
    console.error('Error uninstalling app:', error);
    return false;
  }
};

export const isAppInstalled = (appId) => {
  const apps = getInstalledApps();
  return apps.some((a) => a.id === appId);
};
