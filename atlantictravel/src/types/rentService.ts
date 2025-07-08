export interface Car {
    id: number;
    model: string;
    description: string;
    image: string;
    createdAt: string;
}


export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

