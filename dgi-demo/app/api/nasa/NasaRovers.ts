
export interface Rover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: RoverCamera[]
}


export interface RoverCamera {
    id?: number;
    rover_id?: number;
    name: string;
    full_name: string;
}

export interface RoverPicture {
    id: string;
    sol: string;
    img_src: string;
    earth_date: string;
    camera: RoverCamera;
    rover: Rover;
}

