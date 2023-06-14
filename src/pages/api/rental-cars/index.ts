import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { rentalCarValidationSchema } from 'validationSchema/rental-cars';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getRentalCars();
    case 'POST':
      return createRentalCar();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getRentalCars() {
    const data = await prisma.rental_car
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'rental_car'));
    return res.status(200).json(data);
  }

  async function createRentalCar() {
    await rentalCarValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.rental_car.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
