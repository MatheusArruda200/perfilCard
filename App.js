import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import img1 from './assets/capa.png';
import PerfilFoto from './assets/perfil.jpg';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={img1} />
      <Image
        source={PerfilFoto}
        style={styles.perfil}
      />
      <Text style={styles.titulo}>Matheus Arruda </Text>

      <Text style={styles.text}>
        Desenvolvedor Front-end com experiência na criação de interfaces web responsivas e interativas utilizando React.js, HTML5, CSS3 e JavaScript/TypeScript.
      
        Proficiente no consumo de WebAPIs REST.
        Experiência com Bootstrap, pré-processadores CSS (Sass) e Styled Components.
        Sólidos conhecimentos em princípios de UX/UI, otimização de performance e versionamento com Git/GitHub.
        Experiência complementar em desenvolvimento mobile com React Native.
        React-Native, Expo, React Navigation, Axios, AsyncStorage.
        Experiência em desenvolvimento de aplicações web com React.js, HTML5, CSS3 e JavaScript/TypeScript.
        Proficiente no consumo de WebAPIs REST.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  titulo: {
    fontSize: 32,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#000',
    fontWeight: 'bold',
    
  },
  text:{
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    color: '#000'
  },
  perfil: {
    borderRadius: 100,
    width: 100,
    height: 100,
    marginTop: -50,

  }
});
