const UncontrolledComponent: React.FC = () => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData.entries());

    console.log("Submit values:", formValues);
  };

  return (
    <div>
      <p>Uncontrolled components - DOM inputs handle value itself</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Input name:</label>
        <input id="name" name="name" defaultValue="" />
        <br />
        <label htmlFor="age">Input age:</label>
        <input id="age" name="age" defaultValue="0" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComponent;
