export type Profile = 'patient' | 'professional' | 'admin'
export type AuthView = 'login' | 'recover' | 'register' | 'privacy' | 'lgpd'
export type AlertTone = 'success' | 'error' | 'warning' | 'info'

export interface MenuItem {
  key: string
  label: string
  description: string
}

export interface ProfileMeta {
  label: string
  subtitle: string
  description: string
}

export interface PatientProfile {
  id: string
  name: string
  cpf: string
  birthDate: string
  phone: string
  address: string
  insurance: string
  allergies: string
  emergencyContact: string
}

export interface Appointment {
  id: string
  specialty: string
  unit: string
  professional: string
  date: string
  time: string
  status: string
  modality: string
  guidance: string
}

export interface Exam {
  id: string
  type: string
  unit: string
  date: string
  time: string
  status: string
  preparation: string
}

export interface NotificationItem {
  id: string
  title: string
  message: string
  time: string
  tone: AlertTone
  read: boolean
}

export interface ConsentItem {
  id: string
  title: string
  description: string
  granted: boolean
  critical: boolean
}

export interface TimelineEvent {
  id: string
  date: string
  title: string
  category: string
  professional: string
  summary: string
}

export interface PrescriptionItem {
  id: string
  date: string
  professional: string
  specialty: string
  items: string[]
  validUntil: string
  status: string
}

export interface AgendaItem {
  id: string
  patientId: string
  patientName: string
  age: number
  time: string
  date: string
  type: string
  status: string
  unit: string
  room: string
  reason: string
  alert: string
}

export interface AdminPatientRow {
  id: string
  name: string
  age: number
  status: string
  unit: string
  contact: string
  insurance: string
  careType: string
  alerts: string[]
  lastVisit: string
  nextStep: string
}

export interface ProfessionalRow {
  id: string
  name: string
  role: string
  unit: string
  shift: string
  status: string
  accessLevel: string
}

export interface UnitRecord {
  id: string
  name: string
  type: string
  city: string
  specialties: string[]
  occupancy: number
  status: string
}

export interface AdmissionRecord {
  id: string
  patient: string
  unit: string
  wing: string
  bed: string
  admissionDate: string
  reason: string
  status: string
  physician: string
}

export interface BedRecord {
  id: string
  unit: string
  wing: string
  room: string
  bed: string
  status: string
  patient: string
  cleaningEta: string
}

export interface SupplyRecord {
  id: string
  item: string
  category: string
  unit: string
  stock: number
  minStock: number
  status: string
  trend: string
}

export interface FinanceRecord {
  id: string
  unit: string
  revenue: number
  expenses: number
  occupancy: number
  outpatient: number
  telemedicine: number
}

export interface AuditLog {
  id: string
  date: string
  time: string
  user: string
  profile: string
  action: string
  module: string
  ip: string
  status: string
}

export interface AccessHistoryItem {
  id: string
  user: string
  profile: string
  lastAccess: string
  device: string
  risk: string
}

export interface PermissionMatrixRow {
  id: string
  module: string
  patient: string
  professional: string
  admin: string
  note: string
}

export interface HomeCareVisit {
  id: string
  patientId: string
  patient: string
  address: string
  nextVisit: string
  status: string
  risk: string
  nurse: string
  notes: string
}

export interface TelemedicineMessage {
  id: string
  author: string
  time: string
  message: string
}

export interface ModuleStatus {
  id: string
  name: string
  status: string
  latency: string
}

export const demoPassword = 'VidaPlus@2026'

export const profileMeta: Record<Profile, ProfileMeta> = {
  patient: {
    label: 'Paciente',
    subtitle: 'Cuidado contínuo e autoatendimento',
    description:
      'Acompanhe consultas, exames, prescrições e consentimentos com foco em clareza, segurança e poucos cliques.',
  },
  professional: {
    label: 'Profissional de Saúde',
    subtitle: 'Rotina clínica, prontuário e telemedicina',
    description:
      'Gerencie agenda, registros clínicos, prescrições e pacientes de home care com contexto rápido.',
  },
  admin: {
    label: 'Administrador',
    subtitle: 'Operação, indicadores e compliance',
    description:
      'Visualize unidades, internações, leitos, suprimentos, relatórios e trilhas de auditoria da VidaPlus.',
  },
}

export const profileMenus: Record<Profile, MenuItem[]> = {
  patient: [
    { key: 'dashboard', label: 'Início', description: 'Resumo de consultas, exames e alertas.' },
    { key: 'profile', label: 'Meu Cadastro', description: 'Dados pessoais, convênio e contatos.' },
    { key: 'consultations', label: 'Consultas', description: 'Agendamentos, detalhes e cancelamentos.' },
    { key: 'exams', label: 'Exames', description: 'Solicitações, preparo e status.' },
    { key: 'history', label: 'Histórico Clínico', description: 'Linha do tempo de atendimentos e prescrições.' },
    { key: 'telemedicine', label: 'Teleconsulta', description: 'Sala de espera, chamada e avaliação.' },
    { key: 'prescriptions', label: 'Prescrições', description: 'Receitas digitais simuladas.' },
    { key: 'notifications', label: 'Notificações', description: 'Lembretes, alertas e mensagens.' },
    { key: 'privacy', label: 'Privacidade e LGPD', description: 'Consentimentos, política e rastreabilidade.' },
  ],
  professional: [
    { key: 'dashboard', label: 'Início', description: 'Agenda do dia, pacientes pendentes e atalhos.' },
    { key: 'agenda', label: 'Minha Agenda', description: 'Visão diária com filtros por status e tipo.' },
    { key: 'patients', label: 'Pacientes', description: 'Dados básicos, alertas e próximos passos.' },
    { key: 'records', label: 'Prontuários', description: 'Consulta e atualização de registros clínicos.' },
    { key: 'prescriptions', label: 'Prescrições', description: 'Montagem de receitas simuladas.' },
    { key: 'examRequests', label: 'Solicitação de Exames', description: 'Pedidos com prioridade e justificativa.' },
    { key: 'telemedicine', label: 'Telemedicina', description: 'Atendimento online com painel clínico.' },
    { key: 'homecare', label: 'Home Care', description: 'Pacientes em domicílio e rotas de visita.' },
    { key: 'history', label: 'Histórico de Atendimentos', description: 'Consultas concluídas e indicadores clínicos.' },
  ],
  admin: [
    { key: 'dashboard', label: 'Início', description: 'Painel institucional com disponibilidade e riscos.' },
    { key: 'patients', label: 'Pacientes', description: 'Cadastro, filtros e situação assistencial.' },
    { key: 'professionals', label: 'Profissionais', description: 'Escalas, perfis e nível de acesso.' },
    { key: 'units', label: 'Unidades', description: 'Hospitais, clínicas, laboratórios e equipes.' },
    { key: 'admissions', label: 'Internações', description: 'Entrada, permanência e alta.' },
    { key: 'beds', label: 'Leitos', description: 'Ocupação por unidade, ala e quarto.' },
    { key: 'supplies', label: 'Suprimentos', description: 'Estoque, criticidade e reposição.' },
    { key: 'finance', label: 'Relatórios Financeiros', description: 'Receita, despesa e atendimento por unidade.' },
    { key: 'indicators', label: 'Indicadores', description: 'Gráficos operacionais e metas.' },
    { key: 'security', label: 'Segurança e Auditoria', description: 'Logs, histórico de acessos e compliance.' },
    { key: 'permissions', label: 'Perfis de Acesso', description: 'Matriz de permissões e áreas sensíveis.' },
  ],
}

export const defaultViews: Record<Profile, string> = {
  patient: 'dashboard',
  professional: 'dashboard',
  admin: 'dashboard',
}

export const specialties = [
  'Cardiologia',
  'Clínica Geral',
  'Ortopedia',
  'Fisioterapia',
  'Nutrologia',
]

export const examTypes = [
  'Hemograma Completo',
  'Eletrocardiograma',
  'Ultrassom Abdominal',
  'Raio-X de Tórax',
  'Colesterol Total',
]

export const unitNames = [
  'Hospital VidaPlus Central',
  'Clínica VidaPlus Bairro Norte',
  'Laboratório VidaPlus Diagnósticos',
  'Equipe VidaPlus Home Care',
]

export const unitWings = ['Ala Norte', 'Ala Sul', 'UTI Adulto', 'Observação']

export const initialPatientProfile: PatientProfile = {
  id: 'P001',
  name: 'Maria Oliveira',
  cpf: '08019382950',
  birthDate: '1984-08-14',
  phone: '47988447711',
  address: 'Rua das Araucarias, 180 - Bairro Norte - Florianopolis/SC',
  insurance: 'VidaPlus Essencial',
  allergies: 'Penicilina',
  emergencyContact: 'Luciana Oliveira - 47988114020',
}

export const initialAppointments: Appointment[] = [
  {
    id: 'CONS-401',
    specialty: 'Cardiologia',
    unit: 'Hospital VidaPlus Central',
    professional: 'Dra. Helena Martins',
    date: '2026-06-25',
    time: '09:30',
    status: 'Confirmado',
    modality: 'Presencial',
    guidance: 'Levar exames anteriores e lista de medicações em uso.',
  },
  {
    id: 'CONS-402',
    specialty: 'Clínica Geral',
    unit: 'Clínica VidaPlus Bairro Norte',
    professional: 'Dr. Rafael Costa',
    date: '2026-06-26',
    time: '15:00',
    status: 'Agendado',
    modality: 'Telemedicina',
    guidance: 'Entrar na sala virtual com 10 minutos de antecedência.',
  },
  {
    id: 'CONS-399',
    specialty: 'Fisioterapia',
    unit: 'Clínica VidaPlus Bairro Norte',
    professional: 'Marina Soares',
    date: '2026-06-18',
    time: '08:00',
    status: 'Concluido',
    modality: 'Presencial',
    guidance: 'Sessão concluída com orientações de alongamento em casa.',
  },
]

export const initialExams: Exam[] = [
  {
    id: 'EX-9001',
    type: 'Hemograma Completo',
    unit: 'Laboratório VidaPlus Diagnósticos',
    date: '2026-06-28',
    time: '07:15',
    status: 'Pendente',
    preparation: 'Jejum de 8 horas e hidratação habitual.',
  },
  {
    id: 'EX-9002',
    type: 'Eletrocardiograma',
    unit: 'Hospital VidaPlus Central',
    date: '2026-06-29',
    time: '10:40',
    status: 'Agendado',
    preparation: 'Evitar café 2 horas antes do exame.',
  },
  {
    id: 'EX-8990',
    type: 'Colesterol Total',
    unit: 'Laboratório VidaPlus Diagnósticos',
    date: '2026-05-12',
    time: '06:50',
    status: 'Realizado',
    preparation: 'Resultado liberado no histórico clínico.',
  },
]

export const initialNotifications: NotificationItem[] = [
  {
    id: 'NT-1',
    title: 'Consulta confirmada',
    message: 'Sua consulta de cardiologia foi confirmada para 25/06 as 09:30.',
    time: 'Há 15 min',
    tone: 'success',
    read: false,
  },
  {
    id: 'NT-2',
    title: 'Lembrete de teleconsulta',
    message: 'Complete o check-in da sala virtual antes da consulta com Dr. Rafael Costa.',
    time: 'Há 1 h',
    tone: 'info',
    read: false,
  },
  {
    id: 'NT-3',
    title: 'Exame com preparo',
    message: 'O hemograma completo exige jejum de 8 horas.',
    time: 'Ontem',
    tone: 'warning',
    read: true,
  },
  {
    id: 'NT-4',
    title: 'Consentimento atualizado',
    message: 'Suas preferências de compartilhamento de dados foram registradas.',
    time: '2 dias',
    tone: 'success',
    read: true,
  },
]

export const initialConsents: ConsentItem[] = [
  {
    id: 'LGPD-1',
    title: 'Uso assistencial de dados sensíveis',
    description: 'Permite que equipes assistenciais acessem dados clínicos para consultas, exames e internações.',
    granted: true,
    critical: true,
  },
  {
    id: 'LGPD-2',
    title: 'Compartilhamento entre unidades VidaPlus',
    description: 'Habilita a continuidade do cuidado entre hospital, clínica e laboratório.',
    granted: true,
    critical: false,
  },
  {
    id: 'LGPD-3',
    title: 'Notificações por SMS e e-mail',
    description: 'Autoriza lembretes de consultas, exames e prescrições.',
    granted: true,
    critical: false,
  },
  {
    id: 'LGPD-4',
    title: 'Uso analitico anonimizado',
    description: 'Permite uso de dados anonimizados para melhoria operacional e indicadores.',
    granted: false,
    critical: false,
  },
]

export const initialTimeline: TimelineEvent[] = [
  {
    id: 'TL-1',
    date: '2026-05-18',
    title: 'Consulta clínica de acompanhamento',
    category: 'Consulta',
    professional: 'Dr. Rafael Costa',
    summary: 'Controle pressórico mantido. Ajuste leve de horário da medicação anti-hipertensiva.',
  },
  {
    id: 'TL-2',
    date: '2026-05-12',
    title: 'Exames laboratoriais de rotina',
    category: 'Exame',
    professional: 'Laboratório VidaPlus Diagnósticos',
    summary: 'Hemograma e perfil lipídico sem alterações críticas.',
  },
  {
    id: 'TL-3',
    date: '2026-04-10',
    title: 'Consulta cardiológica',
    category: 'Consulta',
    professional: 'Dra. Helena Martins',
    summary: 'Solicitado eletrocardiograma e reforço de atividade física leve.',
  },
  {
    id: 'TL-4',
    date: '2026-04-10',
    title: 'Prescrição digital',
    category: 'Prescrição',
    professional: 'Dra. Helena Martins',
    summary: 'Losartana 50mg 1 comprimido pela manhã por 60 dias.',
  },
  {
    id: 'TL-5',
    date: '2026-02-21',
    title: 'Atendimento fisioterapeutico',
    category: 'Evolucao',
    professional: 'Marina Soares',
    summary: 'Melhora da mobilidade lombar com orientações domiciliares.',
  },
]

export const initialPrescriptions: PrescriptionItem[] = [
  {
    id: 'RX-3001',
    date: '2026-05-18',
    professional: 'Dr. Rafael Costa',
    specialty: 'Clínica Geral',
    items: ['Losartana 50 mg - 1 comp. pela manhã', 'Aferir pressão 3 vezes por semana'],
    validUntil: '2026-07-18',
    status: 'Ativa',
  },
  {
    id: 'RX-2990',
    date: '2026-04-10',
    professional: 'Dra. Helena Martins',
    specialty: 'Cardiologia',
    items: ['Vitamina D 2000 UI - 1 capsula ao dia', 'Caminhada leve 30 min por dia'],
    validUntil: '2026-06-10',
    status: 'Encerrada',
  },
]

export const initialAgenda: AgendaItem[] = [
  {
    id: 'AG-1',
    patientId: 'P001',
    patientName: 'Maria Oliveira',
    age: 42,
    time: '09:30',
    date: '2026-06-25',
    type: 'Presencial',
    status: 'Confirmado',
    unit: 'Hospital VidaPlus Central',
    room: 'Consultorio 04',
    reason: 'Acompanhamento cardiológico',
    alert: 'Alergia a penicilina',
  },
  {
    id: 'AG-2',
    patientId: 'P002',
    patientName: 'Joao Santos',
    age: 35,
    time: '10:30',
    date: '2026-06-26',
    type: 'Telemedicina',
    status: 'Agendado',
    unit: 'Clínica VidaPlus Bairro Norte',
    room: 'Sala Virtual 2',
    reason: 'Avaliação de sintomas respiratórios leves',
    alert: 'Coleta laboratorial pendente',
  },
  {
    id: 'AG-3',
    patientId: 'P003',
    patientName: 'Ana Lima',
    age: 68,
    time: '13:30',
    date: '2026-06-27',
    type: 'Home Care',
    status: 'Confirmado',
    unit: 'Equipe VidaPlus Home Care',
    room: 'Rota 1',
    reason: 'Acompanhamento pós-alta',
    alert: 'Mobilidade reduzida',
  },
  {
    id: 'AG-4',
    patientId: 'P004',
    patientName: 'Carlos Ferreira',
    age: 51,
    time: '15:40',
    date: '2026-07-02',
    type: 'Presencial',
    status: 'Em atendimento',
    unit: 'Hospital VidaPlus Central',
    room: 'Observação 3',
    reason: 'Reavaliação clínica de internação',
    alert: 'Internação ativa',
  },
]

export const initialAdminPatients: AdminPatientRow[] = [
  {
    id: 'P001',
    name: 'Maria Oliveira',
    age: 42,
    status: 'Ativo',
    unit: 'Hospital VidaPlus Central',
    contact: '47988447711',
    insurance: 'VidaPlus Essencial',
    careType: 'Ambulatorial',
    alerts: ['Alergia a penicilina'],
    lastVisit: '2026-05-18',
    nextStep: 'Consulta cardiológica confirmada',
  },
  {
    id: 'P002',
    name: 'Joao Santos',
    age: 35,
    status: 'Pendente de exame',
    unit: 'Laboratório VidaPlus Diagnósticos',
    contact: '47999125580',
    insurance: 'Unimed Premium',
    careType: 'Exames',
    alerts: ['Hemograma pendente'],
    lastVisit: '2026-06-22',
    nextStep: 'Coleta laboratorial',
  },
  {
    id: 'P003',
    name: 'Ana Lima',
    age: 68,
    status: 'Home care',
    unit: 'Equipe VidaPlus Home Care',
    contact: '47997714455',
    insurance: 'VidaPlus Senior',
    careType: 'Domiciliar',
    alerts: ['Queda recente', 'Mobilidade reduzida'],
    lastVisit: '2026-06-23',
    nextStep: 'Visita de enfermagem as 13:30',
  },
  {
    id: 'P004',
    name: 'Carlos Ferreira',
    age: 51,
    status: 'Internado',
    unit: 'Hospital VidaPlus Central',
    contact: '47995558821',
    insurance: 'SulSaude Executivo',
    careType: 'Internação',
    alerts: ['Leito UTI 07'],
    lastVisit: '2026-06-24',
    nextStep: 'Alta prevista em 48h',
  },
]

export const initialProfessionals: ProfessionalRow[] = [
  {
    id: 'PR-01',
    name: 'Dra. Helena Martins',
    role: 'Cardiologista',
    unit: 'Hospital VidaPlus Central',
    shift: '08:00 - 17:00',
    status: 'Ativo',
    accessLevel: 'Clínico completo',
  },
  {
    id: 'PR-02',
    name: 'Dr. Rafael Costa',
    role: 'Clínico Geral',
    unit: 'Clínica VidaPlus Bairro Norte',
    shift: '09:00 - 18:00',
    status: 'Ativo',
    accessLevel: 'Clínico completo',
  },
  {
    id: 'PR-03',
    name: 'Enf. Patricia Almeida',
    role: 'Enfermagem',
    unit: 'Hospital VidaPlus Central',
    shift: '12:00 - 21:00',
    status: 'Ativo',
    accessLevel: 'Prontuário assistencial',
  },
  {
    id: 'PR-04',
    name: 'Tec. Bruno Rocha',
    role: 'Home Care',
    unit: 'Equipe VidaPlus Home Care',
    shift: '07:00 - 16:00',
    status: 'Em rota',
    accessLevel: 'Home care e sinais vitais',
  },
]

export const initialUnits: UnitRecord[] = [
  {
    id: 'UN-1',
    name: 'Hospital VidaPlus Central',
    type: 'Hospital',
    city: 'Florianopolis/SC',
    specialties: ['Cardiologia', 'Clínica Geral', 'Internação'],
    occupancy: 82,
    status: 'Operação plena',
  },
  {
    id: 'UN-2',
    name: 'Clínica VidaPlus Bairro Norte',
    type: 'Clínica',
    city: 'Florianopolis/SC',
    specialties: ['Clínica Geral', 'Fisioterapia', 'Nutrologia'],
    occupancy: 67,
    status: 'Agenda intensa',
  },
  {
    id: 'UN-3',
    name: 'Laboratório VidaPlus Diagnósticos',
    type: 'Laboratório',
    city: 'Sao Jose/SC',
    specialties: ['Coleta', 'Imagem', 'Analises Clinicas'],
    occupancy: 58,
    status: 'Fluxo regular',
  },
  {
    id: 'UN-4',
    name: 'Equipe VidaPlus Home Care',
    type: 'Home Care',
    city: 'Grande Florianopolis',
    specialties: ['Visita Domiciliar', 'Enfermagem', 'Fisioterapia'],
    occupancy: 74,
    status: 'Rotas otimizadas',
  },
]

export const initialAdmissions: AdmissionRecord[] = [
  {
    id: 'INT-1001',
    patient: 'Carlos Ferreira',
    unit: 'Hospital VidaPlus Central',
    wing: 'UTI Adulto',
    bed: 'UTI-07',
    admissionDate: '2026-06-22',
    reason: 'Monitoramento de dor toracica',
    status: 'Internado',
    physician: 'Dra. Helena Martins',
  },
  {
    id: 'INT-1002',
    patient: 'Marcia Prado',
    unit: 'Hospital VidaPlus Central',
    wing: 'Ala Norte',
    bed: 'N-203',
    admissionDate: '2026-06-20',
    reason: 'Pós-operatório',
    status: 'Alta prevista',
    physician: 'Dr. Rafael Costa',
  },
]

export const initialBeds: BedRecord[] = [
  {
    id: 'BED-1',
    unit: 'Hospital VidaPlus Central',
    wing: 'UTI Adulto',
    room: 'UTI-07',
    bed: 'Leito 07',
    status: 'Ocupado',
    patient: 'Carlos Ferreira',
    cleaningEta: '--',
  },
  {
    id: 'BED-2',
    unit: 'Hospital VidaPlus Central',
    wing: 'UTI Adulto',
    room: 'UTI-08',
    bed: 'Leito 08',
    status: 'Disponível',
    patient: '--',
    cleaningEta: '--',
  },
  {
    id: 'BED-3',
    unit: 'Hospital VidaPlus Central',
    wing: 'Ala Norte',
    room: 'N-203',
    bed: 'Leito 203',
    status: 'Reservado',
    patient: 'Marcia Prado',
    cleaningEta: '--',
  },
  {
    id: 'BED-4',
    unit: 'Hospital VidaPlus Central',
    wing: 'Ala Sul',
    room: 'S-118',
    bed: 'Leito 118',
    status: 'Higienização',
    patient: '--',
    cleaningEta: '35 min',
  },
  {
    id: 'BED-5',
    unit: 'Hospital VidaPlus Central',
    wing: 'Observação',
    room: 'OBS-03',
    bed: 'Leito 03',
    status: 'Manutenção',
    patient: '--',
    cleaningEta: '90 min',
  },
]

export const initialSupplies: SupplyRecord[] = [
  {
    id: 'SUP-1',
    item: 'Luvas Nitrilicas',
    category: 'EPI',
    unit: 'Hospital VidaPlus Central',
    stock: 950,
    minStock: 600,
    status: 'Estável',
    trend: '+5% na semana',
  },
  {
    id: 'SUP-2',
    item: 'Cateter Venoso 20G',
    category: 'Procedimentos',
    unit: 'Hospital VidaPlus Central',
    stock: 120,
    minStock: 180,
    status: 'Crítico',
    trend: '-18% na semana',
  },
  {
    id: 'SUP-3',
    item: 'Reagente de Hemograma',
    category: 'Laboratório',
    unit: 'Laboratório VidaPlus Diagnósticos',
    stock: 40,
    minStock: 35,
    status: 'Alerta',
    trend: '-4% na semana',
  },
  {
    id: 'SUP-4',
    item: 'Kit Curativo Domiciliar',
    category: 'Home Care',
    unit: 'Equipe VidaPlus Home Care',
    stock: 28,
    minStock: 20,
    status: 'Estável',
    trend: '+2% na semana',
  },
]

export const initialFinanceReports: FinanceRecord[] = [
  {
    id: 'FIN-1',
    unit: 'Hospital VidaPlus Central',
    revenue: 485000,
    expenses: 362000,
    occupancy: 82,
    outpatient: 214,
    telemedicine: 28,
  },
  {
    id: 'FIN-2',
    unit: 'Clínica VidaPlus Bairro Norte',
    revenue: 228000,
    expenses: 141000,
    occupancy: 67,
    outpatient: 309,
    telemedicine: 42,
  },
  {
    id: 'FIN-3',
    unit: 'Laboratório VidaPlus Diagnósticos',
    revenue: 173000,
    expenses: 96000,
    occupancy: 58,
    outpatient: 468,
    telemedicine: 0,
  },
  {
    id: 'FIN-4',
    unit: 'Equipe VidaPlus Home Care',
    revenue: 118000,
    expenses: 76000,
    occupancy: 74,
    outpatient: 54,
    telemedicine: 12,
  },
]

export const initialAuditLogs: AuditLog[] = [
  {
    id: 'LOG-1',
    date: '24/06/2026',
    time: '08:05',
    user: 'fernanda.nunes',
    profile: 'Administrador',
    action: 'Exportacao de relatorio financeiro',
    module: 'Relatórios Financeiros',
    ip: '10.20.1.45',
    status: 'Sucesso',
  },
  {
    id: 'LOG-2',
    date: '24/06/2026',
    time: '07:58',
    user: 'dra.helena',
    profile: 'Profissional',
    action: 'Acesso ao prontuário de Maria Oliveira',
    module: 'Prontuários',
    ip: '10.20.1.17',
    status: 'Sucesso',
  },
  {
    id: 'LOG-3',
    date: '24/06/2026',
    time: '07:51',
    user: 'maria.oliveira',
    profile: 'Paciente',
    action: 'Aceite de consentimento LGPD',
    module: 'Privacidade e LGPD',
    ip: '177.22.10.81',
    status: 'Sucesso',
  },
  {
    id: 'LOG-4',
    date: '24/06/2026',
    time: '07:40',
    user: 'fernanda.nunes',
    profile: 'Administrador',
    action: 'Alteração de permissão de telemedicina',
    module: 'Perfis de Acesso',
    ip: '10.20.1.45',
    status: 'Auditado',
  },
]

export const initialAccessHistory: AccessHistoryItem[] = [
  {
    id: 'ACC-1',
    user: 'fernanda.nunes',
    profile: 'Administrador',
    lastAccess: '24/06/2026 08:05',
    device: 'Desktop corporativo',
    risk: 'Baixo',
  },
  {
    id: 'ACC-2',
    user: 'dra.helena',
    profile: 'Profissional',
    lastAccess: '24/06/2026 07:58',
    device: 'Notebook clínico',
    risk: 'Baixo',
  },
  {
    id: 'ACC-3',
    user: 'maria.oliveira',
    profile: 'Paciente',
    lastAccess: '24/06/2026 07:51',
    device: 'Smartphone Android',
    risk: 'Medio',
  },
]

export const initialPermissions: PermissionMatrixRow[] = [
  {
    id: 'PERM-1',
    module: 'Histórico Clínico',
    patient: 'Leitura parcial',
    professional: 'Leitura e escrita',
    admin: 'Auditoria',
    note: 'Dados sensíveis mascarados fora do contexto assistencial.',
  },
  {
    id: 'PERM-2',
    module: 'Telemedicina',
    patient: 'Acesso agendado',
    professional: 'Atendimento e registro',
    admin: 'Monitoramento operacional',
    note: 'Conexão segura simulada e controle de sessão.',
  },
  {
    id: 'PERM-3',
    module: 'Internações e Leitos',
    patient: 'Sem acesso',
    professional: 'Consulta restrita',
    admin: 'Gestão completa',
    note: 'Movimentações críticas geram log automático.',
  },
  {
    id: 'PERM-4',
    module: 'Relatórios Financeiros',
    patient: 'Sem acesso',
    professional: 'Sem acesso',
    admin: 'Visualização e exportação',
    note: 'Disponível apenas para perfis administrativos autorizados.',
  },
]

export const initialHomeCareVisits: HomeCareVisit[] = [
  {
    id: 'HC-1',
    patientId: 'P003',
    patient: 'Ana Lima',
    address: 'Rua dos Coqueiros, 54 - Sao Jose/SC',
    nextVisit: '25/06/2026 13:30',
    status: 'Confirmado',
    risk: 'Alta',
    nurse: 'Tec. Bruno Rocha',
    notes: 'Paciente precisa de apoio para mobilidade e monitoramento de dor.',
  },
  {
    id: 'HC-2',
    patientId: 'P005',
    patient: 'Nair Tavares',
    address: 'Servidao do Sol, 122 - Palhoca/SC',
    nextVisit: '25/06/2026 15:15',
    status: 'Agendado',
    risk: 'Média',
    nurse: 'Enf. Patricia Almeida',
    notes: 'Troca de curativo e avaliação de sinais vitais.',
  },
]

export const initialTelemedicineMessages: TelemedicineMessage[] = [
  {
    id: 'MSG-1',
    author: 'Sistema',
    time: '14:45',
    message: 'Sala de espera aberta. Aguarde o profissional iniciar o atendimento.',
  },
  {
    id: 'MSG-2',
    author: 'Dra. Helena Martins',
    time: '14:58',
    message: 'Vou iniciar a teleconsulta no horário marcado. Mantenha câmera e áudio liberados.',
  },
]

export const moduleStatuses: ModuleStatus[] = [
  { id: 'MOD-1', name: 'Telemedicina', status: 'Estável', latency: '72 ms' },
  { id: 'MOD-2', name: 'Prontuário', status: 'Sincronizado', latency: '48 ms' },
  { id: 'MOD-3', name: 'Agendamento', status: 'Operacional', latency: '54 ms' },
  { id: 'MOD-4', name: 'Auditoria', status: 'Logs ativos', latency: '12 ms' },
]

export const availabilitySnapshot = {
  availability: '99,5%',
  backup: '24/06/2026 07:15',
  integrity: 'Sem incidentes críticos nas últimas 24h',
}

export const professionalDemoUser = 'Dra. Helena Martins'
export const adminDemoUser = 'Fernanda Nunes'
