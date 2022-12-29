import { InputHTMLAttributes } from "react";
import { Control, FieldError, useController } from "react-hook-form";
import styles from "./input.module.scss";

interface InputProps extends InputHTMLAttributes<any> {
  errors: FieldError | undefined;
  control: Control<any, any>;
  name: string;
  label: string;
}
const Input = ({ control, name, errors, label, ...props }: InputProps) => {
  const { field } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div className={styles.root}>
      <label htmlFor={label}>{label}</label>
      <input
        className={styles.input}
        onChange={field.onChange} // send value to hook form
        onBlur={field.onBlur} // notify when input is touched/blur
        name={field.name} // send down the input name
        {...props}
      />
      {errors && <span className={styles.error}>{errors!.message}</span>}
    </div>
  );
};

export default Input;
