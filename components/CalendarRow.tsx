import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import React, { useState } from 'react';
import moment from 'moment'

const CustomDateComponent = ({ date, selected, onDateSelected }) => {
  const isSelected = selected ? styles.selectedContainer : null;
  const today = new Date();
  const isToday = date.isSame(today, 'day');

  return (
    <TouchableOpacity onPress={() => onDateSelected(date)}>
      <View style={[styles.dateContainer]}>
        <View style={[isSelected]}>
          <Text style={[styles.dateText, isToday && styles.todayText, selected && styles.selectedText]}>
            {date.date()}
          </Text>
        </View>
        <Text style={[styles.dayText, isToday && styles.todayText, selected && styles.selectedDayText]}>
          {date.format('ddd')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CalendarRow = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const minDate = moment().subtract(2, 'weeks');
  const maxDate = moment().add(2, 'weeks');

  return (
    <View style={styles.container}>
      <CalendarStrip
        style={{ height: 72, paddingBottom: 10 }}
        calendarColor={'transparent'}
        iconContainer={{ flex: 0.1 }}
        showMonth={false}
        selectedDate={selectedDate}
        onDateSelected={(date) => setSelectedDate(date)}
        dayComponent={({ date, selected }) => (
          <CustomDateComponent
            date={date}
            selected={selected}
            onDateSelected={(date) => setSelectedDate(date)}
          />
        )}
        scrollable={false}
        calendarAnimation={{ type: 'parallel', duration: 300 }}
        minDate={minDate}
        maxDate={maxDate}
      />
    </View>
  );
};

export default CalendarRow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dateContainer: {
    alignItems: 'center',
    borderRadius: 20,
  },
  selectedContainer: {
    color: 'white',
    backgroundColor: '#267BFA',
    padding: 6,
    borderRadius: 100,
  },
  dateText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
  },
  dayText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'black',
    marginTop: 12,
  },
  selectedText: {
    color: 'white',
  },
  selectedDayText: {
    top: -6,
  },
  todayText: {
    color: '#267BFA'
  },
});