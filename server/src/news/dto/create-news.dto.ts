export class CreateNewsDto {
    readonly header: string;
    readonly text: string;
    readonly views: number;
    readonly record_type: string;
    readonly author_id: number;
}
