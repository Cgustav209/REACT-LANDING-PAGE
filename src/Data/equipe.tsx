//dados dos membros da equipe da nossa landing page

export interface MembroEquipe {
    id: number;
    nome: string;
    cargo: string;
    descricao: string;
    cor: string;
}

export const equipe: MembroEquipe[] = [
    {
        id: 1,
        nome: "Heitor Guimarães",
        cargo: "Fundador e CEO",
        descricao: "Especialista em gestão educacional com 15 anos de experiência no setor técnico.",
        cor: "#FF5733"
    },
    {
        id: 2,
        nome: "Bianca Paiva",
        cargo: "CTO",
        descricao: "Engenheira de software focada em arquiteturas escaláveis e segurança de dados.",
        cor: "#33FF57"
    },

    {   
        id: 3,
        nome: "Gustavo Barbosa",
        cargo: "Sucesso do Cliente",
        descricao: "Designer UX apaixonado por criar interfaces que facilitam o dia a dia do professor.",
        cor: "#3357FF"
    },

    {
        id: 4,
        nome: "Felipe Aragão",
        cargo: "Head de Produto",
        descricao: "Garante que cada escola parceira extraia o máximo potencial da nossa tecnologia.",
        cor: "#FF33A1"
    }

    ];