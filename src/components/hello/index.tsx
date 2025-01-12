import { memo } from "react";

const Hello: React.FC = () => <div>hello</div>;

export const MemoizedHello = memo(Hello);

export default Hello;
