import React from 'react';
import { Navigation } from '@shopify/polaris';
import {
  HomeIcon,
  OrderFilledIcon,
  ProductFilledIcon,
  PersonFilledIcon,
  MarketsFilledIcon,
  DiscountFilledIcon,
  ContentFilledIcon,
  GlobeFilledIcon,
  FinanceFilledIcon,
  ChartVerticalFilledIcon,
  StoreFilledIcon,
  PointOfSaleIcon, 
  CircleDownIcon,
  AppsIcon,  
  SettingsFilledIcon,
} from '@shopify/polaris-icons';

interface NavigationProps {
  selectedMenu: string;
  onNavigationSelect: (menu: string) => void;
}

export function NavigationMenu({ selectedMenu, onNavigationSelect }: NavigationProps) {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '#',
            label: 'Home',
            icon: HomeIcon,
            selected: selectedMenu === 'home',
            onClick: () => onNavigationSelect('home'),
          },
          {
            url: '#',
            label: 'Orders',
            icon: OrderFilledIcon,
            badge: '15',
            selected: selectedMenu === 'orders',
            onClick: () => onNavigationSelect('orders'),
          },
          {
            url: '#',
            label: 'Products',
            icon: ProductFilledIcon,
            selected: selectedMenu === 'products',
            onClick: () => onNavigationSelect('products'),
          },
          {
            url: '#',
            label: 'Customers',
            icon: PersonFilledIcon,
            selected: selectedMenu === 'customers',
            onClick: () => onNavigationSelect('customers'),
          },
          {
            url: '#',
            label: 'Marketing',
            icon: MarketsFilledIcon,
            selected: selectedMenu === 'marketing',
            onClick: () => onNavigationSelect('marketing'),
          },
          {
            url: '#',
            label: 'Discounts',
            icon: DiscountFilledIcon,
            selected: selectedMenu === 'discounts',
            onClick: () => onNavigationSelect('discounts'),
          },
          {
            url: '#',
            label: 'Content',
            icon: ContentFilledIcon,
            selected: selectedMenu === 'content',
            onClick: () => onNavigationSelect('content'),
          },
          {
            url: '#',
            label: 'Markets',
            icon: GlobeFilledIcon,
            selected: selectedMenu === 'markets',
            onClick: () => onNavigationSelect('markets'),
          },
          {
            url: '#',
            label: 'Finances',
            icon: FinanceFilledIcon,
            selected: selectedMenu === 'finances',
            onClick: () => onNavigationSelect('finances'),
          },
          {
            url: '#',
            label: 'Analytics',
            icon: ChartVerticalFilledIcon,
            selected: selectedMenu === 'analytics',
            onClick: () => onNavigationSelect('analytics'),
          },
        ]}
      />

      <Navigation.Section
        title="Sales channels"
        items={[
          {
            url: '#',
            label: 'Online Store',
            icon: StoreFilledIcon,
            selected: selectedMenu === 'online-store',
            onClick: () => onNavigationSelect('online-store'),
          },
          {
            url: '#',
            label: 'Point of Sale',
            icon: PointOfSaleIcon,
            selected: selectedMenu === 'pos',
            onClick: () => onNavigationSelect('pos'),
          },
          {
            url: '#',
            label: 'Shop',
            icon: CircleDownIcon,
            selected: selectedMenu === 'shop',
            onClick: () => onNavigationSelect('shop'),
          },
        ]}
      />

      <Navigation.Section
        title="Apps"
        items={[
          {
            url: '#',
            label: 'Collabs',
            icon: AppsIcon,
            selected: selectedMenu === 'collabs',
            onClick: () => onNavigationSelect('collabs'),
            subNavigationItems: [
              {
                url: '#',
                label: 'Campaigns',
                onClick: () => onNavigationSelect('campaigns'),
              },
              {
                url: '#',
                label: 'Content',
                onClick: () => onNavigationSelect('collabs-content'),
              },
              {
                url: '#',
                label: 'Settings',
                onClick: () => onNavigationSelect('collabs-settings'),
              },
            ],
          },
        ]}
      />

      <Navigation.Section
        items={[
          {
            url: '#',
            label: 'Settings',
            icon: SettingsFilledIcon,
            selected: selectedMenu === 'settings',
            onClick: () => onNavigationSelect('settings'),
          },
        ]}
      />
    </Navigation>
  );
} 