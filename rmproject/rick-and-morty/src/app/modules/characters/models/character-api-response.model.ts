interface CharacterApiPageResponse {
    info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
}