class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let blocks = 0
    blocks += this.endingLocation.vertical - this.beginningLocation.vertical)
    blocks += this.endingLocation.horizontal - this.beginningLocation.horizontal)
    return blocks
  }
}
