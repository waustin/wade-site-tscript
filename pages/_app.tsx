import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../layouts/Layout';

function parseRouteClass(pathname:string ):string {
  let routeClass = pathname.replace('/', '-');
  if(routeClass == '-') {
    routeClass = '-home';
  }
  return `route-${routeClass}`;
}
function MyApp({ Component, pageProps, router }: AppProps) {
  const routeClass = parseRouteClass(router.pathname)
  return (
    <Layout routeClass={routeClass}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
