import { IPost, ISeries, IUser } from './interfaces';
import mockData from './mock-data.json';

interface IMockData {
    posts: IPost[];
    users: IUser[];
    series: ISeries[];
}

const md = mockData as IMockData;

export default md;
