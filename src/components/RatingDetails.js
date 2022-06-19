import React from 'react';
import { Chart } from "react-google-charts";

const RatingDetails = ({movies}) => {

    const data = () => {
        const data = [["Movie", "RT Rating"]];
        for (let i = 0; i < movies.length; i++){
            console.log(movies[i].title);
            console.log(movies[i].rt_score)
            const newMovieData = [movies[i].title, parseInt(movies[i].rt_score)];
            data.push(newMovieData);
        }
        console.log(data)
        return data;
    }
  
    const options = {
        title: "Studio Ghibli Movie Ratings",
        chartArea: { 
            width: "30%" },
        hAxis: {
            title: "RT Rating",
        },
        vAxis: {
            title: "Movie",
        },
    };

    return (
        <>
            <div className="ratingdetails">
                <Chart
                    chartType="BarChart"
                    data={data()}
                    options={options}
                    width="80%"
                    height="600px"
                />
            </div>
        </>
    )
}

export default RatingDetails;