import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '/dashboard',
    title: 'لوحة التحكم',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: []
  },
  // {
  //   path: '/component/continent',
  //   title: 'العقارات',
  //   icon: 'bi bi-fa-solid fa-earth-americas',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  {
    path: '/component/users',
    title: 'الأعضاء',
    icon: 'bi bi-fa-solid fa-city',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/booking',
    title: 'الحجوزات',
    icon: 'bi bi-fa-solid fa-city',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/products',
    title: 'العقارات',
    icon: 'bi bi-fa-solid fa-hotel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/acceptRequest',
    title: 'قبول العقارات',
    icon: 'bi bi-fa-solid fa-hotel',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/component/register',
    title: 'أنشاء حساب جديد ',
    icon: 'bi bi-fa-solid fa-city',
    class: '',
    extralink: false,
    submenu: []
  },




];
