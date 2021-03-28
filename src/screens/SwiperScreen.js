import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Heading from "../components/Heading";
import Emoji from 'react-native-emoji';
import Card from "../components/Card";
import Swiper from "react-native-deck-swiper";
import {Loader} from "../components/Loader";
import {getRandom} from "../lib/random";
import Colors from "../constans/Colors";
import {swiperConfig} from "../configs/swiperConfig";


const SwiperScreen = ({navigation}) => {
    const {swipeLimit, cardLimit} = swiperConfig;
    const [data, setData] = useState([]);
    const [countSwipedRight, setCountSwipedRight] = useState(0);
    const [countSwipedLeft, setCountSwipedLeft] = useState(0);

    function getData() {
        for (let i = 0; i < cardLimit; i++) {
            const id = getRandom(1, 500);
            setData(prev => [...prev, `https://picsum.photos/seed/${id}/200/300`]);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        const count = countSwipedRight + countSwipedLeft;
        count !== 0 && (count % swipeLimit === 0) && goToTotal(count);
    }, [countSwipedRight, countSwipedLeft]);


    const goToTotal = (count) => {
        navigation.navigate('Total', {
            countSwipedRight,
            countSwipedLeft,
            gameOver: count === cardLimit
        });
    };

    const onSwipedRight = () => {
        setCountSwipedRight(prev => prev + 1);
    };

    const onSwipedLeft = () => {
        setCountSwipedLeft(prev => prev + 1);
    };

    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>Swiper</Heading>
            {!data.length
                ?
                <Loader color={Colors.BRAND} style={styles.loader}/>
                :
                <View style={styles.swiperContainer}>
                    <Swiper
                        onSwipedRight={onSwipedRight}
                        onSwipedLeft={onSwipedLeft}
                        backgroundColor={'transparent'}
                        animateCardOpacity
                        verticalSwipe={false}
                        cardIndex={countSwipedLeft + countSwipedRight}
                        cards={data}
                        renderCard={data => <Card url={data}/>}
                        stackSize={5}
                        stackScale={5}
                        stackSeparation={10}
                        overlayLabels={{
                            left: {
                                element: <Emoji name="cry" style={{fontSize: 100}}/>,
                                style: {
                                    wrapper: {
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-start',
                                        marginTop: 5,
                                        marginLeft: -30
                                    }
                                }
                            },
                            right: {
                                element: <Emoji name="heart_eyes" style={{fontSize: 100}}/>,
                                style: {
                                    wrapper: {
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        marginTop: 5,
                                        marginLeft: 30
                                    }
                                }
                            },
                        }}
                    />
                </View>
            }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    heading: {
        textAlign: 'center'
    },
    swiperContainer: {
        alignItems: 'center',
        flex: 0.4,
    },
    loader: {
        marginTop: 200
    }
});

export default SwiperScreen;


