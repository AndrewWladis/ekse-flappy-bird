import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  bird: {
    position: 'absolute',
  },
  colCenter: {
    flexDirection: 'col',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: {
    flex: 1,
  },
  gameOverScoreTitle: {
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '900',
  },
  gameOverTitle: {
    color: '#f24b4b',
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '900',
  },
  icon: {
    height: 120,
    width: 100
  },
  marginVertical: {
    marginVertical: 50
  },
  marginTop: {
    marginTop: 20
  },
  menuButton: {
    backgroundColor: '#06a0cf',
    alignItems: 'center'
  },
  menuButtonTitle: {
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: '800',
    paddingHorizontal: 10
  },
  menuPage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  newHighScore: {
    color: '#e4f05d',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: 40
  },
  obstacles: {
    position: 'absolute',
  },
  score: {
    color: 'white',
    fontSize: 50,
    fontWeight: '900'
  },
  title: {
    color: 'white',
    fontSize: 80,
    fontWeight: '900',
    textAlign: 'center'
  }
});

export default styles