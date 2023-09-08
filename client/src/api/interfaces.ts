export interface ISeries {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    postedAt: string;
}

export interface IPost {
    id: string;
    author: IUser;
    comments: IComment[];
    description: string;
    exif: IExif;
    hidden: boolean;
    imageUrl: string;
    likes: number;
    postedAt: string;
    title: string;
    seriesId: string;
}

export interface IComment {
    id: string;
    author: IUser;
    comment: string;
    postedAt: string;
    postId: string;
}

export interface IUser {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface IExif {
    aperture: string;
    camera: string;
    dateTime: string;
    exposureTime: string;
    focalLength: string;
    iso: string;
    latitude: string;
    lens: string;
    location: string;
    longitude: string;
    shutterSpeed: string;
}
