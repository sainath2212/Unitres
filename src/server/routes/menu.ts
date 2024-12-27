import express from 'express';
import { PrismaClient } from '@prisma/client';
import { auth, AuthRequest } from '../middleware/auth';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', auth, async (req: AuthRequest, res) => {
  try {
    const userRole = req.user?.role;
    
    const menuItems = await prisma.menuItem.findMany({
      where: {
        roles: {
          some: {
            name: userRole
          }
        }
      },
      include: {
        roles: true
      }
    });

    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;