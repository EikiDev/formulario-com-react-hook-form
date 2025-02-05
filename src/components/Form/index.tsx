import { useForm } from "react-hook-form";
import * as S from "./style";
import { Input } from "../Input";
import { TextArea } from "../TextArea";

export type DataProps = {
    nome: string;
    email: string;
    telefone: string;
    mensagem: string;
}

const handleSubmitForm = (data: DataProps) => {
    console.log(data);
}

export const Form = () => {
    const { handleSubmit, register, watch, formState: { errors, touchedFields } } = useForm<DataProps>();
    return (
        <S.Form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input
                type="text"
                placeholder="Nome completo *"
                name="nome"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
                isRequired={true}
                watch={watch}
            />
            <Input
                type="email"
                placeholder="Email *"
                name="email"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
                isRequired={true}
                watch={watch}
            />
            <Input
                type="tel"
                placeholder="Telefone *"
                name="telefone"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
                isRequired={true}
                watch={watch}
            />
            <TextArea
                cols={30}
                rows={5}
                placeholder="Mensagem *"
                name="mensagem"
                register={register}
                errors={errors}
                touchedFields={touchedFields}
                isRequired={true}
                watch={watch}
            />
            <S.Alert>campos obrigatórios</S.Alert>
            <S.SubmitButton type="submit">Enviar</S.SubmitButton>
        </S.Form>
    )
}