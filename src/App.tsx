import React, { useState, useCallback } from 'react';
import {
  AppProvider,
  Page,
  Card,
  Button,
  Frame,
} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { NavigationMenu } from './components/Navigation/Navigation';
import { TopBar } from './components/TopBar/TopBar';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [notificationsActive, setNotificationsActive] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('home');

  const handleSearchChange = useCallback(
    (value: string) => setSearchValue(value),
    [],
  );

  const handleUserMenuToggle = useCallback(
    () => setUserMenuActive((active) => !active),
    [],
  );

  const handleMobileNavigationToggle = useCallback(
    () => setMobileNavigationActive((active) => !active),
    [],
  );

  const handleNotificationsToggle = useCallback(
    () => setNotificationsActive((active) => !active),
    [],
  );

  const handleNavigationSelect = useCallback(
    (menu: string) => setSelectedMenu(menu),
    [],
  );

  return (
    <AppProvider i18n={enTranslations}>
      <Frame 
        topBar={
          <TopBar
            searchValue={searchValue}
            userMenuActive={userMenuActive}
            notificationsActive={notificationsActive}
            onSearchChange={handleSearchChange}
            onUserMenuToggle={handleUserMenuToggle}
            onNotificationsToggle={handleNotificationsToggle}
            onNavigationToggle={handleMobileNavigationToggle}
          />
        }
        navigation={
          <NavigationMenu
            selectedMenu={selectedMenu}
            onNavigationSelect={handleNavigationSelect}
          />
        }
        logo={{
          width: 86,
          topBarSource:
            'https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png',
          url: '/',
          accessibilityLabel: 'Shopify',
        }}
      >
        <Page title="Welcome to Polaris">
          <Card>
            <div style={{ padding: '16px' }}>
              <Button variant="primary">Button</Button>
            </div>
          </Card>
        </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
