import React, { useState } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { colors } from "../global.styles";

export default UserCalendar = () => {
  const [selected, setSelected] = useState("");

  return (
    <Calendar
      onDayPress={(day) => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "blue",
        },
      }}
      style={{
        height: 350,
      }}
      theme={{
        arrowWidth: 40,
        arrowHeight: 40,
        arrowColor: colors.blue,
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: colors.blue,
        selectedDayTextColor: "#ffffff",
        todayTextColor: colors.blue,
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e",
        textMonthFontSize: 27,
        monthTextColor: colors.blue,
        textMonthFontFamily: "lato-bold",
        textDayFontFamily: "lato-bold",
      }}
    />
  );
};
