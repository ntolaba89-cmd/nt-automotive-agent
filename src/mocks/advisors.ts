import type { Advisor } from '../core/types/advisor'

export const mockAdvisors: Advisor[] = [
  {
    id: 'advisor-001',
    name: 'Martina Sosa',
    email: 'martina.sosa@dealerpremier.com',
    branchId: 'branch-001',
  },
  {
    id: 'advisor-002',
    name: 'Diego Ferreiro',
    email: 'diego.ferreiro@dealerpremier.com',
    branchId: 'branch-002',
  },
  {
    id: 'advisor-003',
    name: 'Julia Benitez',
    email: 'julia.benitez@dealerpremier.com',
    branchId: 'branch-003',
  },
  {
    id: 'advisor-004',
    name: 'Federico Aguirre',
    email: 'federico.aguirre@dealerpremier.com',
    // Sin branchId: asesor flotante, puede atender leads de cualquier sucursal
  },
]