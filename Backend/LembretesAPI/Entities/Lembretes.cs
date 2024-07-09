using System.ComponentModel.DataAnnotations;
using LembretesAPI.Validacoes;

namespace LembretesAPI.Entities
{
    public class Lembrete
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este Campo e obrigario")]
        public required string Titulo { get; set; }

        [Required(ErrorMessage ="A data deve ser informada")]
        [ValidacaoDataAtual(ErrorMessage = "A data deve ser maior ou igual a data atual")]
        public DateTime Data { get; set; }

    }
}
