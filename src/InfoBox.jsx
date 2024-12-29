import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL =
        "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
        const HOT_URL="https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
        const COLD_URL="https://media.istockphoto.com/id/1064083590/photo/winter-scene-snowfall-in-the-woods.webp?a=1&b=1&s=612x612&w=0&k=20&c=1uJyyzjd5VsfM7SM1OvmeAmVzhwrGFKaDMj18C9Bh1I=";
        const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? RAIN_URL : info.temp>15 ? HOT_URL : COLD_URL}
                    title="Weather image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}{info.humidity>80 ? <ThunderstormIcon/> : info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                       
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div>Temperature: {info.temp}&deg;C</div>
                        <div>Humidity: {info.humidity}%</div>
                        <div>Min Temp: {info.tempMin}&deg;C</div>
                        <div>Max Temp: {info.tempMax}&deg;C</div>
                        <div>
                            The weather can be described as <i>{info.weather}</i>{" "}
                            and feels like {info.feelslike}&deg;C
                        </div>
                    </Typography>
                </CardContent>

            </Card>
            </div>
        </div>
    );
}
