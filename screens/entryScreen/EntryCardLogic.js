import { useState } from "react";

const EntryCardLogic = ({ entryCardData, month }) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  let newEntrydata = [];
  let filteredMonthdate = [];
  const openButtomSheet = (thedate, i) => {
    setVisible(true);
    setDate(thedate);
    setMood(i);
  };
  const deleteMood = () => {
    let a = newEntrydata.find((el) => el.date == date);
    a.moodEntries.splice(mood, 1);
    setVisible(false);
  };
  //clean and reorg data
  const dataReorg = () => {
    for (let entry of entryCardData) {
      let check = false;
      if (entryCardData.length > 0) {
        for (let item of newEntrydata) {
          if (entry.date == item.date) {
            for (let mood of entry.moodEntries) {
              item.moodEntries.push(mood);
            }
            const index = entryCardData.indexOf(entry);
            if (index > -1) {
              entryCardData.splice(index, 1);
            }
            check = true;
          }
        }
      }

      check ? "" : newEntrydata.push(entry);
    }
  };
  const filterMonth = () => {
    filteredMonthdate = newEntrydata.filter(
      (el) => el.date.split(" ")[2] == month
    );
  };

  dataReorg();
  filterMonth();
  return [filteredMonthdate, openButtomSheet, visible, setVisible, deleteMood];
};

export default EntryCardLogic;
