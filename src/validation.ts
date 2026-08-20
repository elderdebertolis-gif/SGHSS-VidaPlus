export interface RegistrationFields {
  name: string
  cpf: string
  phone: string
  email: string
  birthDate: string
  address: string
  healthInfo: string
  emergencyContact: string
  consent: boolean
}

export function validateRegistration(fields: RegistrationFields) {
  const missingFields: string[] = []

  if (!fields.name.trim()) missingFields.push('nome completo')
  if (!fields.cpf.trim()) missingFields.push('CPF')
  if (!fields.phone.trim()) missingFields.push('telefone')
  if (!fields.email.trim()) missingFields.push('e-mail')
  if (!fields.birthDate) missingFields.push('data de nascimento')
  if (!fields.address.trim()) missingFields.push('endereço')
  if (!fields.healthInfo.trim()) missingFields.push('informações básicas de saúde')
  if (!fields.emergencyContact.trim()) missingFields.push('contato de emergência')
  if (!fields.consent) missingFields.push('consentimento LGPD')

  return missingFields
}

export function normalizeCancellationJustification(value: string) {
  const justification = value.trim()
  return justification || null
}
