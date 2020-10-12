import {  EditLocationRounded, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './chatHeader.css'

export default function ChatHeader( {channelName}) {
    return (
        <div className="chatHeader">
            <div className="chatHeader__left">
                <h3><span className="hash">#</span>
                        {channelName}
                </h3>
            </div>

            <div className="chatHeader__right">
                <Notifications />
                <EditLocationRounded />
                <PeopleAltRounded />

                <div className="search">
                    <input placeholder='search' />
                    <SearchRounded />
                </div>

                <SendRounded />
                <HelpRounded />
            </div>


        </div>
    )
}
