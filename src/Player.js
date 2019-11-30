import React from 'react'
//import ReactDOM from 'react-dom'
import HeadsetSharpIcon from '@material-ui/icons/HeadsetSharp';
import ReactJkMusicPlayer from "react-jinke-music-player";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import RotateLeftSharpIcon from '@material-ui/icons/RotateLeftSharp';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';

const options = {
    //audio lists model
    audioLists: [
        /*{
            name: 'Despacito',
            singer: 'Luis Fonsi',
            cover:
                'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
            musicSrc: () => {
                return Promise.resolve(
                    'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3'
                )
            }
        },
        {
            name: 'Bedtime Stories',
            singer: 'Jay Chou',
            cover:
                'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
            musicSrc:
                'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3'
        },
        {
            name: '难得',
            singer: '安来宁',
            cover: '//cdn.lijinke.cn/nande.jpg',
            musicSrc: '//cdn.lijinke.cn/nande.mp3'
        }*/
    ],
    defaultPlayIndex: 0,

    //if you want dynamic change current play audio you can change it [type `number` default `0`]
    // playIndex: 0,

    //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
    theme: 'dark',

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    bounds: 'parent',

    //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    //"auto|metadata|none" "true| false"
    preload: true,

    //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: true,

    //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: true,

    //The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: true,

    //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
        top: 300,
        left: 120
    },

    // play mode text config of the audio player
    playModeText: {
        order: 'All',
        orderLoop: 'Repeat All',
        singleLoop: 'Repeat Current',
        shufflePlay: 'Shuffle'
    },

    //audio controller open text  [ type `String | ReactNode` default 'open']
    openText: 'Open',

    //audio controller close text  [ type `String | ReactNode` default 'close']
    closeText: 'Close',

    //audio theme switch checkedText  [ type `String | ReactNode` default '-']
    checkedText: '-',

    //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
    unCheckedText: '-',

    // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
    notContentText: 'No Song',

    panelTitle: 'Playlist',

    defaultPlayMode: 'order',

    //audio mode        mini | full          [type `String`  default `mini`]
    mode: 'full',

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: true,

    //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: false,

    //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: true,

    //audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    //audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: true,

    //drag the audio progress bar [type `Boolean` default `true`]
    seeked: true,

    //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
    controllerTitle: <HeadsetSharpIcon />,

    //Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    //play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    //reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: true,

    //download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: false,

    //loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: true,

    //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    //lyric display of the audio player panel   [type `Boolean` default `false`]
    showLyric: false,

    //Extensible custom content       [type 'Array' default '[]' ]
    extendsContent: [],

    //default volume of the audio player [type `Number` default `100` range `0-100`]
    defaultVolume: 100,

    //playModeText show time [type `Number(ms)` default `700`]
    playModeShowTime: 600,

    //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
    autoHiddenCover: true,

    //Music is downloaded handle
    onAudioDownload(audioInfo) {
        console.log('audio download', audioInfo)
    },

    //audio play handle
    onAudioPlay(audioInfo) {
        console.log('audio playing', audioInfo)
    },

    //audio pause handle
    onAudioPause(audioInfo) {
        console.log('audio pause', audioInfo)
    },

    //When the user has moved/jumped to a new location in audio
    onAudioSeeked(audioInfo) {
        console.log('audio seeked', audioInfo)
    },

    //When the volume has changed  min = 0.0  max = 1.0
    onAudioVolumeChange(currentVolume) {
        console.log('audio volume change', currentVolume)
    },

    //The single song is ended handle
    onAudioEnded(audioInfo) {
        // swal('Audio is ended!', '', 'success')
        console.log('audio ended', audioInfo)
    },

    //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
    onAudioAbort(e) {
        console.log('audio abort', e)
    },

    //audio play progress handle
    onAudioProgress(audioInfo) {
        // console.log('audio progress',audioInfo);
    },

    //audio reload handle
    onAudioReload(audioInfo) {
        console.log('audio reload:', audioInfo)
    },

    //audio load failed error handle
    onAudioLoadError(e) {
        console.error('audio load err', e)
    },

    //theme change handle
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

    /**
     * @description get origin audio element instance , you can use it do everything
     * @example
     * audio.playbackRate = 1.5  // set play back rate
     * audio.crossOrigin = 'xxx' // config cross origin
     */
    getAudioInstance(audio) {
        console.log('audio instance', audio)
    }
    // transform audio info like return a Promise

    /**
     * @return
     *  {
     *    src: 'xxx',
     *    filename: 'xxx',
     *    mimeType: 'xxx'
     *  }
     */
    // onBeforeAudioDownload() {
    //   return Promise.resolve({
    //     src: '1.mp3'
    //   })
    // }
}
//audioData
/*
{
                    name: "I'm new here",
                    singer: 'jack',
                    cover: 'http://www.lijinke.cn/music/1387583682387727.jpg',
                    musicSrc: `http://www.lijinke.cn/music/${Date.now()}.mp3`
                }
*/
class Player extends React.Component {
    state = {
        params: options,
        ITEMS: [],
        loading: false
    }
    prevSearch = "<#NONE#>";
    onAddAudio = (audioData) => {
        const data = {
            ...this.state.params,
            audioLists: [
                ...this.state.params.audioLists,
                audioData
            ]
        }
        this.setState({
            params: data
        })
    }
    onShowGlassBg = () => {
        this.onChangeKey('glassBg')
    }
    onDrag = () => {
        this.onChangeKey('drag')
    }
    onToggleMode = () => {
        this.onChangeKey('toggleMode')
    }
    onSeeked = () => {
        this.onChangeKey('seeked')
    }
    onChangeKey = (key) => {
        const data = {
            ...this.state.params,
            [key]: !this.state.params[key]
        }
        if (key === 'light' || key === 'dark') {
            data.theme = key
        }
        if (key === 'full' || key === 'mini') {
            data.mode = key
        }
        this.setState({ params: data })
    }
    showMiniProcessBar = () => {
        this.onChangeKey('showMiniProcessBar')
    }
    showMiniModeCover = () => {
        this.onChangeKey('showMiniModeCover')
    }
    handleSearch(event) {
        event.preventDefault();
        this.setState({ loading: true });
        this.makeSearch(event.target.value, 0, [], 10, 0);
        this.prevSearch = event.target.value;
    }
    changeOptions(audio) {
        for (var i = 0; i < audio.length; i++)
            this.onAddAudio(audio[i]);
    }
    makeSearch(search, more, prev, items, flag) {
        this.prevSearch = search;
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
            for (var value in this.state.ITEMS) {
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
                    cover: value.thumb.replace('default', 'mqdefault'),
                    musicSrc: value.best_audio.url
                }
                audioList.push(amap);
                var map = {
                    yturl: key,
                    name: value.title,
                    author: value.author,
                    amrl: value.best_audio.url,
                    imglnk: value.thumb.replace('default', 'mqdefault')
                }
                list.push(map);
            }
            //itemHandler(list, flag);
            //console.log(audioList);
            this.changeOptions(audioList);
            this.setState({ loading: false });
        }).catch((err) => { console.log(err);this.setState({ loading: false }); alert('Error communicating with server'); });
    }
    loadMore(event) {
        event.preventDefault();
        if (this.prevSearch === "<#NONE#>")
            return;
        var perv = [];
        for (var i = 0; i < this.state.ITEMS.length; i++) {
            perv.push(this.state.ITEMS[i].yturl);
        }
        this.makeSearch(this.prevSearch, 1, perv, 5, 0);
    }
    render() {
        const { params } = this.state;
        console.log('params: ', params)
        return (
            <>
                <div className="classes.root">
                    <AppBar position="static" style={{ background: '#1C1C1C' }}>
                        <Toolbar>
                            <Typography className="classes.title" variant="h6" noWrap>
                                GrayBot - Web
                            </Typography>
                            <div style={{ marginLeft: 'auto', marginRight: 0, float: 'right' }}>
                                <InputBase
                                    placeholder="Search…"
                                    onKeyDown={(e) => { e.keyCode === 13 ? this.handleSearch(e) : console.log(0) }}
                                    classes={{
                                        root: {
                                            color: '#FFFFFF',
                                        },
                                        input: {
                                            padding: (1, 1, 1, 7),
                                            width: '100%',
                                        },
                                    }}
                                    inputProps={{ style: { fontFamily: 'Arial', color: 'white', 'aria-label': 'search' } }}
                                >
                                    <SearchIcon style={{
                                        height: '100%',
                                        pointerEvents: 'none',
                                        marginTop: 2
                                    }} />
                                </InputBase>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
                <div className="classesAB.root">
                    <Fab variant="extended" onClick={(event) => { console.log("MORE CLICKED"); this.loadMore(event) }}>
                        <RotateLeftSharpIcon className="classesAB.extendedIcon" />
                        Load More
                    </Fab>
                    <LoadingScreen
                        loading={this.state.loading}
                        bgColor='#f1f1f1'
                        spinnerColor='#9ee5f8'
                        textColor='#676767'
                    ></LoadingScreen>
                </div>
                    <ReactJkMusicPlayer {...params} />
            </>
                );
            }
        }
export default Player;