import * as yup from 'yup';
import { rentalCarValidationSchema } from 'validationSchema/rental-cars';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  rental_car: yup.array().of(rentalCarValidationSchema),
});
