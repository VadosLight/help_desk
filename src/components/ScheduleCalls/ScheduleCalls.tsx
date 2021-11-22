import { Table } from "ui-neumorphism";
import { useTheme } from "../../hooks";
import cn from 'classnames'
import './ScheduleCalls.scss';

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

const weekSchedule = [
  "9.00-9.45",
  "9.55-10.40",
  "10.50-11-35",
  "11.45-12.30",
  "12.45-13.30",
  "13.45-14.30",
  "14.45-15.30",
  "15.35-16.20",
  "16.12-17.10",
] as const

const saturdaySchedule = [
  "9.00-9.45",
  "9.50-10.35",
  "10.50-11.35",
  "11.50-12.35",
  "12.50-13.35",
  "13.45-14.30",
  "14.35-15.20",
  "15.25-16.10",
] as const

type Item = {
  lesson: number;
  weekday: string | JSX.Element;
  saturday: string | JSX.Element;
};

const getLessonTime = (numberOfLesson: number, isSat: boolean = false): string => {
  return isSat
    ? saturdaySchedule[numberOfLesson]
    : weekSchedule[numberOfLesson]
};

const lesson = (num: number): Item => {
  const date = new Date();
  const weekDay = date.getDay();
  let isSaturdayNow = false

  if (weekDay === 6) {
    isSaturdayNow = true
  }

  return {
    lesson: num,
    weekday: <div className={cn("ScheduleCalls__Lesson", {
      'Active': !isSaturdayNow
    })}>{getLessonTime(num)}</div>,
    saturday: <div className={cn("ScheduleCalls__Lesson", {
      'Active': isSaturdayNow
    })}>{getLessonTime(num, true)}</div>,
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


export const ScheduleCalls = (): JSX.Element => {
  const { isDark } = useTheme();
  return <Table headers={headers} items={items} dark={isDark} />;
};
