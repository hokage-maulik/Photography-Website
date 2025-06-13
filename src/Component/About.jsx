

import React from 'react';
import "../CSS/About.css";

export default function About() {
    return (
        <div className='mt-4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <img
                            src="https://images.pexels.com/photos/15891673/pexels-photo-15891673.jpeg?cs=srgb&dl=pexels-sanketgraphy-15891673.jpg&fm=jpg"
                            alt=""
                            className='img-fluid rounded shadow'
                        />
                    </div>

                    <div className="col-md-6 ">
                        <h2 className="fadeInDown">About Me</h2>
                        <p className="fadeInUp" style={{ textAlign: "justify" }}>
                            Photography is the art and practice of capturing light to create images that tell a story, evoke emotions, or preserve memories. Whether taken on a smartphone or a professional DSLR, a photograph freezes a moment in time — allowing us to relive it, reflect on it, or share it with others.
                        </p>
                        <p className="fadeInUp delay-1s" style={{ textAlign: "justify" }}>
                            More than just pressing a shutter button, photography involves creativity, vision, and technical skill. From capturing candid moments at a wedding to framing the perfect sunset shot, photography transforms everyday scenes into lasting visual impressions.
                        </p>
                        <p className="fadeInUp delay-2s" style={{ textAlign: "justify" }}>
                            For many, photography is a passion, a form of self-expression, and a powerful medium to connect with people across the world.
                        </p>
                        <p className="fadeInUp delay-3s" style={{ textAlign: "justify" }}>
                            Photography is not just about capturing what we see — it's about revealing what we feel. Through the lens, photographers interpret the world in unique and personal ways, turning fleeting instants into powerful stories. Whether documenting real-life events, showcasing the beauty of nature, or experimenting with abstract visuals, photography bridges the gap between reality and imagination.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
