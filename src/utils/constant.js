export const checkTime = (time) => {
    const timeDistance = (d1, d2) => {
        let ms1 = d1.getTime();
        let ms2 = d2.getTime();
        return Math.ceil((ms2 - ms1) / (24*60*60*1000));
    };
    let today = new Date();
    let timeUpload = new Date(time);


    return timeDistance(timeUpload, today);
}


export const API_KEY = 'AIzaSyCfDICxp7oBAuvGTFdBz9B3cnqRKKGbf6c';


