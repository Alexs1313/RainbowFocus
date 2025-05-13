import {createContext, useContext, useState} from 'react';

export const StoreContext = createContext();

export const useStore = () => {
  return useContext(StoreContext);
};

export const StoreProvider = ({children}) => {
  const [isEnabledNotifications, setIsEnabledNotifications] = useState(false);
  const [sessionTime, setSessionTime] = useState(15);
  const [timeIsEnabled, setTimeIsEnabled] = useState(false);
  const [soundIsEnabled, setSoundIsEnabled] = useState(false);
  const [selectedTime, setSelectedTime] = useState(15);
  const [totalQuotes, setTotalQuotes] = useState(0);
  const [focused, setFocused] = useState([]);
  const [selectedSegment, setSelectedSegment] = useState(null);

  const saveData = data => {
    focused.push(data);
  };

  const value = {
    sessionTime,
    setSessionTime,
    timeIsEnabled,
    setTimeIsEnabled,
    selectedTime,
    setSelectedTime,
    isEnabledNotifications,
    setIsEnabledNotifications,
    saveData,
    focused,
    totalQuotes,
    setTotalQuotes,
    selectedSegment,
    setSelectedSegment,
    soundIsEnabled,
    setSoundIsEnabled,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
