import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice';
import './SidebarChannel.css'

export default function SidebarChannel( { id, channelName }) {

    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" 
            onClick={ () => dispatch(
                setChannelInfo({
                    channelId: id,
                    channelName,
            })
            )}>

            <h4>
            <span className="sidebarCahnnel__hash">#</span>
            {channelName}
            </h4>
            
        </div>
    )
}
