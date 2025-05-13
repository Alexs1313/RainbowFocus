import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RatingModal from './RatingModal';

const ArticleCard = ({route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [submitRating, setSubmitRating] = useState(false);
  const navigation = useNavigation();
  const article = route.params;

  const handleRating = star => {
    setRating(star);
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: article.text,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={{...styles.container, filter: isVisible ? 'blur(2)' : null}}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Image source={require('../assets/images/icons/backArr.png')} />
          </TouchableOpacity>

          <Text style={styles.headerText}>Read & Learn</Text>
        </View>
        <View style={{marginHorizontal: 25, marginBottom: 140}}>
          <View>
            <Text style={styles.title}>{article.title}</Text>
            <Text style={styles.description}>{article.text}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: 49,
            }}>
            <TouchableOpacity
              onPress={() => setIsVisible(true)}
              activeOpacity={0.7}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Rate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onShare()}
              activeOpacity={0.7}
              style={[
                styles.buttonContainer,
                {
                  borderWidth: 1,
                  borderColor: '#fff',
                  backgroundColor: '#055426',
                },
              ]}>
              <Text style={[styles.buttonText, {color: '#fff'}]}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {isVisible && (
        <RatingModal>
          {submitRating ? (
            <View style={{alignItems: 'center'}}>
              <Image source={require('../assets/images/icons/check.png')} />
            </View>
          ) : (
            <Text style={styles.modalTitle}>Rate this post</Text>
          )}
          {submitRating ? (
            <View>
              <Text
                style={[styles.modalTitle, {marginBottom: 0, marginTop: 5}]}>
                Thank you!
              </Text>
            </View>
          ) : (
            <View style={styles.starsContainer}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity key={star} onPress={() => handleRating(star)}>
                  {star <= rating ? (
                    <Image
                      source={require('../assets/images/icons/filledStar.png')}
                      tintColor={'#FFC20E'}
                    />
                  ) : (
                    <Image
                      source={require('../assets/images/icons/star.png')}
                    />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{paddingHorizontal: 50}}>
            <TouchableOpacity
              style={styles.rateBtn}
              activeOpacity={0.7}
              onPress={() => {
                setSubmitRating(true);
                if (submitRating) {
                  setIsVisible(false);
                  setSubmitRating(false);
                  setRating(0);
                }
              }}>
              <Text style={styles.modalButtonText}>
                {submitRating ? 'Close' : 'Rate'}
              </Text>
            </TouchableOpacity>
          </View>
        </RatingModal>
      )}
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
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {flex: 1, backgroundColor: '#055426'},
  headerText: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#fff',
    marginLeft: '28%',
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Inknut400',
    color: '#055426',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 30,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Inknut800',
    color: '#fff',
    marginTop: 25,
    marginBottom: 14,
    lineHeight: 30,
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    color: '#fff',
    marginBottom: 25,
    lineHeight: 22,
  },

  articleContainer: {
    width: '100%',
    paddingVertical: 23,
    paddingHorizontal: 26,
    backgroundColor: '#fff',
    marginTop: 17,
    borderRadius: 12,
  },
  wrap: {flexDirection: 'row'},
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
  buttonContainer: {
    paddingVertical: 12,
    backgroundColor: '#fff',
    width: '48%',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#055426',
  },
  rateBtn: {
    paddingVertical: 12,
    backgroundColor: '#F87B0D',
    paddingHorizontal: 50,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 25,
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: 400,
    color: '#FFFFFF',
  },
});

export default ArticleCard;
