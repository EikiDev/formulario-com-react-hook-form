import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import * as S from "./style";
import { DataProps } from "../Form";

type InputProps = {
    type: string;
    placeholder: string;
    name: keyof DataProps;
    isRequired: boolean;
    register: UseFormRegister<DataProps>;
    errors: FieldErrors;
    touchedFields: Partial<Record<keyof DataProps, boolean>>;
    watch: UseFormWatch<DataProps>;
}

export const Input = (props: InputProps) => {
    const fieldValue = props.watch(props.name);
    const hasError = !!props.errors[props.name];
    const isTouched = props.touchedFields[props.name] ;

    const isError = hasError || isTouched && fieldValue?.trim() === "";

    const isFulfilled = !hasError && isTouched && fieldValue?.trim() !== "";

    return (
        <S.InputWrapper>
            <S.Input
                type={props.type}
                placeholder={props.placeholder}
                {...props.register(props.name, props.isRequired ? { required: true } : {})}
                $isError={isError}
                $isFulfilled={isFulfilled}
            />
                {isError && <S.Alert>campo obrigatório</S.Alert>}
        </S.InputWrapper>
    )
}