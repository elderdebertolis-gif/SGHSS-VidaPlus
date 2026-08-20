import { describe, expect, it } from 'vitest'
import { normalizeCancellationJustification, validateRegistration } from '../src/validation'

const completeRegistration = {
  name: 'Maria Oliveira',
  cpf: '08019382950',
  phone: '47988447711',
  email: 'maria@example.com',
  birthDate: '1984-08-14',
  address: 'Rua das Araucarias, 180',
  healthInfo: 'Hipertensao controlada',
  emergencyContact: 'Luciana - 47988114020',
  consent: true,
}

describe('validacao do cadastro inicial', () => {
  it('aceita os dados cadastrais e de saude obrigatorios', () => {
    expect(validateRegistration(completeRegistration)).toEqual([])
  })

  it('identifica endereco, saude e consentimento ausentes', () => {
    const missing = validateRegistration({
      ...completeRegistration,
      address: ' ',
      healthInfo: '',
      consent: false,
    })

    expect(missing).toEqual(['endereço', 'informações básicas de saúde', 'consentimento LGPD'])
  })
})

describe('justificativa de cancelamento', () => {
  it('remove espacos excedentes e preserva o motivo informado', () => {
    expect(normalizeCancellationJustification('  Conflito de horario  ')).toBe('Conflito de horario')
  })

  it('rejeita justificativa vazia', () => {
    expect(normalizeCancellationJustification('   ')).toBeNull()
  })
})
