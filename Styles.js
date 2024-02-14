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
    overflow: 'hidden',
  },
  fullScreen: {
    flex: 1,
  },
  gameContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
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
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  highScoreListScore: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  leaderboardHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  listContainer: {
    height: 350,
    margin: 0,
    padding: 0,
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
  scoreHeader: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  scoreText: {
    color: 'white',
    fontSize: 50, 
    textAlign: 'center'
  },
  title: {
    color: 'white',
    fontSize: 80,
    fontWeight: '900',
    textAlign: 'center'
  },
  username: {
    fontSize: 18,
  },
  usernameList: {
    fontSize: 18,
    color: "white"
  }
});

export default styles