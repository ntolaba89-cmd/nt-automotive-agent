export interface DateOption {
    /** Fecha en formato ISO YYYY-MM-DD, para usar con getAvailability. */
    value: string
    /** Texto legible para mostrar al usuario, ej. "Lun 25 Ago". */
    label: string
  }
  
  const DAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  const MONTH_LABELS = [
    'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
    'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
  ]
  
  function toIsoDate(date: Date): string {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }
  
  function toLabel(date: Date): string {
    const dayName = DAY_LABELS[date.getDay()]
    const dayNumber = date.getDate()
    const monthName = MONTH_LABELS[date.getMonth()]
    return `${dayName} ${dayNumber} ${monthName}`
  }
  
  /**
   * Genera las proximas `count` fechas habiles (excluyendo domingos) a
   * partir de hoy. No depende de datos mock: usa la fecha real del sistema.
   */
  export function getUpcomingBusinessDays(
    count: number,
    fromDate: Date = new Date(),
  ): DateOption[] {
    const results: DateOption[] = []
    const current = new Date(fromDate)
  
    while (results.length < count) {
      if (current.getDay() !== 0) {
        results.push({
          value: toIsoDate(current),
          label: toLabel(current),
        })
      }
      current.setDate(current.getDate() + 1)
    }
  
    return results
  }