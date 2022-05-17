import React, {useState, useEffect} from 'react';
import {ScrollView, Alert, StyleSheet, ActivityIndicator} from 'react-native';
import {Button, GetStarted, ShortenLink, LinkHistoryItem} from '../components';
import Clipboard from '@react-native-clipboard/clipboard';
import {useDispatch, useSelector} from 'react-redux';
import {
  syncLocalAndRemote,
  setInitialState,
  deleteLink,
} from '../redux/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Api strings
const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';
const urlPattern =
  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\) \*\+,;=.]+$/gm;

export const Home = () => {
  const dispatch = useDispatch();
  const [longUrl, setLongUrl] = useState('');
  const [isFetched, setIsFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [changeText, setChangeText] = useState('Copy');
  const [handleChange, setHandleChange] = useState(false);

  const handleChangeText = (item: any) => {
    if (changeText === 'Copy') {
      setChangeText('Copied');
      Clipboard.setString(item);
    } else {
      setChangeText('Copy');
    }

    console.log(changeText);
  };

  const copyToClipboard = (item: any) => {
    Clipboard.setString(item);
  };

  const total_links = useSelector(state => state.total_links);

  useEffect(() => getShortLinks(), []);

  const getShortLinks = () => {
    setIsLoading(true);

    const execute = async () => {
      const data = await AsyncStorage.getItem('key');
      const parseData = JSON.parse(data || '{}');

      if (data) {
        await dispatch(setInitialState(parseData));
        setIsFetched(true);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    //Async cleanup use to clean data
    //AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));

    execute();
  };

  const fetchShortUrl = async (longUrl: any) => {
    const response = await fetch(baseUrl + longUrl);
    if (!response.ok) {
      throw new Error('Oops! Something went wrong.');
    }
    const data = await response.json();
    return data;
  };

  const ShortenIt = () => {
    const sUrl = urlPattern;
    if (!longUrl) {
      Alert.alert('Please enter a URL');
    } else if (longUrl && !sUrl.test(longUrl)) {
      Alert.alert('Please enter a valid url.');
      setLongUrl('');
    } else {
      Alert.alert('Shortlink is ready');
      setLongUrl('');
      fetchShortUrl(longUrl)
        .then(data => {
          setIsLoading(false);
          // setResult({
          //   original_link: data.result.original_link,
          //   short_link: data.result.short_link,
          // });
          // console.log(data);
          dispatch(syncLocalAndRemote(data));
          setIsFetched(true);
        })
        .catch(err => {
          setIsLoading(false);
        });
      setIsLoading(true);
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        {isLoading ? (
          <>
            <ActivityIndicator />
          </>
        ) : isFetched && total_links.data.length ? (
          <>
            {total_links.data.map((item, i) => {
              // console.log(total_links.data);

              return (
                <LinkHistoryItem
                  key={i}
                  longUrl={item.original_link}
                  shortUrl={item.short_link}
                  delete={async () => {
                    // dispatch to delete the value using item.original_link as a match
                    await dispatch(deleteLink(item));
                  }}>
                  <Button
                    style={!changeText ? styles.btn : styles.btnActive}
                    titleStyle={{fontFamily: 'Poppins-Bold'}}
                    onPress={() => {
                      handleChangeText(item.short_link);
                    }}
                    title={changeText}
                  />
                </LinkHistoryItem>
              );
            })}
          </>
        ) : (
          <>
            <GetStarted title="Shortly" getStarted="Let's get started!" />
          </>
        )}
        <>
          <ShortenLink
            onChangeText={val => setLongUrl(val)}
            title="Shorten It!"
            onPress={ShortenIt}
          />
        </>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    width: '100%',
  },
  btnActive: {
    width: '100%',
    backgroundColor: '#3B3054',
  },
});
