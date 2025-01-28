interface RequestTypeGetOfPost {
  databaseSourceName: string;
  collectionSourceName: string;
}

interface RequestCreationOfPostType {
  name: string;
  content: string;
}

export type { RequestTypeGetOfPost, RequestCreationOfPostType };
