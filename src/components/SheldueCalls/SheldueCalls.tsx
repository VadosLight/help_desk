import { Table } from "ui-neumorphism";
import { useTheme } from "../../hooks";

type Headers = Array<{
  text: string;
  align: string;
  value: string;
}>;

const headers: Headers = [
  { text: "Урок", align: "left", value: "lesson" },
  { text: "Будни", align: "center", value: "weekday" },
  { text: "Суббота", align: "center", value: "saturday" },
];

type Item = {
  lesson: number;
  weekday: string;
  saturday: string;
};

const getLessonTime = (num: number, isSat: boolean = false): string => {
  switch (num) {
    case 1:
      return !isSat ? "9.00-9.45" : "9.00-9.45";
    case 2:
      return !isSat ? "9.55-10.40" : "9.50-10.35";
    case 3:
      return !isSat ? "10.50-11-35" : "10.50-11.35";
    case 4:
      return !isSat ? "11.45-12.30" : "11.50-12.35";
    case 5:
      return !isSat ? "12.45-13.30" : "12.50-13.35";
    case 6:
      return !isSat ? "13.45-14.30" : "13.45-14.30";
    case 7:
      return !isSat ? "14.45-15.30" : "14.35-15.20";
    case 8:
      return !isSat ? "15.35-16.20" : "15.25-16.10";
    case 9:
      return !isSat ? "16.12-17.10" : "-";
    default:
      return "-";
  }
};

const lesson = (num: number): Item => {
  const date = new Date();
  const weekDay = date.getDay();

  return {
    lesson: num,
    weekday: getLessonTime(num),
    saturday: getLessonTime(num, true),
  };
};

const items: Item[] = [
    lesson(1),
    lesson(2),
    lesson(3),
    lesson(4),
    lesson(5),
    lesson(6),
    lesson(7),
    lesson(8),
    lesson(9),

]


export const SheldueCalls = (): JSX.Element => {
  const { isDark } = useTheme();
  return <Table headers={headers} items={items} dark={isDark} />;
};
