export type RootStackParamList = {
  RoleSelection: undefined;
  Login: { role: 'parent' | 'child' } | undefined;
  ParentHome: undefined;
  ChildHome: undefined;
};

export type ParentTabParamList = {
  Home: undefined;
  Tasks: undefined;
  Rewards: undefined;
  Children: undefined;
  Settings: undefined;
};

export type ChildTabParamList = {
  Home: undefined;
  'My Tasks': undefined;
  Rewards: undefined;
  History: undefined;
  Settings: undefined;
};