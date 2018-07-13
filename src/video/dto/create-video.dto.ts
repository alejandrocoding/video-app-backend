export class CreateVideoDTO {
  readonly title: string;
  readonly description: string;
  readonly URL: string;
  readonly posterURL: string;
  readonly duration: number;
  readonly createdBy: string;
  readonly createdAt: Date;
}
