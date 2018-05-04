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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let i = for (const element of eastWest) {
      element === this.beginningLocation.horizontal
    }
    let j = for (const element of eastWest) {
      element === this.endingLocation.horizontal
    }

    blocks += Math.abs(i - j)
    
    blocks += Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    
    
    return blocks 
  }
}
