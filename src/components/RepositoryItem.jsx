import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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
    container: {display: 'flex', flexGrow: 1},
    tinyLogo: {
      width: 50,
      height: 50,
    }
  });

  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={ownerAvatarUrl}></Image>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount >= 1000 ? `${(stargazersCount / 1000).toFixed(1)}k` : stargazersCount}</Text>
      <Text>Forks: {forksCount >= 1000 ? `${(forksCount / 1000).toFixed(1)}k` : forksCount}</Text> 
      <Text>Reviews: {reviewCount >= 1000 ? `${(reviewCount / 1000).toFixed(1)}k` : reviewCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
