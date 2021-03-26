import React, {useEffect,useState} from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Heading from "../components/Heading";
import Colors from "../constans/Colors";
import Card from "../components/Card";
import Swiper from "react-native-deck-swiper";


const Home = () => {
    const [data, setData] = useState(undefined);
    const [errors,setErrors] = useState(undefined);

    async function fetchData() {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos");
        res
            .json()
            .then(res => setData(res.slice(0,20)))
            .catch(err => setErrors(err));
    }

    useEffect( ()=>{
        fetchData();
    },[]);
    return (
        <View style={styles.container}>
            <Heading style={styles.heading}>Home</Heading>
            {!data
                ?
                <ActivityIndicator size="large" color={Colors.BRAND}/>
                :
                <View style={styles.swiperContainer}>
                    <Swiper
                        backgroundColor={'transparent'}
                        disableBottomSwipe={true}
                        disableTopSwipe={true}
                        cardIndex={data.id}
                        cards={data}
                        renderCard={card => <Card url={card.url}/>}
                        stackSize={4}
                    />
                </View>
                }
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex:0.1,
        paddingTop:50,
    },
    heading: {
        textTransform:'uppercase',
        textAlign:'center'
    },
    swiperContainer: {
        alignItems:'center',
        flex:0.5,
    }
});

export default Home;