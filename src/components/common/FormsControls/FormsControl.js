import React from "react";
import s from "./FormsControl.module.css";

const FormControl = ({ input, meta, child, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : undefined)}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
      {/* {meta.touched && ((meta.error && <span>{"some error"}</span>))} */}
    </div>
  );
};

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + " " + (hasError ? s.error : undefined)}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//       {/* {meta.touched && ((meta.error && <span>{"some error"}</span>))} */}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;
//   return (
//     <div className={s.formControl + " " + (hasError ? s.error : undefined)}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span>{meta.error}</span>}
//       {/* {meta.touched && ((meta.error && <span>{"some error"}</span>))} */}
//     </div>
//   );
// };

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
