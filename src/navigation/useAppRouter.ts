import { useCallback, useEffect, useState } from 'react';

export type AppRoute = 'dashboard' | 'devices';

export function pathToRoute(pathname: string): AppRoute {
  if (pathname === '/devices' || pathname.startsWith('/devices/')) {
    return 'devices';
  }

  return 'dashboard';
}

export function routeToPath(route: AppRoute): string {
  return route === 'devices' ? '/devices' : '/';
}

export function useAppRouter() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    function handlePopState() {
      setPathname(window.location.pathname);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string) => {
    if (path === window.location.pathname) return;
    window.history.pushState(null, '', path);
    setPathname(path);
  }, []);

  const navigateToRoute = useCallback(
    (route: AppRoute) => {
      navigate(routeToPath(route));
    },
    [navigate],
  );

  return {
    pathname,
    route: pathToRoute(pathname),
    navigate,
    navigateToRoute,
  };
}
