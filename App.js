import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';

/*Definición del componente de Notificacion*/
const Notificacion = ({user, message, image, cambiarLeidos}) => {
    const [leido, setLeido] = useState(false);
    const imagenes = [require("./assets/images/user1.jpg"), require("./assets/images/user2.jpg"), require("./assets/images/user3.jpg"), 
      require("./assets/images/user4.jpg"), require("./assets/images/user5.jpg"), require("./assets/images/user6.jpg")
    ];

    /*Función que cambiara el color para efectos visuales de notificaciones leidas y ejecutara una función heredada por props*/
    const handleCambiarNotificacion = (disminuir) => {
      if(leido === false){
        setLeido(true);
        disminuir();
      }
    }

    return(
      <TouchableOpacity style={{backgroundColor: leido ? 'black' : '#1e1e1e', ...styles.buttonNotificacion}} onPress={() => {handleCambiarNotificacion(cambiarLeidos)}}>
        <View style={styles.containerImagen}>
          <Image style={styles.imagen} source={imagenes[image]} />
        </View>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{user}</Text>
        <Text style={{color: 'white'}}>{message}</Text>
      </TouchableOpacity>
    );
}

/*Definición del componente padre App*/
const App = () => {
  const [noleidas,setNoleidas] = useState(0);
  const [notificaciones,setNotificaciones] = useState([]);
  const [randomNum,setRandomNum] = useState(5);

  /*Datos a usar ya que no contamos con una BD o API externa*/
  const lista = ["Pepe","Juan","Carlos","Javier","Fernando","Edgar"];
  const mensajes = ["liked your post","started following you","commented: nice!","shared your photo","unfollowed you","blocked you"];

  /*Generador de un numero random con la finalidad de obtener un valor aleatorio dentro de los datos definidos*/
  useEffect(() => {
    const ran = Math.floor(Math.random() * 9000) + 1000; 
    setRandomNum(ran);
    },[])

  /*Puede descomentar el siguiente comentario para ver el comportamiento de la actualización de las notificación desde consola*/
  /*useEffect(() => {
    console.log("Notificaciones actualizadas:", notificaciones);
    }, [notificaciones])*/

  /*Generador de la notificación dado un cierto intervalo de tiempo, para evitar un loop limpiamos dicho intervalo*/
  useEffect(() => {
    const interval = setInterval(() => {
      const rand = Math.floor(Math.random() * 6);
      const notificacion = {
        usuario: lista[rand],
        mensaje: mensajes[rand],
        imagen: rand,
        id: Math.random().toString(36).concat(Date.now().toString()),
      };
        setNotificaciones(prev => [notificacion, ...prev]);
        setNoleidas(prev => prev + 1);
        const nuevoTiempo = Math.floor(Math.random() * 9000) + 1000;
        setRandomNum(nuevoTiempo);
    },randomNum);
      return () => clearInterval(interval); 
      }, [randomNum]);

  /*const leido= ((indice)=>{
    for(let i = 0;i<notificaciones.length;i++){
      if(i==indice){
        notificaciones[i].leida = true;
        setNoleidas(prev => prev - 1);
      }
    }
  })*/

  /*Función que disminuye las notificaciones no leidas, que hereda el componente Notificacion*/
  const handleLeidos = () => {
    setNoleidas(noleidas => noleidas - 1);
  }

  return (
    <SafeAreaProvider style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Notifications</Text>
          <Text style={styles.contador}>Unread: {noleidas}</Text>
        </View>
        <ScrollView style={styles.scrollView}>
          {notificaciones.map((item) => (
            <Notificacion user={item.user} message={item.mensaje} image={item.imagen} key={item.id} cambiarLeidos={() => {handleLeidos()}} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

/*Estilos para ambos componentes*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '8%',
    gap: 10,
  },
  scrollView: {
    flex: 1, 
    borderWidth: 1, 
    width: "100%",
    backgroundColor: 'black'
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
    height: 'auto',
    backgroundColor: '#405DE6'
  },
  buttonNotificacion:{
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderRadius: 15,
    paddingLeft: 10,
    marginTop: 5,
    gap: 5
  },
  containerImagen:{
    borderWidth: 1,
    width: '10%',
    height: '80%',
    borderRadius: "100%",
  },
  imagen:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 100
  }
});
