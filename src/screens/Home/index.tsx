import React, { useState } from "react";
import {
    StatusBar,
    SafeAreaView,
    View
} from 'react-native';

import {
    Container
} from './styles';

import Chart  from '../../components/Chart';
import { Header } from '../../components/Header';
import { Creator } from '../../components/Creator';

function Home(){

    const [ showCreator, setShowCreater ] = useState(false);

    return (
        <View>
            <StatusBar/>
            <SafeAreaView>
                <Container>
                    <Header 
                        onOpenCreator={()=>{
                            setShowCreater(true)}
                        }
                    />
                    <Creator
                        isCreatorVisible={showCreator}
                        onHideCreator={()=>setShowCreater(false)}
                    />
                    <Chart/>
                </Container>
            </SafeAreaView>
        </View>
    )
}

export { Home }