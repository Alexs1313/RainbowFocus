import {useNavigation} from '@react-navigation/native';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {articles} from '../../data/articles';

const Reading = () => {
  const navigation = useNavigation();

  const onShare = async article => {
    try {
      await Share.share({
        message: article.text,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#055426'}}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Read & Learn</Text>
        </View>
        <View style={{marginHorizontal: 25, marginBottom: 140}}>
          <View>
            {articles.map(article => (
              <View style={styles.articleContainer}>
                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.description}>{article.description}</Text>
                <View style={styles.wrap}>
                  <Image
                    source={require('../../assets/images/icons/time.png')}
                  />
                  <Text style={styles.time}>{article.time}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: 49,
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ArticleCard', article)}
                    activeOpacity={0.7}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Read</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onShare(article)}
                    activeOpacity={0.7}
                    style={[
                      styles.buttonContainer,
                      {
                        borderWidth: 1,
                        borderColor: '#055426',
                        backgroundColor: '#fff',
                      },
                    ]}>
                    <Text style={[styles.buttonText, {color: '#055426'}]}>
                      Share
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 100,
    paddingBottom: 34,
    backgroundColor: '#0E6934',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#fff',
    marginHorizontal: 40,
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#000000',
  },
  description: {
    fontSize: 14,
    fontWeight: 400,
    color: '#838383',
    marginBottom: 10,
  },
  time: {
    fontSize: 14,
    fontWeight: 400,
    color: '#838383',
    marginLeft: 5,
    marginBottom: 6,
  },
  articleContainer: {
    width: '100%',
    paddingVertical: 23,
    paddingHorizontal: 26,
    backgroundColor: '#fff',
    marginTop: 17,
    borderRadius: 12,
  },
  wrap: {flexDirection: 'row', marginTop: 8},
  buttonContainer: {
    paddingVertical: 12,
    backgroundColor: '#055426',
    width: '48%',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#fff',
  },
});

export default Reading;
