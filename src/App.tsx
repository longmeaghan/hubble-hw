import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { DashboardApp } from '@/components/dashboard/DashboardApp';
import { DevicesPageView } from '@/components/devicesPage/DevicesPageView';
import { FleetPreviewProvider } from '@/context/FleetPreviewContext';
import { postSetupDashboardData } from '@/data/postSetupDashboardData';
import { AppNavigationProvider } from '@/navigation/AppNavigationContext';
import { useAppRouter } from '@/navigation/useAppRouter';

export default function App() {
  const router = useAppRouter();
  const { user, environment } = postSetupDashboardData;

  function handleNavigate(navId: string) {
    if (navId === 'dashboard') {
      router.navigateToRoute('dashboard');
      return;
    }

    if (navId === 'devices') {
      router.navigateToRoute('devices');
    }
  }

  return (
    <FleetPreviewProvider>
      <AppNavigationProvider value={router}>
        <DashboardLayout
          user={user}
          environment={environment}
          activeNavId={router.route}
          onNavigate={handleNavigate}
        >
          {router.route === 'devices' ? (
            <DevicesPageView />
          ) : (
            <DashboardApp data={postSetupDashboardData} />
          )}
        </DashboardLayout>
      </AppNavigationProvider>
    </FleetPreviewProvider>
  );
}
