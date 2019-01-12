
/**
 * Handles input code from the user
 */
class InputStream {
  /**
   * Current position inside the input
   */
  private pos: number = 0

  /**
   * Current line (row) inside the input
   */
  private line: number = 1

  /**
   * Current column inside the input
   */
  private col: number = 0

  /**
   * Input code from the user
   */
  private input: string

  /**
   * @param inputString Raw code input from the user
   */
  constructor (inputString: string) {
    this.input = inputString
  }

  /**
   * @returns Character at current position and increases position by 1.
   */
  public next (): string {
    const ch = this.input.charAt(this.pos)
    this.pos = this.pos + 1
    if (ch === '\n') {
      this.line = this.line + 1
      this.col = 0
    } else {
      this.col++
    }
    return ch
  }

  /**
   * @returns Character at current position.
   */
  public peek (): string {
    return this.input.charAt(this.pos)
  }

  /**
   * @returns Boolean representing end of a string
   */
  public eof (): boolean {
    return this.peek() === ''
  }

  /**
   * Logs an error message with line and col info
   */
  public err (msg: string): void {
    throw new Error(msg + ' (' + this.line + ':' + this.col + ')')
  }
}

export default InputStream
