/**
 * Created by Rabbit on 2017/4/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import WelfareContainer from './WelfareContainer';
import GankListContainer from './GankListContainer';

export default class Gank extends Component {
    constructor(props){

        super(props);
        this.state = {
            typeArr : [
                {'title':'福利', 'type':'%E7%A6%8F%E5%88%A9',},
                {'title':'iOS', 'type':'iOS',},
                {'title':'Android', 'type':'Android',},
                {'title':'前端', 'type':'前端',},
                {'title':'休息视频 ', 'type':'休息视频',},
                {'title':'拓展资源', 'type':'拓展资源'}
            ],
        }
    }

    _onChangeTab = (i) =>{
        // console.log(i);
    }

    _onScroll = (e) =>{
        // console.log(e);
    }
    render() {

        return (
            <ScrollableTabView
                renderTabBar={() => <ScrollableTabBar />}
                tabBarActiveTextColor='#4ECBFC'
                tabBarInactiveTextColor='black'
                tabBarBackgroundColor='white'
                tabBarUnderlineStyle={{backgroundColor:'#4ECBFC',height:2}}
                onScroll={(e) => this._onScroll(e)}
                onChangeTab={(i) => this._onChangeTab(i)}
                tabBarTextStyle={{fontSize:FONT_SIZE(15)}}
            >
                {
                    this.state.typeArr.map((item, i) => {
                       if (i===0){
                           console.log('true');
                           // 198.37499999999997
                           // 220.79999999999998
                           // 166.75
                           return (
                               <WelfareContainer key={i}
                                                 tabLabel={item.title}
                                                 type={item.type}
                               />
                           );
                       }
                        {/*let text = Math.round(Math.random()*100);*/}

                        let imageWidth  = SCREEN_WIDTH / 2 - 15;
                        let imageHeight = imageWidth * 1.15;
                        console.log(imageHeight);
                        let text = parseInt(Math.random()*100 + imageHeight);
                            return (
                                <GankListContainer key={i}
                                                   tabLabel={item.title}
                                                   type={item.type}
                                                   style={{backgroundColor:'white',flex:1}}
                                />
                            )

                    })
                }
            </ScrollableTabView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});