import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexGrow: 1,
      backgroundColor: 'white',
      paddingBottom: 20,
      marginBottom: 10,
    },
    imageAndText: {
      display: 'flex',
      flexDirection: 'row',
      margin: 20,
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 10,
    },
    headline: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageAndText}>
        <Image style={styles.tinyLogo} source={{ uri: ownerAvatarUrl }}></Image>
        <View style={{ display: 'flex', marginLeft: 20 }}>
          <Text style={styles.headline}>{fullName}</Text>
          <Text style={{ marginBottom: 5 }}>{description}</Text>
          <View
            style={{
              backgroundColor: theme.colors.primary,
              width: 69,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {language}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {stargazersCount >= 1000
              ? `${(stargazersCount / 1000).toFixed(1)}k`
              : stargazersCount}
          </Text>
          <Text>Stars</Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {forksCount >= 1000
              ? `${(forksCount / 1000).toFixed(1)}k`
              : forksCount}
          </Text>
          <Text>Forks</Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {reviewCount >= 1000
              ? `${(reviewCount / 1000).toFixed(1)}k`
              : reviewCount}
          </Text>
          <Text>Reviews</Text>
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
            {ratingAverage}
          </Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
