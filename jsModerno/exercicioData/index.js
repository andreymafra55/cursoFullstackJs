const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

function birthday(date){
  const birthday = dayjs(date)
  const today = dayjs() //pega data de hj

  const ageInYears = today.diff(birthday,'year')
  const nextBirthday = birthday.add(ageInYears + 1 ,'year')
  const daysToNextBirthday = nextBirthday.diff(today,'day') + 1

  console.log('idade: ' + ageInYears)
  console.log('Proximo Anivesario: ' + nextBirthday.format('DD/MM/YYYY'))+
  console.log('Faltam ' +daysToNextBirthday+ ' dias para seu anivesario' )
}

birthday('2002-10-30')