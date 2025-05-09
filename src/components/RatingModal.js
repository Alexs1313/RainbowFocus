import {useState} from 'react';
import {Modal, View} from 'react-native';

const RatingModal = ({visible, children}) => {
  const [showModal, setShowModal] = useState(visible);

  return (
    <Modal transparent visible={showModal} statusBarTranslucent={true}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '80%',
            backgroundColor: '#fff',
            borderRadius: 12,
            paddingVertical: 24,
            paddingHorizontal: 60,
          }}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default RatingModal;
