export interface Status {
    content: string;
    _id: string;
    comments: [
        { user: { name: string }, content: string }
    ];
}
