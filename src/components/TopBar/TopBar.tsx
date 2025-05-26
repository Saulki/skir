//import React from 'react';
import { TopBar as PolarisTopBar, Icon } from '@shopify/polaris';
import { NotificationIcon } from '@shopify/polaris-icons';

interface TopBarProps {
  searchValue: string;
  userMenuActive: boolean;
  notificationsActive: boolean;
  onSearchChange: (value: string) => void;
  onUserMenuToggle: () => void;
  onNotificationsToggle: () => void;
  onNavigationToggle: () => void;
}

export function TopBar({
  searchValue,
  userMenuActive,
  notificationsActive,
  onSearchChange,
  onUserMenuToggle,
  onNotificationsToggle,
  onNavigationToggle,
}: TopBarProps) {
  const userMenuActions = [
    {
      items: [{ content: 'Settings' }, { content: 'Sign out' }],
    },
  ];

  const userMenuMarkup = (
    <PolarisTopBar.UserMenu
      actions={userMenuActions}
      name="Minky Couture"
      initials="MC"
      open={userMenuActive}
      onToggle={onUserMenuToggle}
    />
  );

  const searchResultsMarkup = (
    <div style={{ height: '100px', padding: '12px' }}>
      <p>Search results will appear here</p>
    </div>
  );

  const searchFieldMarkup = (
    <PolarisTopBar.SearchField
      onChange={onSearchChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const secondaryMenuMarkup = (
    <PolarisTopBar.Menu
      activatorContent={
        <span>
          <Icon source={NotificationIcon} />
        </span>
      }
      actions={[
        {
          items: [{ content: 'No new notifications' }],
        },
      ]}
      open={notificationsActive}
      onOpen={onNotificationsToggle}
      onClose={onNotificationsToggle}
    />
  );

  return (
    <PolarisTopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchField={searchFieldMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResults={searchResultsMarkup}
      onNavigationToggle={onNavigationToggle}
    />
  );
} 