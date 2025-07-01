export interface Photo {
    id: number;
    url: string;
    activityId: number;
}

export interface Activity {
    id: number;
    title: string;
    description: string;
    date: string; 
    price: number;
    photos: Photo[]; 
}
