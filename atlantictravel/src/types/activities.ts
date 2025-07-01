interface Photo {
    id: number;
    url: string;
    activityId: number;
}

interface Activity {
    id: number;
    title: string;
    description: string;
    date: string;
    price: number;
    photos: Photo[];
}

export default Activity;