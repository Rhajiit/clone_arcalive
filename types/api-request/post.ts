interface RequestTypeGetOfPost {
  databaseSourceName: string;
  collectionSourceName: string;
}

interface CreationOfPostType {
  name: string;
  content: string;
}

interface RequestCreationOfPostType extends CreationOfPostType {
  createdAt: string;
  updatedAt: string;
}

interface UpdatePostType {
  id: string;
  name: string;
  content: string;
}

interface RequestUpdatePostType extends UpdatePostType {
  updatedAt: string;
}

interface RequestDeletePostType {
  id: string;
}

export type {
  RequestTypeGetOfPost,
  CreationOfPostType,
  RequestCreationOfPostType,
  UpdatePostType,
  RequestUpdatePostType,
  RequestDeletePostType,
};
