export type name = {
  first: string;
  last: string;
};

export type ProfileProps = {
  profileImage: string;
  name: name;
  email: string;
  passStatus: boolean; //pass criteria or not
  totalHours: number;
  totalActivity: number;
};
