import React, { useState, useEffect } from 'react';
import { getVideo } from "../../api";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export default function VideoView() {
    const [video, setVideo] = useState();
    const param = useParams()

    useState(() => {
        getVideo(param.cid, param.mcid, 1).then(res => {
            if (res.data.status) {
                console.log(res.data.video);
                setVideo(res.data.video)
            } else {
                toast.error(res.data.message);
            }
        })
    }, [])

    return (
        <div style={{ padding: 30 }}>
            {video && <center>
                <h5>Video Tutorial</h5>
                <iframe width="660" height="415" src={video.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h5>{video.name}</h5>
                <p> {video.description} </p>
            </center>}
        </div>
    )
}
