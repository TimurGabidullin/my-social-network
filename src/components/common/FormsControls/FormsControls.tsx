import React from "react";
import styles from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";

type TextAreaInputPropsType = {
    input: any
    meta: any
}

export const TextArea: React.FC<TextAreaInputPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...meta} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}

export const Input: React.FC<TextAreaInputPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...meta} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
}


