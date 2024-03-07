const formatCurrency = value => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 3
  }).format(value)
}

export default formatCurrency
