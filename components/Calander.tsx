import React, { useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { Card, Avatar } from 'react-native-paper';
import { ThemedText } from './ThemedText';

const generateItems = () => {
  const newItems = [];
  for (let i = 0; i < 100; i++) {
    newItems.push({
      name: `Item #${i}`,
      height: Math.max(100, Math.floor(Math.random() * 150)),
    });
  }
  console.log(newItems);
  return newItems;
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState<{ name: string; height: number; }[]>([]);

  useEffect(() => {
    const fetchedItems = generateItems();
    setItems(fetchedItems);
  }, []);

  return (
    <ScrollView style={{ flex: 1, height: 800, backgroundColor: 'red', bottom: 100 }}>
      {items.length > 0 ? (
        items.map((item, index) => (
          <TouchableOpacity key={index} style={{ marginRight: 10, marginTop: 17 }}>
            <Card>
              <Card.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <ThemedText type='default'>{item.name}</ThemedText>
                  <Avatar.Text label="J" />
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <ThemedText type='default'>No items to display</ThemedText>
        </View>
      )}
    </ScrollView>
  );
};

export default Schedule;