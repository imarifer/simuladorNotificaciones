import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [notificaciones,setNotificaciones] = useState([]);
  const [noleidas,setNoleidas] = useState(0);
  const [randomNum,setRandomNum] = useState(5);

  const lista = ["Pepe","Juan","Carlos","Javier","Fernando","Edgar"];
  const mensajes = ["liked your post","started following you","commented: nice!","shared your photo","unfollowed you","blocked you"];

  useEffect(()=>{
    const ran = Math.floor(Math.random() * 9000) + 1000; 
    setRandomNum(ran);
  },[])

  useEffect(()=>{
    const interval = setInterval(()=>{
      const rand = Math.floor(Math.random() * 6);
      const notificacion = {
        usuario: lista[rand],
        mensaje: mensajes[rand],
        imagen: "./assets/images/user" + rand + ".jpg"
      };

        setNotificaciones(prev => [notificacion, ...prev]);
        setNoleidas(noleidas+1);
    },randomNum)
  },[randomNum]);


  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Instagram Notifications</Text>
        <Text style={styles.contador}>Unread: {noleidas}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'white',
    width: '100%',
    height: '8%',
    gap: 10,
  },
  scrollView: {
    marginBottom: 50,
    borderBottomWidth: 1,
    borderLeftWidth: 1, 
    borderRightWidth: 1,
    borderStyle: 'solid',
    borderColor: 'white',
    width: '100%', 
    height: '80%'
  },
  contador: {
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    borderWidth: 1, 
    borderStyle: 'solid',
    borderColor: '#405DE6',
    borderRadius: 15,
    width: '35%', 
    height: '50%',
    backgroundColor: '#405DE6'
  }
});
