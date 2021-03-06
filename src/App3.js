import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios'
import Carousel from "./lib";
import './App.css';

const CLIENT_ID = '31cf57d170cbbbbc9c5f5f671cb612b275d5b3a83722ecebd754bf4661fe0388'
const server = 'https://api.unsplash.com'

class App extends Component {
    state = {
        photos: []
    }

    componentWillMount() {
        axios.get(`${server}/search/photos/?client_id=${CLIENT_ID}&per_page=50&query=animal& =landscape`)
            .then((res) => {
                console.log(res)
                this.setState({ photos: res.data.results })
            })
    }

    renderImages = () => {
        const { photos } = this.state
        // console.log(photos);
        if (!photos.length) return <div>Loading...</div>
        return photos.splice(0, 3).map((img) => <img key={img.id} src={img.urls.regular} alt={"photo"} />)
    }

    render() {
        return (
            <div>
                <h1 style={{ textAlign: 'center', margin: '40px 0' }}>Simple react 3d carousel</h1>
                <Carousel transition={500} lazyLoad={true}>
                    {this.renderImages()}
                </Carousel>
            </div>
        )
    }

}

export default App;
