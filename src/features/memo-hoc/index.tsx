import React, { useMemo, useState } from "react";

type UserInfo = {
  name: string;
  age: number;
};

type UserComponentProps = {
  id: number;
  info?: UserInfo;
};

const UserComponent: React.FC<UserComponentProps> = ({ info }) => {
  return (
    <div>
      <p>Name: {info?.name}</p>
      <p>Age: {info?.age}</p>
    </div>
  );
};

const MemoizedUserComponent = React.memo(
  UserComponent,
  (prevProps, nextProps) => {
    // default return Object.is(prevProps, nextProps);
    // if (prevProps.id !== nextProps.id) return false;

    // deep compare info
    // JSON.stringify, loop all properties and compare, 3rd library

    // JSON.stringify is order matters
    // return JSON.stringify(prevProps.info) === JSON.stringify(nextProps.info);

    // loop through info properties
    return (
      prevProps.id !== nextProps.id &&
      prevProps.info?.age === nextProps.info?.age &&
      prevProps.info?.name === nextProps.info?.name
    );
  }
);
const MemoizedUserComponent2 = React.memo(UserComponent);

const MemoHoc: React.FC = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const userInfo: UserInfo = { name: "fast", age: 30 };
  const memoizedUserInfo: UserInfo = useMemo(
    () => ({ name: "tai", age: 26 }),
    []
  );

  const handleClick = () => {
    // setCount(count + 1); (X) avoid referencing state
    setCount((prevCount) => prevCount + 1);
  };
  const handleClick2 = () => {
    // setCount(count + 1); (X) avoid referencing state
    setCount2((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <UserComponent id={count} info={userInfo} />
      <MemoizedUserComponent id={count} info={userInfo} />
      <MemoizedUserComponent2 id={count} info={memoizedUserInfo} />
      <button onClick={handleClick}>Count 1 ({count})</button>
      <button onClick={handleClick2}>Count 2 ({count2})</button>
    </div>
  );
};

export default MemoHoc;
