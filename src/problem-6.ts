{
  //

  type Profile = {
    name: string;
    age: number;
    email: string;
  };

  const updateProfile = (obj: Profile, key: Partial<Profile>) => {
    return { ...obj, ...key };
  };

  const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  console.log(updateProfile(myProfile, { age: 26 }));

  //
}
