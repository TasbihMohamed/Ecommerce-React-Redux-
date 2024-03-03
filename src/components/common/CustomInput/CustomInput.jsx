import { Alert, Stack } from "@mui/material";
import React from "react";

export default function CustomInput({
    label,
    type,
    icon,
    name,
    value,
    onChange,
    onBlur,
    errorName,
    formikTouchedCondition,
    formikErrorCondition,
}) {
    return (
        <Stack style={{ marginBottom: 10, marginTop: 10 }}>
            <label
                htmlFor={name}
                style={{
                    display: "block",
                    color: "#353535",
                    fontSize: "20px",
                    marginBottom: "5px",
                }}
            >
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                style={{
                    border: "1px solid rgb(100 100 100 / 50%)",
                    width: "98%",
                    borderRadius: "8px",
                    height: "38px",
                    paddingRight: 10,
                    paddingLeft: 10,
                }}
            />
            {formikTouchedCondition && formikErrorCondition && (
                <Alert severity="error">{errorName}</Alert>
            )}
        </Stack>
    );
}