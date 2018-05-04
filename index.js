class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  startDate() {
  return  new Date(this.startDate)
  }
  // yearsExperienceFromBeginningOf(year) {
  //   return
  // }
}
