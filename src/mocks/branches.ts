import type { Branch } from '../core/types/branch'

export const mockBranches: Branch[] = [
  {
    id: 'branch-001',
    name: 'Buenos Aires (Central)',
    address: 'Av. Libertador 4520, CABA',
    city: 'Buenos Aires',
    openingHours: '09:00 - 18:00',
  },
  {
    id: 'branch-002',
    name: 'Cordoba',
    address: 'Av. Colon 1150, Cordoba Capital',
    city: 'Cordoba',
    openingHours: '09:00 - 18:00',
  },
  {
    id: 'branch-003',
    name: 'Rosario',
    address: 'Bv. Oroño 850, Rosario',
    city: 'Rosario',
    openingHours: '09:00 - 18:00',
  },
]