import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
  } from "react";
  import Lembrete from "../types/Lembrete";
  
  interface LembretesContextType {
    lembretes: Lembrete[];
    adicionarLembrete: (lembrete: Omit<Lembrete, "id">) => Promise<void>;
    removerLembrete: (idLembrete: number) => Promise<void>;
  }
  
  // Define the context with an initial value
  export const LembretesContext = createContext<LembretesContextType | undefined>(
    undefined
  );
  
  interface LembretesProviderProps {
    children: ReactNode;
  }
  
  export default function LembretesProvider({
    children,
  }: LembretesProviderProps) {
    const [lembretes, setLembretes] = useState<Lembrete[]>([]);
  
    //UseEffect que faz a primeira renderização do componente de lista
    useEffect(() => {
      async function carregarLembretes() {
        try {
          const url = "https://localhost:7270/api/Lembrete/";
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Erro ao carregar lembretes");
          }
          const data = await response.json();
          setLembretes(data);
        } catch (error) {
          console.error("Ocorreu um erro ao carregar lembretes:", error);
        }
      }
  
      carregarLembretes();
    }, []);
  
    //funcao que recebe um lembrete e adiciona na lista que armazena os lembretes
    async function adicionarLembrete(lembrete: Omit<Lembrete, "id">) {
      try {
        const url = "https://localhost:7270/api/Lembrete/";
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(lembrete),
        });
  
        if (!response.ok) {
          throw new Error("Erro ao adicionar lembrete");
        }
  
        setLembretes(await response.json());
      } catch (error) {
        console.error("Ocorreu um erro ao adicionar lembrete:", error);
      }
    }
  
    //funcao responsavel por apagar um lembre que recebe o id como paramentro e envia via url
    async function removerLembrete(idLembrete: number) {
      try {
        const response = await fetch(
          `https://localhost:7270/api/Lembrete/?id=${idLembrete}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Erro ao excluir o lembrete");
        }
  
        setLembretes(await response.json());
      } catch (error) {
        console.error("Ocorreu um erro ao excluir o lembrete:", error);
      }
    }
  
    return (
      <LembretesContext.Provider
        value={{ lembretes, adicionarLembrete, removerLembrete }}
      >
        {children}
      </LembretesContext.Provider>
    );
  }
  
  //hook personalizado que fornece o contexto dos lembretes
  export function useLembreteContext(): LembretesContextType {
    const context = useContext(LembretesContext);
    if (!context) {
      throw new Error(
        "useLembreteContext deve ser usado dentro de um LembretesProvider"
      );
    }
    return context;
  }
  