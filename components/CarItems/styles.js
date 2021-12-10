import { StyleSheet,Dimensions } from "react-native"

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
    
    },
    titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
    
    
    },
    title:{
        fontSize:40,
        fontWeight:'600',
    
    },
    subtitle:{
        fontSize:20,
        color:"#5c5e62"
    
    },
    subtitleCTA:{
        textDecorationLine:'underline',
    },
    image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        position:'absolute'
    },
    buttonContainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
    }
    
})

export default styles;