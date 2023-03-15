function PhoneNumber(phoneNumbertring) {
  const fixedString = phoneNumbertring.replace(/[\sa-zA-Z]/g,'')
  this.contryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
  this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
  this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}
console.log(new PhoneNumber('+55 (81) 9 9984-5566 '))
console.log(new PhoneNumber('+1 (55) as555-999-8888'))