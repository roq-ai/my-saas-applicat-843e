const mapping: Record<string, string> = {
  organizations: 'organization',
  'rental-cars': 'rental_car',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
