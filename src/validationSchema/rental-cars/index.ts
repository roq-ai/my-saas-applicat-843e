import * as yup from 'yup';

export const rentalCarValidationSchema = yup.object().shape({
  make: yup.string().required(),
  model: yup.string().required(),
  year: yup.number().integer().required(),
  availability: yup.boolean().required(),
  rental_provider_id: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
