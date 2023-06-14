import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RentalCarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  availability: boolean;
  rental_provider_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface RentalCarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  rental_provider_id?: string;
  organization_id?: string;
}
