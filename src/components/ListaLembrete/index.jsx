import styled from "styled-components";
import { useLembreteContext } from "../../context/lembretes.jsx";
import CloseIcon from '../../assets/close.svg';

const ContainerLista = styled.div`
    > h2 {
        font-weight: bold;
        font-size: large;
    }
    > ul {
        margin: 1rem;
        display: flex;
        flex-direction: column;
        row-gap: .8rem;
        > li {
            font-weight: 700;
            display: flex;
            justify-content: space-between; 
        }
        .delete-button {
            cursor: pointer;
            width:1rem;
        }
    }
`;

// Componente responsável por renderizar a lista de lembretes
function ListaDeLembretes() {
    // Importação do contexto e função de remoção de lembrete
    const { lembretes, removerLembrete } = useLembreteContext();

    // Agrupamento de lembretes por data
    const lembretesPorData = lembretes.reduce((acc, lembrete) => {
        const data = lembrete.data;
        if (!acc[data]) {
            acc[data] = [];
        }
        acc[data].push(lembrete);
        return acc;
    }, {});

    // Ordenação das datas
    const datasOrdenadas = Object.keys(lembretesPorData).sort();
    // Array de nomes de meses para formatação da data
    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

    return (
        <ContainerLista>
            <h2>Seus Lembretes</h2>
            {datasOrdenadas.map((data) => (
                <ul key={data}>
                    {/* Formatação da data */}
                    <li>
                        {data.replace(/(\d{4})-(\d{2})-(\d{2})T.*/, (_, ano, mes, dia) => {
                            return `${parseInt(dia)} de ${meses[parseInt(mes) - 1]} de ${ano}`;
                        })}
                    </li>
                    {/* Mapeamento dos lembretes */}
                    {lembretesPorData[data].map((lembrete) => (
                        <li key={lembrete.id}>
                            {lembrete.titulo}
                            <span
                                className="delete-button"
                                onClick={async () => removerLembrete(lembrete.id)}
                            >
                               <img className="delete-button"  src={CloseIcon} alt="Icone para deletar lembrete" />
                            </span>
                        </li>
                    ))}
                </ul>
            ))}
        </ContainerLista>
    );
}


export default ListaDeLembretes;
