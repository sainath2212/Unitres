import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Create roles
  const roles = await Promise.all([
    prisma.role.create({ data: { name: 'user' } }),
    prisma.role.create({ data: { name: 'manager' } }),
    prisma.role.create({ data: { name: 'admin' } }),
  ]);

  // Create menu items
  const menuItems = await Promise.all([
    prisma.menuItem.create({
      data: {
        title: 'Dashboard',
        path: '/dashboard',
        icon: 'Home',
        roles: { connect: roles.map(role => ({ id: role.id })) },
      },
    }),
    prisma.menuItem.create({
      data: {
        title: 'User Management',
        path: '/users',
        icon: 'Users',
        roles: { connect: [{ id: roles[2].id }] }, // Admin only
      },
    }),
    // Add more menu items as needed
  ]);

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      password: adminPassword,
      name: 'Admin User',
      roleId: roles[2].id, // Admin role
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });