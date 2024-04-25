export class By {
  public static testId(id: string): string {
    return `[data-testid=${id}]`
  }
}
