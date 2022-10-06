// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmployeeI } from '../../interfaces';
import employee from './../../sample/employee.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmployeeI>
) {
  res.status(200).json(employee)
}
