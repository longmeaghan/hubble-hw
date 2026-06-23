import { useCallback, useEffect, useState } from 'react';

export type AppRoute = 'dashboard' | 'devices';

const BASE = import.meta.env.BASE_URL;

function normalizePath(pathname: string): string {
  if (BASE !== '/') {
    if (pathname.startsWith(BASE)) {
      const rest = pathname.slice(BASE.length);
      return rest.startsWith('/') ? rest : `/${rest}`;
    }

    const baseWithoutTrailingSlash = BASE.replace(/\/$/, '');
    if (pathname === baseWithoutTrailingSlash) {
      return '/';
    }
  }

  return pathname;
}

export function pathToRoute(pathname: string): AppRoute {
  const path = normalizePath(pathname);

  if (path === '/devices' || path.startsWith('/devices/')) {
    return 'devices';
  }

  return 'dashboard';
}

export function routeToPath(route: AppRoute): string {
  if (route === 'devices') {
    return `${BASE}devices`;
  }

  return BASE;
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
