export type ActivityProps = {
  map(
    arg0: (
      activity: ActivityProps,
      innerIndex: number
    ) => import("react/jsx-runtime").JSX.Element
  ): import("react").ReactNode;
  activityId: string;
  activityName?: string;
  organization?: string;
  position?: string;
  hours?: number | number[];
  outstanding?: string;
};

export type StudentProps = {
  id: number;
  studentId: number;
  profileImage: string;
  prefix: string;
  firstname: string;
  lastname: string;
  email: string;
  faculty: string;
  major: string;
  activities: ActivityProps[][];
};

export type UrlProps = {
  path: string;
  data?: object;
};
