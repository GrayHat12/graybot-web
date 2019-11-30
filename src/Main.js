import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
//import Toolbar from '@material-ui/core/Toolbar';
//import IconButton from '@material-ui/core/IconButton';
//import Typography from '@material-ui/core/Typography';
//import { fade, makeStyles } from '@material-ui/core/styles';
//import SearchIcon from '@material-ui/icons/Search';
//import InputBase from '@material-ui/core/InputBase';
//import axios from 'axios';
//import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
//import HeadsetSharpIcon from '@material-ui/icons/HeadsetSharp';
//import Fab from '@material-ui/core/Fab';
//import RotateLeftSharpIcon from '@material-ui/icons/RotateLeftSharp';
import Player from './Player';
/*
const useStylesAB = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
}));

const useStylesActBut = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        alignContent: "center"
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
*/
export default function Main() {
    /*function SearchAppBar() {
        const classes = useStylesAB();
        const classesAB = useStylesActBut();
        const [ITEMS, setItems] = React.useState([]);
        var defoptions = {
            audioLists: [],
            defaultPlayIndex: 0,
            theme: 'dark',
            bounds: 'body',
            preload: true,
            glassBg: true,
            remember: true,
            remove: true,
            defaultPosition: {
                top: 300,
                left: 120
            },
            playModeText: {
                order: 'once',
                orderLoop: 'loop all',
                singleLoop: 'loop current',
                shufflePlay: 'shuffle'
            },
            openText: 'open',
            closeText: 'close',
            checkedText: '-',
            unCheckedText: '-',
            notContentText: 'no music',
            panelTitle: 'Playlist',
            defaultPlayMode: 'order',
            mode: 'full',
            once: true,
            autoPlay: true,
            toggleMode: true,
            showMiniModeCover: true,
            showMiniProcessBar: false,
            drag: true,
            seeked: true,
            controllerTitle: <HeadsetSharpIcon />,
            showProgressLoadBar: true,
            showPlay: true,
            showReload: true,
            showDownload: true,
            showPlayMode: true,
            showThemeSwitch: true,
            showLyric: false,
            extendsContent: [],
            defaultVolume: 100,
            playModeShowTime: 600,
            loadAudioErrorPlayNext: true,
            autoHiddenCover: true,
            onAudioDownload(audioInfo) {
                console.log('audio download', audioInfo)
            },
            onAudioPlay(audioInfo) {
                console.log('audio playing', audioInfo)
            },
            onAudioPause(audioInfo) {
                console.log('audio pause', audioInfo)
            },
            onAudioSeeked(audioInfo) {
                console.log('audio seeked', audioInfo)
            },
            onAudioVolumeChange(currentVolume) {
                console.log('audio volume change', currentVolume)
            },
            onAudioEnded(audioInfo) {
                console.log('audio ended', audioInfo)
            },
            onAudioAbort(e) {
                console.log('audio abort', e)
            },
            onAudioProgress(audioInfo) {
            },
            onAudioReload(audioInfo) {
                console.log('audio reload:', audioInfo)
            },
            onAudioLoadError(e) {
                console.error('audio load err', e)
            },
            onThemeChange(theme) {
                console.log('theme change:', theme)
            },
            onAudioListsChange(currentPlayId, audioLists, audioInfo) {
                console.log('[currentPlayId] audio lists change:', currentPlayId)
                console.log('[audioLists] audio lists change:', audioLists)
                console.log('[audioInfo] audio lists change:', audioInfo)
            },
            onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
                console.log(
                    'audio play track change:',
                    currentPlayId,
                    audioLists,
                    audioInfo
                )
            },

            onPlayModeChange(playMode) {
                console.log('play mode change:', playMode)
            },

            onModeChange(mode) {
                console.log('mode change:', mode)
            },

            onAudioListsPanelChange(panelVisible) {
                console.log('audio lists panel visible:', panelVisible)
            },

            onAudioListsDragEnd(fromIndex, endIndex) {
                console.log('audio lists drag end:', fromIndex, endIndex)
            },

            onAudioLyricChange(lineNum, currentLyric) {
                console.log('audio lyric change:', lineNum, currentLyric)
            },

            // custom music player root node
            getContainer() {
                return document.body
            },
            getAudioInstance(audio) {
                console.log('audio instance', audio)
            }

            // transform audio info like return a Promise
            // onBeforeAudioDownload() {
            //   return Promise.resolve({
            //     src: '1.mp3'
            //   })
            // }
        };
        var prevSearch = "<#NONE#>"
        const [options, setOptions] = React.useState(defoptions);
        function changeOptions(audioList) {
            var lsts = options.audioLists;
            //lsts.concat(audioList);
            console.log(audioList);
            for(var i=0;i<audioList.length;i++)
            {
                lsts.push(audioList[i]);
            }
            console.log(lsts);
            var ndefoptions ={
                audioLists: lsts,
                defaultPlayIndex: 0,
                theme: 'dark',
                bounds: 'body',
                preload: true,
                glassBg: false,
                remember: true,
                remove: true,
                defaultPosition: {
                    top: 300,
                    left: 120
                },
                playModeText: {
                    order: 'once',
                    orderLoop: 'loop all',
                    singleLoop: 'loop current',
                    shufflePlay: 'shuffle'
                },
                openText: 'open',
                closeText: 'close',
                checkedText: '-',
                unCheckedText: '-',
                notContentText: 'no music',
                panelTitle: 'Playlist',
                defaultPlayMode: 'order',
                mode: 'full',
                once: true,
                autoPlay: true,
                toggleMode: true,
                showMiniModeCover: true,
                showMiniProcessBar: false,
                drag: true,
                seeked: true,
                controllerTitle: <HeadsetSharpIcon />,
                showProgressLoadBar: true,
                showPlay: true,
                showReload: true,
                showDownload: true,
                showPlayMode: true,
                showThemeSwitch: true,
                showLyric: false,
                extendsContent: [],
                defaultVolume: 100,
                playModeShowTime: 600,
                loadAudioErrorPlayNext: true,
                autoHiddenCover: true,
                onAudioDownload(audioInfo) {
                    console.log('audio download', audioInfo)
                },
                onAudioPlay(audioInfo) {
                    console.log('audio playing', audioInfo)
                },
                onAudioPause(audioInfo) {
                    console.log('audio pause', audioInfo)
                },
                onAudioSeeked(audioInfo) {
                    console.log('audio seeked', audioInfo)
                },
                onAudioVolumeChange(currentVolume) {
                    console.log('audio volume change', currentVolume)
                },
                onAudioEnded(audioInfo) {
                    console.log('audio ended', audioInfo)
                },
                onAudioAbort(e) {
                    console.log('audio abort', e)
                },
                onAudioProgress(audioInfo) {
                },
                onAudioReload(audioInfo) {
                    console.log('audio reload:', audioInfo)
                },
                onAudioLoadError(e) {
                    console.error('audio load err', e)
                },
                onThemeChange(theme) {
                    console.log('theme change:', theme)
                },
                onAudioListsChange(currentPlayId, audioLists, audioInfo) {
                    console.log('[currentPlayId] audio lists change:', currentPlayId)
                    console.log('[audioLists] audio lists change:', audioLists)
                    console.log('[audioInfo] audio lists change:', audioInfo)
                },
                onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
                    console.log(
                        'audio play track change:',
                        currentPlayId,
                        audioLists,
                        audioInfo
                    )
                },
    
                onPlayModeChange(playMode) {
                    console.log('play mode change:', playMode)
                },
    
                onModeChange(mode) {
                    console.log('mode change:', mode)
                },
    
                onAudioListsPanelChange(panelVisible) {
                    console.log('audio lists panel visible:', panelVisible)
                },
    
                onAudioListsDragEnd(fromIndex, endIndex) {
                    console.log('audio lists drag end:', fromIndex, endIndex)
                },
    
                onAudioLyricChange(lineNum, currentLyric) {
                    console.log('audio lyric change:', lineNum, currentLyric)
                },
    
                // custom music player root node
                getContainer() {
                    return document.body
                },
                getAudioInstance(audio) {
                    console.log('audio instance', audio)
                }
            };
            console.log(ndefoptions);
            setOptions(ndefoptions);
        }
        /*function listItems(lst) {
            var i = 0;
            return lst.map(item =>
                <ListItem key={i++}>
                    <ListItemAvatar>
                        <Avatar>
                            <img
                                src={item.imglnk}
                                alt={item.author}
                                onClick={(e) => { e.preventDefault();}}
                            />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                        secondary={item.author}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                            <PlayArrowSharpIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        }
        function itemHandler(newData, flag) {
            if (flag === 0) {
                var ni = ITEMS;
                ni.push(newData);
                setItems(ni);
            }
            else {
                setItems(newData);
            }
        }
        function loadMore(event) {
            event.preventDefault();
            if (prevSearch === "<#NONE#>")
                return;
            var perv = [];
            for (var itm in ITEMS) {
                perv.push(itm.yturl);
            }
            makeSearch(prevSearch, 1, perv, 5, 0);
        }
        function makeSearch(search, more, prev, items, flag) {
            prevSearch = search;
            var config = {
                method: 'post',
                url: 'https://gray-server.herokuapp.com/youtube',
                data: {
                    search: search,
                    items: items,
                    more: more,
                    prev: prev
                }
            }
            axios(config).then((res) => {
                console.log(res.data);
                var data = res.data;
                var list = [];
                var audioList = [];
                for (var value in ITEMS) {
                    var amapp = {
                        name: value.name,
                        singer: value.author,
                        cover: value.imglnk,
                        musicSrc: value.amrl
                    }
                    audioList.push(amapp);
                }
                for (const [key, value] of Object.entries(data.data)) {
                //console.log(key, value);
                var amap = {
                    name: value.title,
                    singer: value.author,
                    cover: value.thumb,
                    musicSrc: value.best_audio.url
                }
                audioList.push(amap);
                var map = {
                    yturl: key,
                    name: value.title,
                    author: value.author,
                    amrl: value.best_audio.url,
                    imglnk: value.thumb
                }
                list.push(map);
            }
            itemHandler(list, flag);
            console.log(audioList);
            changeOptions(audioList);
        }).catch ((err) => { console.log(err) });
    }
    function handleSearch(event) {
        event.preventDefault();
        makeSearch(event.target.value, 1, [], 10, 0);
        //prevSearch = event.target.value;
        //loadMore(event);
        prevSearch = event.target.value;
    }
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" style={{ background: '#1C1C1C' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            GrayBot - Web
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                onKeyDown={(e) => { e.keyCode === 13 ? handleSearch(e) : console.log(0) }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <div className={classesAB.root}>
                <Fab variant="extended">
                    <RotateLeftSharpIcon onClick={(event) => { loadMore(event) }} className={classesAB.extendedIcon} />
                    Load More
                    </Fab>
            </div>
            <ReactJkMusicPlayer {...options} />
        </div>
    );
}*/
return (
    <div style={{ alignItems: "center" }}>
        <Player />
    </div>
);
}