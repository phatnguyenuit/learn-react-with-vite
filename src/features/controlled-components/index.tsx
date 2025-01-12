import { useState } from "react";

type FormValues = {
  name: string;
  age: number;
};

// Pass ReactNode as a props
// const TestComponent = ({ action }: { action: React.ReactNode }) => {
//   <div>{action}</div>;
// };

// <TestComponent action={<p>hello</p>} />

const ControlledComponent: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    age: 0,
  });
  const createHandleChange =
    (name: string): React.ChangeEventHandler<HTMLInputElement> =>
    (e) => {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: e.target.value,
      }));
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log("Submit values:", formValues);
  };

  return (
    <div>
      <p>Controlled components - React components handle input value</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Input name:</label>
        <input
          id="name"
          name="name"
          value={formValues.name}
          onChange={createHandleChange("name")}
        />
        <br />
        <label htmlFor="age">Input age:</label>
        <input
          id="age"
          name="age"
          value={formValues.age}
          onChange={createHandleChange("age")}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledComponent;
