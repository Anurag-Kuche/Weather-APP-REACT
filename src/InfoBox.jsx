import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import "./InfoBox.css"


export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL="https://images.unsplash.com/photo-1675695761073-daf92c820466?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdCUyMHdlYXRoZXIlMjBza2llc3xlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1584627641460-367c6b1099d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXIlMjBza2llc3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1607500098489-1991d1fbab7a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    


   return(
    <div className="InfoBox">
       
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity >80 
                    ? RAIN_URL 
                    : info.temp >15 
                    ? HOT_URL 
                    : COLD_URL}
                title="green iguana"/>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity >80 
                    ? <ThunderstormIcon/> 
                    : info.temp >15 
                    ? <WbSunnyIcon/> 
                    : <AcUnitIcon/>
            }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature: {info.temp}&deg;c</p>
            <p>Humidity: {info.humidity}</p>
            <p>Min Temp: {info.tempMin}&deg;c</p>
            <p>Max Temp: {info.tempMax}&deg;c</p>
            <p>feels like: {info.feelsLike}&deg;c</p>
            <p>Weather is described to be: <i>{info.weather}</i></p>

            </Typography>
            </CardContent>
        </Card>
        </div>
    </div>
   )
}