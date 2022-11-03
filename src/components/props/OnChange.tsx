interface IOnChange {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function OnChange({ value, handleChange }: IOnChange) {
  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
