interface Location {
  start: object
  end: object
}

/**
 * Class Token
 * Represents a token.
 */
class Token {
  constructor (public type: string, public value: string, public location: Location) {
    this.type = type
    this.value = value
    this.location = location
  }
}
