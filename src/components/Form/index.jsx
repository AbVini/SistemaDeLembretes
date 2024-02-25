import { useState } from "react";
import styled from "styled-components";
import { useLembreteContext } from "../../context/lembretes";

const FormularioStyled = styled.form`
    padding: .8rem 0;
    text-align: right;
    > button {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border: none;
        background-color: #3e5bff;
        color: white;
        padding: .5rem 1.5rem;
        margin-top: 1rem;
        border-radius: 15px;
    }
    > div {
        text-align: left;
        padding: .5rem 0;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        > input {
            width: 100%;
            border-radius: 9px;
            padding: .6rem .2rem;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border: 2px solid ${props => props.error ? 'red' : 'transparent'};
            &:invalid {
                border: 2px solid red;
            }
        }
        > .error-message {
            color: red;
            font-size: 0.8rem;
            display: block;
        }
    }
`;

function Form() {
    const [titulo, setTitulo] = useState("");
    const [data, setData] = useState("");
    const [errorTitulo, setErrorTitulo] = useState("");
    const [errorData, setErrorData] = useState("");
    const { adicionarLembrete } = useLembreteContext();

    async function aoEnviar(evento) {
        evento.preventDefault();

        // Limpa os erros antes de validar novamente
        setErrorTitulo("");
        setErrorData("");

        // Validação dos campos
        if (!titulo.trim()) {
            setErrorTitulo('Por favor, preencha este campo.');
            return;
        }

        if (!data) {
            setErrorData('Por favor, selecione uma data.');
            return;
        }

        // Verifica se a data é válida
        const dataAtual = new Date();
        const dataSelecionada = new Date(data);
        if (dataSelecionada < dataAtual) {
            setErrorData('A data deve estar no futuro.');
            return;
        }

        // Adiciona o lembrete se todos os critérios forem atendidos
        await adicionarLembrete({ titulo, data });
        setTitulo("");
        setData("");
    }

    return (
        <FormularioStyled onSubmit={aoEnviar} error={errorTitulo || errorData}>
            <div>
                <label htmlFor="titulo">Titulo: </label>
                <input type="text" id="titulo" value={titulo} onChange={evento => setTitulo(evento.target.value)} placeholder="Titulo do lembrete" />
                <span className="error-message">{errorTitulo}</span>
            </div>
            <div>
                <label htmlFor="data">Data: </label>
                <input type="date" id="data" value={data} onChange={evento => setData(evento.target.value)} />
                <span className="error-message">{errorData}</span>
            </div>
            <button type="submit">Criar</button>
        </FormularioStyled>
    );
}

export default Form;
