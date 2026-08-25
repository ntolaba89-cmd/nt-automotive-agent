import { getUpcomingBusinessDays } from '../core/logic'

const dates = getUpcomingBusinessDays(7)
for (const date of dates) {
  console.log(`${date.value} -> ${date.label}`)
}